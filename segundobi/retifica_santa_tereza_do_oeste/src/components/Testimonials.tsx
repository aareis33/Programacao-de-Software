import { useEffect, useMemo, useRef, useState } from "react";
import "../styles/testimonials.css";

import Stars   from "../assets/stars.png";
import Avatar1 from "../assets/circle.png";
import Avatar2 from "../assets/circle (1).png";
import Avatar3 from "../assets/circle (2).png";

type Testimony = {
  name: string;
  role: string;
  text: string;
  avatar: string;
};

const DATA: Testimony[] = [
  {
    name: "Peixoto",
    role: "Coronel",
    text:
      " Após receber o pedido pelo site, avaliamos com atenção todas as necessidades do cliente e enviamos em poucas horas uma proposta detalhada e transparente. O cliente aprovou o orçamento rapidamente, pois encontrou clareza nas condições e valores. O serviço foi iniciado no prazo combinado e finalizado com total satisfação, reforçando nossa reputação pela eficiência e compromisso.",
    avatar: Avatar1,
  },
  {
    name: "Holanda",
    role: "Major",
    text:
      "Nosso orçamento é feito pensando na sua total confiança, com valores claros, sem surpresas. Trabalhamos para oferecer o melhor custo-benefício para cada serviço solicitado.",
    avatar: Avatar2,
  },
  {
    name: "Wesley",
    role: "Tiante",
    text:
      "Com um orçamento detalhado e justo, você tem a garantia de um serviço realizado com qualidade, dentro do prazo e do valor combinado. Sua satisfação é nossa prioridade máxima.",
    avatar: Avatar3,
  },
];

// util: quebra em páginas de “perPage” itens
function chunk<T>(arr: T[], size: number) {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function Testimonials() {
  
  const getBasePerPage = () => (window.innerWidth >= 1280 ? 2 : 1);
  const baseRef = useRef(getBasePerPage());
  const [perPage, setPerPage] = useState<number>(baseRef.current);

  // hover: pausa e mostra +1 card (até o máximo possível)
  const [hovering, setHovering] = useState(false);

  // autoplay rapidinho
  const AUTOPLAY_MS = 1500;
  const pausedRef = useRef(false);

  // recalcula base em resize
  useEffect(() => {
    const onResize = () => {
      baseRef.current = getBasePerPage();
      setPerPage(hovering ? Math.min(baseRef.current + 1, DATA.length) : baseRef.current);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [hovering]);

  // aplica +1 no hover e pausa
  useEffect(() => {
    pausedRef.current = hovering;
    setPerPage(hovering ? Math.min(baseRef.current + 1, DATA.length) : baseRef.current);
  }, [hovering]);

  const pages = useMemo(() => chunk(DATA, perPage), [perPage]);
  const [index, setIndex] = useState(0);

  // garante índice válido quando perPage muda
  useEffect(() => {
    if (index >= pages.length) setIndex(0);
  }, [pages.length, index]);

  // autoplay
  useEffect(() => {
    if (pausedRef.current) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % pages.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [pages.length, index]);

  const prev = () => setIndex((i) => (i - 1 + pages.length) % pages.length);
  const next = () => setIndex((i) => (i + 1) % pages.length);

  return (
    <section
      id="testimonials"
      className="t-wrap"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onTouchStart={() => setHovering(true)}
      onTouchEnd={() => setHovering(false)}
    >
      <header className="t-head">
        <span className="t-eyebrow">Melhores Avaliações entre as retificas da regiao</span>
        <h2>Cada serviço importa!</h2>
        <p>
          Recebemos as melhores avaliações dos nossos clientes, destacando-se como referência em qualidade e confiança entre as retíficas da região. Nosso compromisso é garantir excelência em todos os serviços, o que nos torna favoritos na opinião de quem realmente entende.
        </p>
      </header>

      <div className="t-viewport">
        <div className="t-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {pages.map((page, pIdx) => (
            <div
              className="t-slide"
              key={pIdx}
              style={{ ["--cols" as any]: page.length }} 
            >
              {page.map((item, cIdx) => (
                <article className="t-card" key={cIdx}>
                  <img className="t-avatar" src={item.avatar} width={96} height={96} alt={item.name} />
                  <p className="t-text">{item.text}</p>
                  <img className="t-stars" src={Stars} width={110} height={20} alt="avaliação" />
                  <h3 className="t-name">{item.name}</h3>
                  <span className="t-role">{item.role}</span>
                </article>
              ))}
            </div>
          ))}
        </div>

        <button className="t-nav t-prev" onClick={prev} aria-label="Anterior">‹</button>
        <button className="t-nav t-next" onClick={next} aria-label="Próximo">›</button>
      </div>

      <div className="t-dots">
        {pages.map((_, i) => (
          <button
            key={i}
            className={`t-dot ${i === index ? "is-active" : ""}`}
            aria-label={`Ir para slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
