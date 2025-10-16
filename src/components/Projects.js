import Project from "./Project";
import Link from "./UI/Link";

import scss from "../styles/Projects.module.scss";

export default function Projects() {
  const projects = [
    {
      title: "Browser extensions manager UI",
      langs: "HTML React Tailwind",
      demo: "https://browser-extension-manager-ui-bfkc.onrender.com/",
      code: "https://github.com/nicollas-provatti/browser-extension-manager-ui",
    },
    {
      title: "Product list with cart",
      langs: "HTML Tailwind React DaisyUI",
      demo: "https://product-list-with-cart-nh69.onrender.com/",
      code: "https://github.com/nicollas-provatti/product-list-with-cart",
    },
    {
      title: "Intro section with dropdown navigation",
      langs: "React Tailwind Motion Figma",
      demo: "https://intro-section-with-dropdown-navigation-pn8s.onrender.com/",
      code: "https://github.com/nicollas-provatti/intro-section-with-dropdown-navigation",
    },
  ];
  return (
    <section className={scss.projects}>
      <header>
        <h2>Projetos</h2>
        <Link href="#contact">entre em contato</Link>
      </header>
      <div>
        {projects.map((project, index) => (
          <Project
            key={index}
            nr={index + 1}
            title={project.title}
            langs={project.langs}
            demo={project.demo}
            code={project.code}
          />
        ))}
      </div>
    </section>
  );
}
