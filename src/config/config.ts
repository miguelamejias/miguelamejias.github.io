// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Miguel Ángel Mejía - Backend Developer & DevSecOps',
	siteDescription:
		'Strategic translator between business and technology. Backend Developer, Python Automation, Rust Programming, and DevSecOps expert.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Miguel Ángel Mejía logo'
	},
	canonical: true,
	noindex: false,
	mode: 'dark', // Forced to dark as per guidelines
	scrollAnimations: true
}
