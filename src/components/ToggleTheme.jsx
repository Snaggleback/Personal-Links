import React, { useState } from "react";
import { TbSunFilled, TbMoonFilled } from "react-icons/tb";

export function ToggleTheme() {
    const [theme, setTheme] = useState(localStorage.theme || "light");

    function toggleCurrentTheme() {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        }
        setTheme(localStorage.theme);
    }

    return (
        <div id="toggle-theme" className="absolute top-5 right-5 p-4">
            <button id="toggle-theme-icon" onClick={toggleCurrentTheme}>
                {theme === "dark" ? (
                    <TbSunFilled className="size-7 text-zinc-200" />
                ) : (
                    <TbMoonFilled className="size-7 text-dog-blue" />
                )}
            </button>
        </div>
    );
}

export function setThemeLocal() {
    if (!("theme" in localStorage)) {
        localStorage.theme = "light";
    }

    if (localStorage.theme === "dark") {
        document.documentElement.classList.add("dark");
    }
}
