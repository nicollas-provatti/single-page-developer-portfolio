import useValidateInput from "../hooks/useValidateInput";
import Link from "./UI/Link";
import Input from "./UI/Input";

import scss from "../styles/Contact.module.scss";
import { useState } from "react";

export default function Contact() {
  const [nameState, nameProps, nameFns] = useValidateInput();
  const [emailState, emailProps, emailFns] = useValidateInput({
    type: "email",
  });
  const [messageState, messageProps, messageFns] = useValidateInput();
  const formIsValid =
    nameState.isValid && emailState.isValid && messageState.isValid;
  const [formWasSubmitted, setFormWasSubmitted] = useState({
    submitted: false,
    error: false,
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const fns = [nameFns, emailFns, messageFns];
    if (!formIsValid) {
      fns.forEach((fns) => fns.checkValidity());
      return;
    }

    let res;
    try {
      res = await fetch(
        "https://portfolio-contact-form-168de-default-rtdb.firebaseio.com/messages.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nameState.value,
            email: emailState.value,
            message: messageState.value,
          }),
        }
      );
    } catch (err) {
      console.error(err);
    }
    setFormWasSubmitted({ submitted: true, error: !res.ok });
    fns.forEach((fns) => fns.clear());
  }

  return (
    <section className={scss.contact} id="contact">
      <div>
        <h2>Contato</h2>
        <p>
          Vamos conversar! Preencha o formulário abaixo e entrarei em contato o
          mais rápido possível.
        </p>
      </div>
      <div className={scss.form_container}>
        <form
          onSubmit={handleSubmit}
          className={formWasSubmitted.submitted ? scss.invisible : ""}
        >
          <Input state={nameState} customProps={nameProps}>
            <input type="text" placeholder="Name"></input>
          </Input>
          <Input state={emailState} customProps={emailProps}>
            <input type="email" placeholder="Email"></input>
          </Input>
          <Input state={messageState} customProps={messageProps}>
            <textarea placeholder="Message" spellCheck={false}></textarea>
          </Input>
          <button type="submit">
            <Link>Enviar mensagem</Link>
          </button>
        </form>
        {formWasSubmitted.submitted && !formWasSubmitted.error && (
          <div className={scss.response}>
            <h1>Mensagem enviada!</h1>
            <p>
              Obrigado por entrar em contato e demonstrar interesse em meus
              serviços. Entrarei em contato o mais breve possível!
            </p>
          </div>
        )}
        {formWasSubmitted.submitted && formWasSubmitted.error && (
          <div className={`${scss.response} ${scss.error}`}>
            <h1>Falha ao enviar a mensagem!</h1>
            <p>
              Por favor, não hesite em entrar me contato comigo pelo e-mail{" "}
              <a href="mailto:adam.keyes@frontendmentor.com">
                adam.keyes@frontendentor.com
              </a>
              , or try again 
            </p>
            <p>
              Please, don't hesitate to contact me at{" "}
              <a href="mailto:adam.keyes@frontendmentor.com">
                adam.keyes@frontendentor.com
              </a>
              , ou tente novamente outra hora.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
