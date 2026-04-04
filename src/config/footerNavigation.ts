// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'MAMS.',
		aboutText:
			'Traductor estratégico entre negocio y tecnología. Convirtiendo complejidad técnica en claridad accionable.',
		logo: {
			src: '/logo.svg',
			alt: 'Miguel Ángel Mejía',
			text: 'MAMS.'
		}
	},
	footerColumns: [
		{
			category: 'Plataforma',
			subCategories: [
				{ subCategory: 'Solución', subCategoryLink: '#solucion' },
				{ subCategory: 'Cómo Trabajo', subCategoryLink: '#como-trabajo' },
				{ subCategory: 'Contenido', subCategoryLink: '#contenido' }
			]
		},
		{
			category: 'Conectar',
			subCategories: [
				{ subCategory: 'Sobre Mí / CV', subCategoryLink: '#sobre-mi' },
				{ subCategory: 'Contacto', subCategoryLink: '#contacto' },
				{ subCategory: 'LinkedIn', subCategoryLink: 'https://www.linkedin.com/in/migueamejias-mams/' }
			]
		}
	],
	subFooter: {
		copywriteText: '© Miguel Ángel Mejía 2026. Arquitectura de Hierro y Fuego Digital.'
	}
}
