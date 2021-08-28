module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
		fontFamily: {
			abril: ["Abril Fatface", "cursive"],
			bebas: ["Bebas Neue", "cursive"]
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
