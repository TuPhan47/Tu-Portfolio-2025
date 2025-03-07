'use client'
import { useEffect, useState } from "react";

const Contact = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup
    }, []);
    return (
        <h1>
            Seconds: {seconds}
        </h1>
    );
};

export default Contact;