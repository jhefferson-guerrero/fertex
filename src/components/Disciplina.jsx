import { useEffect, useRef, useState } from 'react';

function Disciplina() {
  const [visibleCards, setVisibleCards] = useState([false, false, false]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((cardRef, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        },
        {
          threshold: 0.2,
          rootMargin: '0px'
        }
      );

      if (cardRef) {
        observer.observe(cardRef);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (cardRefs.current[index]) {
          observer.unobserve(cardRefs.current[index]);
        }
      });
    };
  }, []);

    const disciplinas = [
    {
      nombre: "Taekwondo",
      imagen: "images/fertex-taekwondo-competencia-01.webp",
      descripcion: "Arte marcial coreano que desarrolla disciplina, técnica y autocontrol a través de patadas dinámicas y defensa personal."
    },
    {
      nombre: "Muay Thai",
      imagen: "images/fertex-muaythai-entrenamiento-05.webp",
      descripcion: "Boxeo tailandés tradicional que combina puños, codos, rodillas y patadas para un entrenamiento completo."
    },
    {
      nombre: "Capoeira",
      imagen: "images/fertex-capoeira-entrenamiento-01.webp",
      descripcion: "Arte marcial afro-brasileño que fusiona movimientos acrobáticos, música y expresión cultural en cada ginga."
    }
  ];
  
  const getAnimationClasses = (index, isVisible) => {
    const animations = [
      // Primera carta
      isVisible 
        ? 'opacity-100 translate-y-0 lg:translate-x-0' 
        : 'opacity-0 translate-y-[50px] lg:translate-y-0 lg:-translate-x-[50px]',
      // Segunda carta
      isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-[50px]',
      // Tercera carta
      isVisible 
        ? 'opacity-100 translate-y-0 lg:translate-x-0' 
        : 'opacity-0 translate-y-[50px] lg:translate-y-0 lg:translate-x-[50px]'
    ];
    
    return animations[index];
  };

  return (
    <div className="w-full bg-(--oscuro)">
      <section id="disciplina" className="max-w-[1250px] mx-auto px-4 pb-20 md:pb-25 pt-8 text-white">
        <h2 className="relative inline-block pt-[30px] mb-[35px] md:pt-[50px] md:mb-[45px] text-[2rem] md:text-[45px] font-semibold after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-10px] after:w-[90px] after:h-[5px] after:bg-(--naranja) after:rounded-sm">Disciplinas</h2>
        <p class="text-base text-(--blanco) text-justify md:text-lg font-normal leading-7 mb-10 md:px-3">
          En FERTEX ofrecemos tres disciplinas de artes marciales, 
          cada una diseñada para desarrollar fuerza, disciplina y 
          confianza en personas de todas las edades.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {disciplinas.map((disciplina, index) => (
            <div 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`relative rounded-2xl shadow-2xl overflow-hidden group cursor-pointer h-[420px] md:h-[470px] md:w-90 mx-auto w-90 max-w-[350px] md:max-w-none transition-all duration-1000 ease-out ${getAnimationClasses(index, visibleCards[index])}`}
            >
              <img 
                src={disciplina.imagen} 
                alt={`Práctica de ${disciplina.nombre}`} 
                className='w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75'
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent lg:from-black/70 lg:via-black/30"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-white text-3xl md:text-4xl font-semibold mb-3 transition-all duration-300 group-hover:mb-4">
                  {disciplina.nombre}
                </h3>
                
                <div className="rounded-xl w-16 h-1 bg-(--naranja) mb-4 transition-all duration-300 group-hover:w-24"></div>
                
                <p className="text-white/90 text-base font-normal md:font-light md:text-base leading-6 md:max-h-0 md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100 transition-all duration-500 overflow-hidden max-h-40 opacity-100">
                  {disciplina.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Disciplina;
