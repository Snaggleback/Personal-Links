import { useState, useEffect } from "react";
import { TbSunFilled, TbMoonFilled } from "react-icons/tb";

export function ToggleTheme() {
    const [theme, setTheme] = useState(localStorage.theme || "light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.theme = theme;
    }, [theme]);

    function toggleCurrentTheme() {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    }

    return (
        <div className="absolute top-5 right-5 p-4">
            <button onClick={toggleCurrentTheme}>
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
    } else {
        document.documentElement.classList.remove("dark");
    }
}
