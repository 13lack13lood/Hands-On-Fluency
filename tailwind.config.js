/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: "Poppins",
            },
            colors: {
                primary: "#fb8065",
                secondary: "#5d78De",
            },
        },
    },
    plugins: [],
};
