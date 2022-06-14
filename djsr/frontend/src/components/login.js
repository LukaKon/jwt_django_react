import React, { useState, useEffect } from "react";

export const Login = () => {
    const [form, setForm] = useState({ username: "", password: "" });

    const handleSubmit = (e) => {
        console.log(`Data submitted: ${form.username} and ${form.password}`);
        e.preventDefault();
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
