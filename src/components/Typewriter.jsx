import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypeWriter = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Full Stack Developer",
                "Professional Coder",
                "Web Enthusiast",
            ],
            typeSpeed: 50,      // Typing speed
            backSpeed: 30,      // Delete speed
            backDelay: 1000,    // Kitni der baad delete ho
            startDelay: 500,
            loop: true,         // Infinite repeat
            showCursor: true,
            cursorChar: "|",
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <h1 className="text-4xl font-bold text-white">
            A <span ref={el}></span>
        </h1>
    );
};

export default TypeWriter;