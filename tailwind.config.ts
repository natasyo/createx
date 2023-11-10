import withMT from "@material-tailwind/react/utils/withMT";

const colors = {
  "gray-200": "#F4F5F6",
  "gray-300": "#E5E8ED",
  "gray-400": "#D7DADD",
  "gray-500": "#B3B7BC",
  "gray-600": "#9A9CA5",
  "gray-700": "#787A80",
  "gray-800": "#424551",
  "gray-900": "#1E212C",
  "green-800": "#17696A",
  "green-700": "#03CEA4",
  "green-900": "#145C5D",
  "red-400": "#FF4242",
};

const sizes = {
  "3.75": "0.9375rem",
  "7.5": "1.874rem",
  "13": "3.25rem",
  "13.5": "3.375rem",
  "15": "3.75rem",
  "18": "4.5rem",
  "21.25": "5.3125rem",
  "25": "6.25rem",
  "30": "7.5rem",
  "35": "8.75rem",
  "37.5": "9.375rem",
  "42": "10.5rem",
  "45": "11.25rem",
  "57.5": "14.375rem",
  "71.25": "17.8125rem",
  "82": "20.5rem",
  "90": "22.5rem",
  "90.75": "24,375rem",
  "95": "23.75rem",
  "97.5": "24.375rem",
  "125": "31.25rem",
  "150": "37.5rem",
  "200": "50rem",
};

const config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        body: ["Lato", "Arial"],
        ubuntu: ["Ubuntu", "Lato"],
      },
      maxWidth: { lg: "30.375rem", ...sizes },
      minWidth: { ...sizes },
      width: {
        ...sizes,
      },
      padding: {
        ...sizes,
      },
      height: {
        ...sizes,
      },
      margin: {
        ...sizes,
      },
      inset: {
        ...sizes,
      },
      lineHeight: {
        "1.6": "160%",
        "1.3": "130%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        border:
          "linear-gradient(0deg, rgba(218, 219, 221, 0.00) 0%, rgba(218, 219, 221, 0.50) 12.33%, #DADBDD 51.91%, rgba(218, 219, 221, 0.50) 87.85%, rgba(218, 219, 221, 0.00) 100%)",
      },
      backgroundSize: {
        "100%": "100%",
      },
      backgroundColor: { ...colors },
      backgroundOpacity: {
        "12": "0.12",
      },
      gap: {
        ...sizes,
      },
      textColor: { ...colors },
      fontSize: {
        "2.5xl": "1.75rem",
        "4.8xl": "2.875rem",
        "3.5xl": "2rem",
      },
      placeholderColor: { ...colors },
      borderColor: { ...colors },
      borderOpacity: { "15": "0.15" },
      fill: { ...colors },
      boxShadow: {
        md: "0px 4px 4px -4px rgba(30, 33, 44, 0.03), 0px 12px 10px -6px rgba(23, 105, 106, 0.04), 0px 30px 24px -10px rgba(23, 105, 106, 0.05), 0px 80px 80px -20px rgba(23, 105, 106, 0.08)",
        regular:
          "0px 4px 4px -4px rgba(30, 33, 44, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.10), 0px 80px 80px -20px rgba(154, 156, 165, 0.16)",
      },
    },
  },
  plugins: [],
});

export default config;
