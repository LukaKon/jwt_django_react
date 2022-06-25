import React, { useState, useEffect } from "react";
import { axiosInstance } from "../axiosApi";

export const Login = () => {
    const [form, setForm] = useState({ username: "", password: "" });

    const handleSubmit = (e) => {
        let data = new FormData(e.currentTarget);
        data = {
            username: data.get("username"),
            password: data.get("password"),
        };

        console.log(`Data submitted: ${form.username} and ${form.password}`);
        e.preventDefault();
        try {
            // const response = axiosInstance
            // .post("token/obtain/", data)
            // .then((resp) => console.log(resp));

            const response = axiosInstance
                .post("token/obtain/", data)
                .then((response) => {
                    console.log(response);
                });
            // const response = axiosInstance.post("token/obtain", {
            // username: form.username,
            // password: form.password,
            // });

            axiosInstance.defaults.headers["Authorization"] =
                "JWT " + response.data.access;

            localStorage.setItem("access_token", response.data.access);
            localStorage.setItem("refresh_token", response.data.refresh);

            return data;
        } catch (error) {
            throw error;
        }
    };

    const handleSubmitWThen = (e) => {
        e.preventDefault();
        axiosInstance
            .post("token/obtain", {
                username: form.username,
                password: form.password,
            })
            .then((res) => {
                axiosInstance.defaults.headers["Authorization"] =
                    "JWT " + res.data.access;
                localStorage.setItem("access_token", res.data.access);
                localStorage.setItem("refresh_token", res.data.refresh);
            })
            .catch((error) => {
                throw error;
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((state) => {
            return { ...state, [name]: value };
        });
    };
    // console.log("form: ", form);
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
