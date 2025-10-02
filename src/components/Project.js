import Link from "./UI/Link";
import scss from "../styles/Project.module.scss";

function Project({ nr, title, langs, demo, code }) {
  return (
    <div className={scss.project_wrapper}>
      <div>
        <div className={scss.image_wrapper}>
          <div className={scss.overlay}>
            <Link href={demo}>View project</Link>
            <Link href={code}>View code</Link>
          </div>
          <img src={require(`../assets/images/thumbnail-project-${nr}.jpg`)} alt={title}></img>
        </div>
        <h3 className={scss.title}>{title}</h3>
        <div className={scss.langs}>
          {langs.split(" ").map((lang, i) => (
            <span className={scss.lang} key={i}>
              {lang}
            </span>
          ))}
        </div>
      </div>
      <div className={scss.view}>
        <Link href={demo}>View project</Link>
        <Link href={code}>View code</Link>
      </div>
    </div>
  );
}

export default Project;
