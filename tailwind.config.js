module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: () => ({
				"topography": "url('/topography.svg')",
				"robotics": "url('/roboticsbackground.jpg')",
				"3dmodeling": "url('/3dbackground.jpg')",
				"landscape": "url('/vvland.jpeg')",
				"floatingcogs": "url('/floating-cogs.svg')"
			}),
			colors: {
				"blurple": "#5865F2",
				"insta1": "#fd1d1d",
				"insta2": "#833ab4",
				"insta3": "#405de6",
				"insta4": "#FEDA77"
			}
		},
		fontFamily: {
			abril: ["Abril Fatface", "cursive"],
			bebas: ["Bebas Neue", "cursive"],
			merriweather: ["Merriweather", "serif"],
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("daisyui")
	],
	daisyui: {
		themes: [
			{
				"lighttheme": {                          /* your theme name */
					"primary" : "#ffffff",           /* Primary color */
					"primary-focus" : "#cccccc",     /* Primary color - focused */
					"primary-content" : "#000000",   /* Foreground content color to use on primary color */

					"secondary" : "#f6d860",         /* Secondary color */
					"secondary-focus" : "#f3cc30",   /* Secondary color - focused */
					"secondary-content" : "#000000", /* Foreground content color to use on secondary color */

					"accent" : "#37cdbe",            /* Accent color */
					"accent-focus" : "#2aa79b",      /* Accent color - focused */
					"accent-content" : "#ffffff",    /* Foreground content color to use on accent color */

					"neutral" : "#111111",           /* Neutral color */
					"neutral-focus" : "#3d4451",     /* Neutral color - focused */
					"neutral-content" : "#ffffff",   /* Foreground content color to use on neutral color */

					"base-100" : "#eeeeee",          /* Base color of page, used for blank backgrounds */
					"base-200" : "#cccccc",          /* Base color, a little darker */
					"base-300" : "#aaaaaa",          /* Base color, even more darker */
					"base-content" : "#333333",      /* Foreground content color to use on base color */

					"info" : "#2094f3",              /* Info */
					"success" : "#009485",           /* Success */
					"warning" : "#ff9900",           /* Warning */
					"error" : "#ff5724",             /* Error */
				},
			}, {
				"darktheme": {                          /* your theme name */
					"primary" : "#000000",           /* Primary color */
					"primary-focus" : "#333333",     /* Primary color - focused */
					"primary-content" : "#ffffff",   /* Foreground content color to use on primary color */

					"secondary" : "#f6d860",         /* Secondary color */
					"secondary-focus" : "#f3cc30",   /* Secondary color - focused */
					"secondary-content" : "#ffffff", /* Foreground content color to use on secondary color */

					"accent" : "#2b9e93",            /* Accent color */
					"accent-focus" : "#d1d5db",      /* Accent color - focused */
					"accent-content" : "#ffffff",    /* Foreground content color to use on accent color */

					"neutral" : "#aaaaaa",           /* Neutral color */
					"neutral-focus" : "#d1d5db",     /* Neutral color - focused */
					"neutral-content" : "#ffffff",   /* Foreground content color to use on neutral color */

					"base-100" : "#555555",          /* Base color of page, used for blank backgrounds */
					"base-200" : "#333333",          /* Base color, a little darker */
					"base-300" : "#111111",          /* Base color, even more darker */
					"base-content" : "#cccccc",      /* Foreground content color to use on base color */

					"info" : "#2094f3",              /* Info */
					"success" : "#009485",           /* Success */
					"warning" : "#ff9900",           /* Warning */
					"error" : "#ff5724",             /* Error */
				}
			},
			"cyberpunk"
		],
	},
};
