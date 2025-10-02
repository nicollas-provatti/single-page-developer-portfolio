import Link from "./UI/Link";

import scss from "../styles/Introduction.module.scss";

export default function Introduction() {
  return (
    <section className={scss.introduction}>
      <h1>
        Pazer em{" "}
        <br className={scss.linebreak}/>
        conhecê-lo! Eu sou <em>Nícollas&nbsp;Gomes</em>
      </h1>
      <p>
        Desenvolvedor front-end apaixonado por criar experiências web acessíveis e envolventes.
      </p>
      <Link href="#contact">Entre em contato</Link>
    </section>
  );
}
