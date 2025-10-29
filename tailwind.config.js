/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./static/js/**/*.js"],
    theme: {
        extend: {
            colors: {
                purple: "#A87EFA",
                blue: "#24A6E8",
                green: "#16B977",
                yellow: "#FEC26F",
                gray: "#BEC7D3",
                darkGray: "#465364",
                bgColor: "#10171F",
                bgColor2: "#171E28",
            },
            fontFamily: {
                JetBrains: ["JetBrains Mono", "monospace"],
            },
            screens: {
                xxs: "360px",
                xs: "500px",
            },
        },
    },
    plugins: [],
};
