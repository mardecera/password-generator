const darkTheme = {
	name: "dark",
	primaryColor: "#3e384a",
	secondaryColor: "#43d96d",
	tertiaryColor: "#eeeeee",
	quaternaryColor: "#414350",
	quinaryColor: "#5a5d6c",
	sextarioColor: "#293342",

	shadowBox: "rgb(26 29 32 / 50%) 0px 8px 24px",
	settingsOutline: "0px !important",
	buttonSwitchThemeColor: "#ffa500",
	backgroundColorApp: "#414350",
	buttonSelectTheme: {
		backgroundColor: "#ffa500 ",
		switchButtonColor: "#ffffff",
	},
	settingsBorderTop: "1px solid #38353530",
	securityBarColor: {
		bad: "#f5549c",
		medium: "#ffa500",
		good: "#16ff57",
	},
	settingsItemHoverColor: "rgba(236, 236, 236, 0.699)",
	settingsItemLabelHoverColor: "#33393f",
}
const lightTheme = {
	name: "light",
	primaryColor: "#476BB9",
	secondaryColor: "#33B35B",
	tertiaryColor: "#3c3e41",
	quaternaryColor: "#FFFFFF",
	quinaryColor: "#ffffff",
	sextarioColor: "#ffa500",

	shadowBox: "rgb(149 157 165 / 50%) 0px 8px 24px",
	settingsOutline: "1px solid rgba(209, 209, 209, 0.4)",
	backgroundColorApp: "#e4e9ef",
	buttonSwitchThemeColor: "#293342",
	buttonSelectTheme: {
		backgroundColor: "#444f64d5",
		switchButtonColor: "#ffffff",
	},
	settingsBorderTop: "1px solid #e9e8e8",
	securityBarColor: {
		bad: "#ed1374",
		medium: "#ffa500",
		good: "#07bd3a",
	},
	settingsItemHoverColor: "rgba(236, 236, 236, 0.699)",
	settingsItemLabelHoverColor: "#181818",
}

const themes = {
	dark: darkTheme,
	light: lightTheme,
}

export default themes
