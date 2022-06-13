import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./login";
import { Signup } from "./signup";
import { Link } from "@mui/material";

export const App = () => {
    return (
        <div className="site">
            <nav>
                <Link className="nav-link" href="/">
                    Home
                </Link>
                <Link className="nav-link" href="/login/">
                    Login
                </Link>
                <Link className="nav-ling" href="/signup/">
                    Signup
                </Link>
            </nav>
            <main>
                <h1>
                    Ahhh, after 10,000 years I'm free. Time to conquer the
                    Earth!
                </h1>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                        <Route
                            // exact
                            path="/"
                            render={() => <div>Home again</div>}
                        />
                    </Routes>
                </BrowserRouter>
            </main>
        </div>
    );
};
