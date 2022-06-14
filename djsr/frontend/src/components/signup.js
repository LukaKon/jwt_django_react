import React, { useState } from "react";

export const Signup = () => {
    const [form, setForm] = useState({ username: "", password: "", email: "" });

    const handleSubmit = (e) => {
        console.log(
            `Data submitted: ${form.username}, ${form.email}, ${form.password}`
        );
        e.preventDefault();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((state) => {
            return { ...state, [name]: value };
        });
    };
    return (
        <div>
            Signup
            <form onSubmit={handleSubmit}>
                <label>
                    Username{" "}
                    <input
                        name="username"
                        type="text"
                        value={form.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        name="email"
                        type="email"
                        value={form.email}
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
