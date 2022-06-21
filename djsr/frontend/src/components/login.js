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

            axiosInstance.post("token/obtain/", data).then((response) => {
                console.log(response);
            });

            // {
            //     username: form.username,
            //     password: form.password,
            // });
            // console.log("resp: ", response.data);
            // axiosInstance.defaults.headers["Authorization"] =
            // "JWT " + response.data.access;

            // localStorage.setItem("access_token", response.data.access);
            // localStorage.setItem("refresh_token", response.data.refresh);
            // console.log("storage: ", localStorage);

            // return data;
            return {};
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
