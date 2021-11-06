module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width: {},
            spacing: {},
            height: {},
            fontFamily: {
                pops: ["Poppins", "Helvetica", "Arial", "sans-serif"],
                inter: ["Inter", "Helvetica", "Arial", "sans-serif"],
            },
            fontSize: {},
            colors: {
                transparent: "transparent",
                nav: {
                    bg: "#F7F9FF",
                },
                dropShadow: {
                    lg: "0 35px 35px rgb(255,192,203) ",
                },
                primary: {
                    pink: "#E40678",
                    pinkDark: "#bd0061",
                    gray: "#153059",
                    dotcolor: "#E8EFF5",
                    lightpink: "#FFDBED",
                    placeholder: "#f7f9ff",
                    lightblue: "#c4d7e7",
                    hover: "#F7F9FF",
                    privatebtn: "#FA8D8D",
                    lightgreen: "#27AE60",
                    design: "#E8FFFE",
                },
                extra: {
                    blue: "#0D417F",
                    purple: "#92278F",
                    purple2: "#864798",
                    darkgreen: "#48999A",
                    blue2: "#3C82AF",
                    blue3: "#595CA6",
                    orange: "#D7634E",
                    pink: "#D13077",
                    placeholder: "#839FC0",
                },
            },
            textColor: {
                primary: "#E40678",
                secondary: "#153059",
                text: "#415f8b",
                grey: "#839FC0",
                white: "#ffffff",
                quicklinkdes: "#7A97B9",
                lightgreen: "#27AE60",
                link: "#0058DB",
            },
            lineHeight: {},
            borderColor: (theme) => ({
                DEFAULT: theme("colors.gray.300", "currentColor"),
                primary: "#E40678",
                secondary: "#153059",
                placeholder: "#f7f9ff",
                lightblue: "#c4d7e7",
                bar: "#e8eff5",
                lightgreen: "#27AE60",
            }),
        },
    },
    variants: {
        extend: {
            backgroundColor: ["hover"],
        },
    },
    plugins: [require("@tailwindcss/custom-forms")],
};
