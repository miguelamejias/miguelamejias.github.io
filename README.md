# miguelamejias.github.io

Personal portfolio of **Miguel Ángel Mejía Sánchez** — Strategy Architect at the intersection of iron and digital fire.

Live at: [https://miguelamejias.github.io](https://miguelamejias.github.io)

## Pages

| File | Description |
|------|-------------|
| `index.html` | Home — Strategy Architect landing page |
| `cv.html` | Curriculum Vitae — Technical experience & skills |
| `projects.html` | Technical Architecture & Systems portfolio |
| `blog.html` | Strategic Thinking & Technical Insights |
| `contact.html` | Contact — Establish Connection |
| `post.html` | Dynamic Markdown Blog Renderer |
| `posts/` | Directory containing all blog articles (`*.md`) & `index.json` |

## Capabilities

### Markdown Blog System
Built using a purely static architecture (**No Build Steps**), this site leverages **Client-Side Rendering (CSR)** to present blog articles directly from Markdown `.md` files. 

- **Marked.js:** Compiles Markdown directly within the browser natively.
- **KaTeX:** Seamlessly parses `$` and `$$` syntax into elegant Mathematical equations automatically.
- **Highlight.js:** Provides robust syntax highlighting for embedded `code` blocks (using the *Atom One Dark* theme to align with The Master Blueprint).
- **js-yaml:** Intercepts YAML Frontmatter attributes (e.g. `cover_image`, `title`) injected on top of Markdown documents.

Each Markdown post is cataloged via `posts/index.json` and dynamically loaded directly onto `post.html`.

## Design System

Generated with **Google Stitch** (project `7762919891715156633`).

- **Theme**: "The Master Blueprint" — dark industrial aesthetic
- **Primary**: `#B7410E` (copper)
- **Accent**: `#B0D500` (neon)
- **Background**: `#131313`
- **Fonts**: Archivo Black · Manrope · Fira Code
- **Styling**: Tailwind CSS (CDN)

## Contact

- Email: migueamejias.mams@gmail.com
- LinkedIn: [migueamejias-mams](https://www.linkedin.com/in/migueamejias-mams/)
- GitHub: [miguelamejias](https://github.com/miguelamejias)
