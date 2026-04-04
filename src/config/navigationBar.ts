// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'Miguel Ángel Mejía',
		text: 'MAMS.'
	},
	navItems: [
		{ name: 'Solución', link: '#solucion' },
		{ name: 'Cómo Trabajo', link: '#como-trabajo' },
		{ name: 'Contenido', link: '#contenido' },
		{ name: 'Sobre Mí', link: '#sobre-mi' }
	],
	navActions: [{ name: 'Hablemos', link: '#contacto', style: 'primary', size: 'lg' }]
}
