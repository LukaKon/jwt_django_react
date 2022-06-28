import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./login";
import { Signup } from "./signup";
import { Hello } from "./hello";
import { Link } from "@mui/material";
import { axiosInstance } from "../axiosApi";

export const App = () => {
    const handleLogout = async () => {
        try {
            const response = await axiosInstance.post("/blacklist/", {
                refresh_token: localStorage.getItem("refresh_token"),
            });
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            axiosInstance.defaults.headers["Authorization"] = null;

            return response;
        } catch (e) {
            console.log("error: ", e);
        }
    };

    return (
        <div className="site">
            <nav>
                <Link className="nav-link" href="/">
                    Home
                </Link>
                <Link className="nav-link" href="/login/">
                    Login
                </Link>
                <Link className="nav-link" href="/signup/">
                    Signup
                </Link>
                <Link className="nav-link" href="/hello/">
                    Hello
                </Link>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <main>
                <h1>Main page loaded...</h1>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="hello" element={<Hello />} />
                        <Route path="/" render={() => <div>Home again</div>} />
                    </Routes>
                </BrowserRouter>
            </main>
        </div>
    );
};
