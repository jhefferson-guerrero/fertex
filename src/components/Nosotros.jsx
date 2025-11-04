import '../styles/Content.css';

function Nosotros() {
  return (
    <div className="w-full">
      <section id="nosotros" className="max-w-[1425px] mx-auto px-4 pb-15 lg:pb-25 text-(--oscuro)">

        <h2 className="nosotros-title">Sobre Nosotros</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
          <div className="order-1 lg:order-2">
            <img 
              src="/images/fertex-taekwondo-maestros-instructores-03.webp" 
              alt="Maestros e instructores de taekwondo" 
              className='rounded-xl shadow-xl w-full h-[300px] sm:h-[400px] lg:h-[470px] object-cover'
            />
          </div>
          
          <div className='text-start order-2 lg:order-1'>
            <h3 className='text-3xl lg:text-4xl font-bold mb-4 md:mb-5'>Nuestra Historia</h3>
            <p className='text-base md:text-lg font-light leading-7 mb-4'>
              Hace más de 20 años nació <span className="font-semibold text-(--naranja)">FERTEX</span>, una academia dedicada a la enseñanza y formación en artes marciales. Desde nuestros inicios, tuvimos el sueño de crear un espacio donde niños, jóvenes y adultos puedan desarrollar disciplina, carácter y valores a través del Taekwondo ITF, Muay Thai y Capoeira.
            </p>
            <p className='text-base md:text-lg font-light leading-7 mb-4'>
              Con el tiempo, nuestra escuela se convirtió en una gran familia, marcada por el esfuerzo, la constancia y la pasión por superarse día a día. Cada alumno que ha pasado por FERTEX ha llevado consigo no solo técnicas y habilidades, sino también valores como el respeto, la perseverancia y la humildad.
            </p>
            <p className='text-base md:text-lg font-light leading-7'>
              Hoy continuamos avanzando, formando personas íntegras y deportistas comprometidos, orgullosos de ver cómo nuestra comunidad crece y cómo nuestros alumnos conquistan metas dentro y fuera del tatami.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nosotros;