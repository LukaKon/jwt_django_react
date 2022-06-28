import React, { useState, useEffect } from "react";
import { axiosInstance } from "../axiosApi";

export const Hello = () => {
    const [message, setMessage] = useState({ message: "" });
    const [errors, setErrors] = useState({ errors: null });

    const getMessage = async () => {
        try {
            const response = await axiosInstance.get("hello");
            // console.log("resp in hello: ", response);
            const message = response.data.hello;
            setMessage({ message: message });
            // console.log("msg: ", message);
            return message;
        } catch (error) {
            // console.log("Error: ", JSON.stringify(error, null, 4));
            setErrors({ errors: error.message });
            // throw error;
        }
    };

    useEffect(() => {
        const messageData1 = getMessage();
        console.log("messageData1: ", JSON.stringify(messageData1, null, 4));
    }, []);

    let content = null;
    if (errors.errors) {
        content = (
            <div>
                You are not supposed to be here!
                <p>{errors.errors}</p>
            </div>
        );
    } else {
        content = (
            <div>
                <b>{message.message}</b>
            </div>
        );
    }

    return <div>{content}</div>;
};
