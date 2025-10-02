import scss from "../styles/Header.module.scss";

import LogoSocialMedia from "./LogoSocialMedia";

import heroImgSamll from "../assets/images/image-profile-small.png";
import heroImgLarge from "../assets/images/image-profile-large.png";

export default function Header() {
  return (
    <header className={scss.header}>
      <LogoSocialMedia />
      <picture className={scss.hero_picture}>
        <source srcSet={heroImgLarge} media="(min-width: 650px)" />
        <img
          src={heroImgSamll}
          alt="Adam Keyes headshot"
          className={scss.hero_img}
        />
      </picture>
    </header>
  );
}
