const languages = {
	spanish: {
		name: "spanish",
		title: "Crea tu contraseña segura",
		subTitle:
			"Use nuestra aplicación para generar una contraseña segura, aleatoria e instantánea",
		levelPassword: {
			labels: {
				good: "Contraseña muy segura",
				medium: "Contraseña media segura",
				bad: "Contraseña insegura",
			},
			title: "Nivel de seguridad de la contraseña",
		},
		charactersPassword: {
			labels: [
				"Incluye números",
				"Incluye símbolos",
				"Incluye mayúsculas",
				"Incluye minúsculas",
			],
			notification: "Se debe tener al menos un carácter para la contraseña. 😢",
		},
		longPassword: {
			label: "Longitud de contraseña",
		},
		refreshPassword: {
			label: "Nueva contraseña",
			title: "Crear nueva contraseña",
		},
		copyPassword: {
			label: "Copiar contraseña",
			title: "Copiar contraseña",
			notification: "Contraseña copiada! 😊",
		},
		menu: {
			title: "Configuración",
			theme: "Tema",
			language: "Idioma",
		},
	},
	english: {
		name: "english",
		title: "Create your secure password",
		subTitle: "Use our app to generate a secure, random and instant password",
		levelPassword: {
			labels: {
				good: "Very strong password",
				medium: "Medium strong password",
				bad: "Weak password",
			},
			title: "Password security level",
		},
		charactersPassword: {
			labels: [
				"Includes numbers",
				"Includes symbols",
				"Includes uppercase",
				"Includes lowercase",
			],
			notification: "Must have at least one character for password. 😢",
		},
		longPassword: {
			label: "Password length",
		},
		refreshPassword: {
			label: "New Password",
			title: "Create new password",
		},
		copyPassword: {
			label: "Copy password",
			title: "Copy password",
			notification: "Password copied! 😊",
		},
		menu: {
			title: "Settings",
			theme: "Theme",
			language: "Language",
		},
	},
}

export default languages
