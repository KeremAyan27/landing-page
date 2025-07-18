# Landing Page UI – Frontend Intern Project

Responsive landing page built from a Figma community template. This project focuses on clean UI, semantic HTML, modular SCSS, and accessibility.

[Live Site](https://keremayan-frontend.netlify.app/)  
[Design Reference](https://www.figma.com/design/Scj4oWSnCIkjz0OTKx3gIv/Figma-Website-Template---Landing-Page--Free---Community-?node-id=0-88&p=f&t=hvHj6GHQh7MMUBZo-0)

---

## Features

- Mobile-first responsive layout
- Modular SCSS structure with BEM naming
- Semantic HTML and accessibility best practices
- Based on Figma “Landing Page 2” design

---

## Technologies

- HTML5  
- SCSS (Live Sass Compiler)  
- Git / GitHub  
- Netlify (for deployment)

---

## SCSS Structure

assets/
├── css/
│   └── main.css              # Compiled output
└── scss/
    ├── main.scss             # SCSS entry point
    ├── base/                 # Reset, typography
    ├── layout/               # Header, hero, footer
    ├── components/           # Buttons, feature sections
    └── utils/                # Mixins, media queries

**Setup

git clone https://github.com/KeremAyan27/landing-page.git
cd landing-page
To compile SCSS:
sass assets/scss/main.scss assets/css/main.css
Then open index.html in your browser.





** Improvements Planned

Animation support 
Theme toggle (dark/light)
CI/CD deployment

** License
This project is open source under the MIT License.
