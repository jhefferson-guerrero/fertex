function Disciplina() {
    const disciplinas = [
    {
      nombre: "Taekwondo",
      imagen: "images/fertex-taekwondo-competencia-01.webp",
      descripcion: "Arte marcial coreano que desarrolla disciplina, técnica y autocontrol a través de patadas dinámicas y defensa personal."
    },
    {
      nombre: "Muay Thai",
      imagen: "images/fertex-taekwondo-competencia-01.webp",
      descripcion: "Boxeo tailandés tradicional que combina puños, codos, rodillas y patadas para un entrenamiento completo."
    },
    {
      nombre: "Capoeira",
      imagen: "images/fertex-taekwondo-competencia-01.webp",
      descripcion: "Arte marcial afro-brasileño que fusiona movimientos acrobáticos, música y expresión cultural en cada ginga."
    }
  ];
  
  return (
    <div className="w-full bg-[#f8f8f8]">
      <section id="disciplina" className="max-w-[1250px] mx-auto px-4 pb-15 text-(--oscuro)">
        <h2 className="disciplinas-title">Nuestras Disciplinas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {disciplinas.map((disciplina, index) => (
            <div 
              key={index}
              className="relative rounded-xl shadow-2xl overflow-hidden group cursor-pointer h-[420px] md:h-[470px] mx-auto w-85 max-w-[350px] md:max-w-none"
            >
              <img 
                src={disciplina.imagen} 
                alt={`Práctica de ${disciplina.nombre}`} 
                className='w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75'
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent lg:from-black/60 via-black/20"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-3 transition-all duration-300 group-hover:mb-4">
                  {disciplina.nombre}
                </h3>
                
                <div className="rounded-xl w-16 h-1 bg-(--naranja) mb-4 transition-all duration-300 group-hover:w-24"></div>
                
                <p className="text-white/90 text-base md:text-base leading-6 md:max-h-0 md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100 transition-all duration-500 overflow-hidden max-h-40 opacity-100">
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
