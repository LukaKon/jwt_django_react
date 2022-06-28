import React, { useState, useEffect } from "react";
import { axiosInstance } from "../axiosApi";

export const Login = () => {
    const [form, setForm] = useState({ username: "", password: "" });

    const handleSubmit = async (e) => {
        let user_data = new FormData(e.currentTarget);
        user_data = {
            username: form.username,
            password: form.password,
        };

        // console.log(`Data submitted: ${form.username} and ${form.password}`);
        e.preventDefault();
        try {
            const data = await axiosInstance.post("/token/obtain/", user_data);
            // console.log("data: ", data.data.refresh);
            axiosInstance.defaults.headers["Authorization"] =
                "JWT " + data.access;
            localStorage.setItem("access_token", data.data.access);
            localStorage.setItem("refresh_token", data.data.refresh);
            return data;
        } catch (error) {
            throw error;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((state) => {
            return { ...state, [name]: value };
        });
    };
    return (
        <div>
            Login
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        name="username"
                        type="text"
                        value={form.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};
