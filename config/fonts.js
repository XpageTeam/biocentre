module.exports = {
	formats: 'local woff',
	display: "swap",
	custom: {
		"Montserrat": {
			variants: {
				normal: {
					300: {
						url: {
							woff: "../fonts/Montserrat/montserrat-light.woff",
							woff: "../fonts/Montserrat/montserrat-light.woff2",
						}
					},
					500: {
						url: {
							woff: "../fonts/Montserrat/montserrat-regular.woff",
							woff: "../fonts/Montserrat/montserrat-regular.woff2",
						}
					},
					700: {
						url: {
							woff: "../fonts/Montserrat/montserrat-bold.woff",
							woff: "../fonts/Montserrat/montserrat-bold.woff2",
						}
					}
				}
			}
		},
	}
}