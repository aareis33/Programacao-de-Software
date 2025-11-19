import Champion from "../assets/champion.svg";
import "../styles/Solution.css";

export default function Solution() {
  return (
    <section className="container" id="solution">
      {/* Cabeçalho */}
      <header>
        <span>
          <h2>Melhor Retifica da regiao</h2>
          <span className="desktop-only">
          </span>
        </span>

        <p>
          Ente em contato via: <strong>WhatsApp</strong>, e escolha qual plano e melhor para você.
        </p>
      </header>

      {/* Cards */}
      <section className="even-columns">
        <div className="card">
          <span>
            <img src={Champion} alt="ícone campeão" width={64} height={64} />
          </span>
          <div>
            <h3>Qualidade em Todos Serviços</h3>
            <p>
              Garantimos qualidade em cada serviço oferecido, buscando sempre superar as expectativas dos clientes com atenção, transparência e eficiênciae!
            </p>
            <hr />
          </div>
        </div>

        <div className="card">
          <span>
            <img src={Champion} alt="ícone campeão" width={64} height={64} />
          </span>
          <div>
            <h3>Campeão em entregas rapidas </h3>
            <p>
              Somos referência em agilidade e eficiência, garantindo que seus pedidos sejam entregues com rapidez e segurança. Conte conosco para uma experiência de entrega confiável, onde velocidade é prioridade..
            </p>
            <hr />
          </div>
        </div>

        <div className="card">
          <span>
            <img src={Champion} alt="ícone campeão" width={64} height={64} />
          </span>
          <div>
            <h3>Melhores Promoçoes</h3>
            <p>
              proveite as melhores promoções e ofertas exclusivas! Garantimos preços especiais para você economizar mais em cada compra, sem abrir mão da qualidade dos nossos serviços!
            </p>
            <hr />
          </div>
        </div>
      </section>
    </section>
  );
}
