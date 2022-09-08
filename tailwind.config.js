module.exports = {
	purge: {
		content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
		options: {
			safelist: [
				/data-theme$/,
			]
		},
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: theme => ({
				"topography": "url('../public/topography.svg')",
				"robotics": "url('../public/roboticsbackground.jpg')",
				"3dmodeling": "url('../public/3dbackground.jpg')"
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
			bebas: ["Bebas Neue", "cursive"]
		},
	},
	plugins: [
		require("daisyui")
	],
	daisyui: {
		themes: [
			{
				"lighttheme": {                          /* your theme name */
					"primary" : "#ffffff",           /* Primary color */
					"primary-focus" : "#3d4451",     /* Primary color - focused */
					"primary-content" : "#000000",   /* Foreground content color to use on primary color */

					"secondary" : "#f6d860",         /* Secondary color */
					"secondary-focus" : "#f3cc30",   /* Secondary color - focused */
					"secondary-content" : "#ffffff", /* Foreground content color to use on secondary color */

					"accent" : "#37cdbe",            /* Accent color */
					"accent-focus" : "#2aa79b",      /* Accent color - focused */
					"accent-content" : "#ffffff",    /* Foreground content color to use on accent color */

					"neutral" : "#000000",           /* Neutral color */
					"neutral-focus" : "#3d4451",     /* Neutral color - focused */
					"neutral-content" : "#ffffff",   /* Foreground content color to use on neutral color */

					"base-100" : "#ffffff",          /* Base color of page, used for blank backgrounds */
					"base-200" : "#f9fafb",          /* Base color, a little darker */
					"base-300" : "#d1d5db",          /* Base color, even more darker */
					"base-content" : "#1f2937",      /* Foreground content color to use on base color */

					"info" : "#2094f3",              /* Info */
					"success" : "#009485",           /* Success */
					"warning" : "#ff9900",           /* Warning */
					"error" : "#ff5724",             /* Error */
				},
			}, {
				"darktheme": {                          /* your theme name */
					"primary" : "#000000",           /* Primary color */
					"primary-focus" : "#3d4451",     /* Primary color - focused */
					"primary-content" : "#ffffff",   /* Foreground content color to use on primary color */

					"secondary" : "#f6d860",         /* Secondary color */
					"secondary-focus" : "#f3cc30",   /* Secondary color - focused */
					"secondary-content" : "#000000", /* Foreground content color to use on secondary color */

					"accent" : "#37cdbe",            /* Accent color */
					"accent-focus" : "#d1d5db",      /* Accent color - focused */
					"accent-content" : "#000000",    /* Foreground content color to use on accent color */

					"neutral" : "#ffffff",           /* Neutral color */
					"neutral-focus" : "#d1d5db",     /* Neutral color - focused */
					"neutral-content" : "#000000",   /* Foreground content color to use on neutral color */

					"base-100" : "#ffffff",          /* Base color of page, used for blank backgrounds */
					"base-200" : "#f9fafb",          /* Base color, a little darker */
					"base-300" : "#d1d5db",          /* Base color, even more darker */
					"base-content" : "#1f2937",      /* Foreground content color to use on base color */

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
