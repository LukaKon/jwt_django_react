import React, { useState } from "react";
import { axiosInstance } from "../axiosApi";

export const Signup = () => {
    const [form, setForm] = useState({
        username: "",
        password: "",
        email: "",
    });
    const [errors, setErrors] = useState({ error: "" });

    const handleSubmit = async (e) => {
        let user_data = new FormData(e.currentTarget);
        user_data = {
            username: form.username,
            password: form.password,
            email: form.email,
        };
        // console.log(
        // `Data submitted: ${form.username}, ${form.email}, ${form.password}`
        // );
        e.preventDefault();
        try {
            const response = await axiosInstance.post(
                "/user/create/",
                user_data
            );
            return response;
        } catch (error) {
            console.log(error.stack);
            // throw error;
            setErrors({ error: error.response.data });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((state) => {
            return { ...state, [name]: value };
        });
    };

    // console.log("err: ", errors.error);
    return (
        <div>
            Signup
            <form onSubmit={handleSubmit}>
                <label>
                    Username
                    <input
                        name="username"
                        type="text"
                        value={form.username}
                        onChange={handleChange}
                    />
                    {errors.error.username ? errors.error.username : null}
                </label>
                <label>
                    Email:
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    {errors.error.email ? errors.error.email : null}
                </label>
                <label>
                    Password:
                    <input
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                    {errors.error.password ? errors.error.password : null}
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};
