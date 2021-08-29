module.exports = {
  purge: {
		content: ["./src/**/*.{js,jsx,ts,tsx}"],
		options: {
			safelist: [
				/data-theme$/,
			]
		},
	},
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
			backgroundImage: theme => ({
				"topography": "url('/images/topography.svg')"
			})
		},
		fontFamily: {
			abril: ["Abril Fatface", "cursive"],
			bebas: ["Bebas Neue", "cursive"]
		},
  },
  variants: {
    extend: {},
  },
  plugins: [
		require("daisyui")
	],
	daisyui: {
    themes: [
      {
        'light': {                          /* your theme name */
           'primary' : '#ffffff',           /* Primary color */
           'primary-focus' : '#3d4451',     /* Primary color - focused */
           'primary-content' : '#000000',   /* Foreground content color to use on primary color */

           'secondary' : '#f6d860',         /* Secondary color */
           'secondary-focus' : '#f3cc30',   /* Secondary color - focused */
           'secondary-content' : '#ffffff', /* Foreground content color to use on secondary color */

           'accent' : '#37cdbe',            /* Accent color */
           'accent-focus' : '#2aa79b',      /* Accent color - focused */
           'accent-content' : '#ffffff',    /* Foreground content color to use on accent color */

           'neutral' : '#000000',           /* Neutral color */
           'neutral-focus' : '#3d4451',     /* Neutral color - focused */
           'neutral-content' : '#ffffff',   /* Foreground content color to use on neutral color */

           'base-100' : '#ffffff',          /* Base color of page, used for blank backgrounds */
           'base-200' : '#f9fafb',          /* Base color, a little darker */
           'base-300' : '#d1d5db',          /* Base color, even more darker */
           'base-content' : '#1f2937',      /* Foreground content color to use on base color */

           'info' : '#2094f3',              /* Info */
           'success' : '#009485',           /* Success */
           'warning' : '#ff9900',           /* Warning */
           'error' : '#ff5724',             /* Error */
        },
      },
			{
        'dark': {                          /* your theme name */
           'primary' : '#000000',           /* Primary color */
           'primary-focus' : '#3d4451',     /* Primary color - focused */
           'primary-content' : '#ffffff',   /* Foreground content color to use on primary color */

           'secondary' : '#f6d860',         /* Secondary color */
           'secondary-focus' : '#f3cc30',   /* Secondary color - focused */
           'secondary-content' : '#000000', /* Foreground content color to use on secondary color */

           'accent' : '#37cdbe',            /* Accent color */
           'accent-focus' : '#d1d5db',      /* Accent color - focused */
           'accent-content' : '#000000',    /* Foreground content color to use on accent color */

           'neutral' : '#ffffff',           /* Neutral color */
           'neutral-focus' : '#d1d5db',     /* Neutral color - focused */
           'neutral-content' : '#000000',   /* Foreground content color to use on neutral color */

           'base-100' : '#ffffff',          /* Base color of page, used for blank backgrounds */
           'base-200' : '#f9fafb',          /* Base color, a little darker */
           'base-300' : '#d1d5db',          /* Base color, even more darker */
           'base-content' : '#1f2937',      /* Foreground content color to use on base color */

           'info' : '#2094f3',              /* Info */
           'success' : '#009485',           /* Success */
           'warning' : '#ff9900',           /* Warning */
           'error' : '#ff5724',             /* Error */
        }
			},
			{
				"cyberpunk": {
					"fontFamily": "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
					"primary": "#ff7598",
					"primary-focus": "#ff5784",
					"primary-content": "#000000",
					"secondary": "#75d1f0",
					"secondary-focus": "#5abfdd",
					"secondary-content": "#000000",
					"accent": "#c07eec",
					"accent-focus": "#af59e8",
					"accent-content": "#000000",
					"neutral": "#423f00",
					"neutral-focus": "#090901",
					"neutral-content": "#ffee00",
					"base-100": "#ffee00",
					"base-200": "#dbcd00",
					"base-300": "#b8ab00",
					"base-content": "#000000",
					"info": "#2094f3",
					"success": "#009485",
					"warning": "#ff9900",
					"error": "#ff5724",
					"--rounded-box": "0",
					"--rounded-btn": "0",
					"--rounded-badge": "0",
					"--tab-radius": "0"
				}
			}
    ],
  },
}
