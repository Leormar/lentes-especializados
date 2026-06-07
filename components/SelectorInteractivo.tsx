"use client";

import { useState } from "react";

type Paso = {
  pregunta: string;
  opciones: { texto: string; valor: string }[];
};

type Resultado = {
  titulo: string;
  descripcion: string;
  servicio: string;
};

const pasos: Paso[] = [
  {
    pregunta: "¿Tiene algún diagnóstico o condición visual conocida?",
    opciones: [
      { texto: "Queratocono o córnea irregular", valor: "queratocono" },
      { texto: "Cirugía refractiva previa (LASIK, PRK, etc.)", valor: "post_laser" },
      { texto: "Ojo seco severo", valor: "ojo_seco" },
      { texto: "Solo necesito mejor corrección visual", valor: "general" },
    ],
  },
  {
    pregunta: "¿Ha intentado usar lentes de contacto antes?",
    opciones: [
      { texto: "Sí, pero no los tolero bien", valor: "intolerante" },
      { texto: "Sí, y funcionan bien", valor: "tolerante" },
      { texto: "Nunca los he usado", valor: "nuevo" },
      { texto: "Los he probado y ninguno me funciona", valor: "fracasos" },
    ],
  },
  {
    pregunta: "¿Cuál es su mayor inconveniente visual hoy?",
    opciones: [
      { texto: "No veo bien ni con gafas", valor: "baja_vision" },
      { texto: "Incomodidad o irritación con lentes convencionales", valor: "incomodidad" },
      { texto: "Visión borrosa o fluctuante", valor: "fluctuante" },
      { texto: "Sequedad e irritación constante", valor: "sequedad" },
    ],
  },
];

const calcularResultado = (respuestas: string[]): Resultado => {
  const [cond, exp, prob] = respuestas;

  if (cond === "queratocono" || prob === "fluctuante") {
    return {
      titulo: "Lentes Esclerales o RGP",
      descripcion:
        "Su perfil sugiere que necesita un lente de geometría compleja. Los lentes esclerales o RGP crean una nueva superficie óptica sobre su córnea irregular, logrando la mejor agudeza visual posible.",
      servicio: "esclerales",
    };
  }
  if (cond === "post_laser") {
    return {
      titulo: "Lentes Post-Quirúrgicos Especializados",
      descripcion:
        "Tras cirugía refractiva, la córnea cambia su geometría. Adaptamos lentes diseñados específicamente para córneas post-LASIK o post-PRK que maximizan su calidad de visión.",
      servicio: "post-quirurgico",
    };
  }
  if (cond === "ojo_seco" || prob === "sequedad") {
    return {
      titulo: "Lentes para Ojo Seco Severo",
      descripcion:
        "Los lentes esclerales crean una cámara de lágrima artificial entre el lente y la córnea, manteniendo hidratación constante. Son la solución más efectiva para ojo seco severo.",
      servicio: "ojo-seco",
    };
  }
  if (exp === "fracasos" || exp === "intolerante") {
    return {
      titulo: "Evaluación de Contactología Avanzada",
      descripcion:
        "Cuando los lentes convencionales fallan, la solución generalmente está en una adaptación personalizada. Evaluamos su córnea con tecnología de mapeo topográfico para encontrar el lente ideal.",
      servicio: "esclerales",
    };
  }
  return {
    titulo: "Consulta de Contactología Especializada",
    descripcion:
      "Aunque no tenga una condición compleja, una adaptación experta mejora significativamente la comodidad y la calidad de visión. Contamos con la más amplia variedad de lentes del mercado.",
    servicio: "esclerales",
  };
};

export default function SelectorInteractivo() {
  const [paso, setPaso] = useState(0);
  const [respuestas, setRespuestas] = useState<string[]>([]);
  const [resultado, setResultado] = useState<Resultado | null>(null);

  const elegir = (valor: string) => {
    const nuevas = [...respuestas, valor];
    if (nuevas.length < pasos.length) {
      setRespuestas(nuevas);
      setPaso(paso + 1);
    } else {
      setResultado(calcularResultado(nuevas));
    }
  };

  const reiniciar = () => {
    setPaso(0);
    setRespuestas([]);
    setResultado(null);
  };

  if (resultado) {
    return (
      <div className="bg-[#0c4a6e] text-white rounded-2xl p-8 text-center">
        <div className="w-12 h-12 bg-[#0ea5e9] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-sky-300 text-sm font-medium mb-2">Su perfil sugiere:</p>
        <h3 className="text-2xl font-bold mb-3">{resultado.titulo}</h3>
        <p className="text-sky-100 leading-relaxed mb-6 max-w-md mx-auto">{resultado.descripcion}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/573113154316?text=Hola,%20el%20selector%20me%20recomendó%20lentes%20${resultado.servicio}.%20Me%20gustaría%20agendar%20una%20consulta.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#20b858] transition-colors"
          >
            Agendar consulta
          </a>
          <button
            onClick={reiniciar}
            className="border border-sky-400 text-sky-200 px-6 py-3 rounded-full font-medium hover:bg-sky-800 transition-colors"
          >
            Empezar de nuevo
          </button>
        </div>
      </div>
    );
  }

  const pasoActual = pasos[paso];

  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-sm p-8">
      <div className="flex items-center gap-2 mb-6">
        {pasos.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i <= paso ? "bg-[#0ea5e9]" : "bg-slate-100"
            }`}
          />
        ))}
      </div>
      <p className="text-xs font-medium text-[#0ea5e9] uppercase tracking-wide mb-3">
        Pregunta {paso + 1} de {pasos.length}
      </p>
      <h3 className="text-xl font-semibold text-[#0c4a6e] mb-6">{pasoActual.pregunta}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {pasoActual.opciones.map((op) => (
          <button
            key={op.valor}
            onClick={() => elegir(op.valor)}
            className="text-left px-4 py-4 rounded-xl border-2 border-sky-100 text-slate-700 font-medium text-sm hover:border-[#0ea5e9] hover:bg-sky-50 hover:text-[#0c4a6e] transition-all active:scale-98"
          >
            {op.texto}
          </button>
        ))}
      </div>
    </div>
  );
}
