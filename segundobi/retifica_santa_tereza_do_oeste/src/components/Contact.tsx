import Button from "./Button.tsx";
import "../styles/contact.css";

export default function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // manter a lógica simples (não envia nada aqui)
  };

  return (
    <section id="contact" className="contact-section" style={{ scrollMarginTop: "var(--header-h)" }}>
      <div className="container contact-wrap">
        <header className="contact-head">
          <h2>Entre em contato e tire sua dúvida!</h2>
        </header>
        <form className="contact-form" onSubmit={onSubmit}>
          <label className="sr-only" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Seu melhor Email"
            required
          />

          <label className="sr-only" htmlFor="message">
            Motivo do contato
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Motivo do contato"
            required
          />

          <div className="contact-actions">
            <Button text="Enviar" />
          </div>
        </form>
      </div>
    </section>
  );
}
