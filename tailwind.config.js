import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                // serif: ["Playfair Display", "serif"],
                // mono: ["Fira Code", "monospace"],
            },
            colors: {
                // Light and Dark Mode Colors
                background: "#F0F7FF", // Light mode background color
                primary: "#222222", // Dark primary color
                secondary: "#F6FDFD", // Light Gray (Secondary)
                accent: "#E74C3C", // Accent Red
                darkPrimary: "#1E7B3A", // Darker Green for hover or dark mode
                darkAccent: "#C0392B", // Darker Red (Accent)
                lightGray: "#F4F4F4", // Light Gray background 
                darkGray: "#333333", // Dark Gray text
                transparentBlack: "rgba(0, 0, 0, 0.6)", // Semi-transparent black for modals/overlays
                success: "#2ECC71", // Success Green
                info: "#3498DB", // Info Blue
                warning: "#F39C12", // Warning Yellow
                danger: "#E74C3C", // Danger Red
                muted: "#BDC3C7", // Muted Gray
                sidehover: "#1677FF26",
                // Dark Mode colors
                darkBackground: "#121212", // Dark mode background
                darkPrimaryText: "#E0E0E0", // Light primary text color in dark mode
                darkSecondaryText: "#B0B0B0", // Secondary text color in dark mode
                darkAccentText: "#FF6347", // Dark mode accent color (lighter red)

                // Light Mode colors
                lightPrimaryText: "#333333", // Primary text color in light mode
                lightSecondaryText: "#666666", // Secondary text color in light mode
                lightAccentText: "#FF5733", // Light mode accent color (red)
            },
        },
    },

    plugins: [forms, require("tailwindcss-animate")],
};
