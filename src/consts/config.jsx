const configDefault = {
	app: {
		passwordLength: 24,
		numbers: true,
		symbols: true,
		uppercase: true,
		lowercase: true,
		actives: function () {
			return +this.numbers + +this.symbols + +this.lowercase + +this.uppercase
		},
	},

	infoSecurity: {
		good: {
			type: "good",
			icon: "Check",
			color: "#07bd3a",
			backColor: "#44bd67",
			percent: 100,
		},
		medium: {
			type: "medium",
			icon: "Warning",
			color: "#ffa500",
			backColor: "#ffa50059",
			percent: 50,
		},
		bad: {
			type: "bad",
			icon: "Cancel",
			color: "#ed1374",
			backColor: "#ed13743b",
			percent: 20,
		},
	},
}

export default configDefault
