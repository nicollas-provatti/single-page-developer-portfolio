import scss from "../styles/Experience.module.scss";

export default function Experience() {
  const experience = [
    {
      field: "HTML",
      description: "Crio páginas web semânticas e acessíveis.",
    },
    {
      field: "CSS",
      description: "Desenvolvo designs atraentes e responsivos.",
    },
    {
      field: "Javascript",
      description: "Adiciono interatividade e dinamismo às páginas web.",
    },
    {
      field: "Git e GitHub",
      description: "Integro código e mantenho projetos sincronizados.",
    },
    {
      field: "Tailwind",
      description: "Estilizo layouts e interfaces modernas com classes utilitárias.",
    },
    {
      field: "React",
      description: "Crio aplicações web dinâmicas com componentes reutilizáveis e gerenciamento eficiente de estado.",
    },
  ];

  return (
    <section aria-label="experience" className={scss.experience}>
      {experience.map((exp, index) => (
        <div key={index}>
          <h1 >{exp.field}</h1>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
}
