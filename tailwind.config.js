module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["monospace", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bloglight: {
          primary: "#7c3aed", // purple
          secondary: "#22c55e", // green
          accent: "#ffd700", // gold
          neutral: "#222222",
          "base-100": "#ffffff",
          info: "#3abff8",
          success: "#22c55e",
          warning: "#fbbf24",
          error: "#ef4444",
        },
      },
      {
        blogdark: {
          primary: "#a78bfa", // lighter purple
          secondary: "#4ade80", // lighter green
          accent: "#ffd700", // gold
          neutral: "#ffffff",
          "base-100": "#000000",
          info: "#0ea5e9",
          success: "#22c55e",
          warning: "#fbbf24",
          error: "#ef4444",
        },
      },
    ],
    darkTheme: "blogdark",
    base: true,
    styled: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
  },
}; 