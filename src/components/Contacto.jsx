import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contacto() {
  // Estados y refs para la primera sección
  const [isText1Visible, setText1Visible] = useState(false);
  const [isMap1Visible, setMap1Visible] = useState(false);
  const text1Ref = useRef(null);
  const map1Ref = useRef(null);

  // Estados y refs para la segunda sección
  const [isText2Visible, setText2Visible] = useState(false);
  const [isMap2Visible, setMap2Visible] = useState(false);
  const text2Ref = useRef(null);
  const map2Ref = useRef(null);

  useEffect(() => {
    // Observers para la primera sección
    const text1Observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setText1Visible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    const map1Observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMap1Visible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    // Observers para la segunda sección
    const text2Observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setText2Visible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    const map2Observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMap2Visible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (text1Ref.current) text1Observer.observe(text1Ref.current);
    if (map1Ref.current) map1Observer.observe(map1Ref.current);
    if (text2Ref.current) text2Observer.observe(text2Ref.current);
    if (map2Ref.current) map2Observer.observe(map2Ref.current);

    return () => {
      if (text1Ref.current) text1Observer.unobserve(text1Ref.current);
      if (map1Ref.current) map1Observer.unobserve(map1Ref.current);
      if (text2Ref.current) text2Observer.unobserve(text2Ref.current);
      if (map2Ref.current) map2Observer.unobserve(map2Ref.current);
    };
  }, []);

  return (
    <div className="w-full bg-[#f8f8f8]">
      <section id="contacto" className="max-w-[1425px] mx-auto px-4 py-4 pb-24 text-(--oscuro)">
        <h2 className="contacto-title">Nuestros locales</h2>
        
        {/* Primera sección */}
        <div className="flex flex-wrap justify-center items-start gap-8 lg:gap-20">
          <div 
            ref={text1Ref}
            className={`flex-1 max-w-[600px] min-w-[280px] text-left transition-all duration-1000 ease-out ${
              isText1Visible 
                ? 'opacity-100 translate-y-0 lg:translate-x-0' 
                : 'opacity-0 translate-y-[50px] lg:translate-y-0 lg:-translate-x-[50px]'
            }`}
          >
            <h3 className="text-2xl md:text-3xl sm:text-[30px] font-bold mb-4 mt-0">
              Taekwondo - Fertex Mariscal Cáceres
            </h3>

            <span className="inline-block bg-(--naranja) text-white text-lg px-3 py-0.5 font-bold rounded-lg mb-4">
              DATOS DE CONTACTO
            </span>

            <p className="mb-2.5 text-base md:text-lg">
              <strong className=" text-xl md:text-2xl sm:text-[1.4rem] text-(--oscuro)">Dirección:</strong><br/>
              Av. El Muro Mz 9 lote 18, Mariscal Cáceres, San Juan de Lurigancho
            </p>
            
            <p className="mb-2.5 text-base md:text-lg">
              <strong className=" text-xl md:text-2xl sm:text-[1.4rem] text-(--oscuro)">Teléfono:</strong><br/>
              +51 944 351 592
            </p>

            <p className="mb-2.5 text-base md:text-lg">
              <strong className=" text-xl md:text-2xl sm:text-[1.4rem] text-(--oscuro)">Correo:</strong><br/>
              fertexvillaflores@gmail.com
            </p>

            <p className="mb-2.5 text-base md:text-lg">
              <strong className=" text-xl md:text-2xl sm:text-[1.4rem] text-(--oscuro)">Síguenos:</strong>
            </p>

            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/FertexGukGi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-[2rem]" />
              </a>
              <a 
                href="https://www.instagram.com/fertexartesmarciales/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-[2rem]" />
              </a>
            </div>
          </div>

          <div 
            ref={map1Ref}
            className={`flex-1 min-w-[300px] max-w-[650px] h-[300px] sm:h-[450px] transition-all duration-1000 ease-out ${
              isMap1Visible 
                ? 'opacity-100 translate-y-0 lg:translate-x-0' 
                : 'opacity-0 translate-y-[50px] lg:translate-y-0 lg:translate-x-[50px]'
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.175344355436!2d-76.98083639485937!3d-11.950234004978437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c50f866b502b%3A0x5631bff9e0050e03!2sTaekwondo%20-%20Fertex%20Mariscal%20C%C3%A1ceres!5e0!3m2!1ses!2spe!4v1760282931902!5m2!1ses!2spe"
              width="100%"
              height="100%"
              className="border-0 rounded-xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Fertex Mariscal Cáceres"
            ></iframe>
          </div>
        </div>

        {/* Divisor */}
        <div className="w-full my-10 sm:my-[70px] border-t border-gray-300 opacity-80"></div>

        {/* Segunda sección */}
        <div className="flex flex-wrap justify-center items-start gap-8 lg:gap-20">
          <div 
            ref={text2Ref}
            className={`flex-1 max-w-[600px] min-w-[280px] text-left transition-all duration-1000 ease-out ${
              isText2Visible 
                ? 'opacity-100 translate-y-0 lg:translate-x-0' 
                : 'opacity-0 translate-y-[50px] lg:translate-y-0 lg:-translate-x-[50px]'
            }`}
          >
            <h3 className="text-2xl md:text-3xl sm:text-[30px] font-bold mb-4 mt-0">
              Artes Marciales - Fertex Villa Flores
            </h3>

            <span className="inline-block bg-(--naranja) text-white text-lg px-3 py-0.5 font-bold rounded-lg mb-4">
              DATOS DE CONTACTO
            </span>

            <p className="mb-2.5 text-base md:text-lg">
              <strong className=" text-xl md:text-2xl sm:text-[1.4rem] text-(--oscuro)">Dirección:</strong><br/>
              Av. Los Jardines Este 609, San Juan de Lurigancho 15431
            </p>

            <p className="mb-2.5 text-base md:text-lg">
              <strong className=" text-xl md:text-2xl sm:text-[1.4rem] text-(--oscuro)">Teléfono:</strong><br/>
              +51 933 601 356
            </p>

            <p className="mb-2.5 text-base md:text-lg">
              <strong className=" text-xl md:text-2xl sm:text-[1.4rem] text-(--oscuro)">Correo:</strong><br/>
              fertexvillaflores@gmail.com
            </p>

            <p className="mb-2.5 text-base md:text-lg">
              <strong className=" text-xl md:text-2xl sm:text-[1.4rem] text-(--oscuro)">Síguenos:</strong>
            </p>

            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/FertexGukGi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-[2rem]" />
              </a>
              <a 
                href="https://www.instagram.com/fertexartesmarciales/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-[2rem]" />
              </a>
            </div>
          </div>

          <div 
            ref={map2Ref}
            className={`flex-1 min-w-[300px] max-w-[650px] h-[300px] sm:h-[450px] transition-all duration-1000 ease-out ${
              isMap2Visible 
                ? 'opacity-100 translate-y-0 lg:translate-x-0' 
                : 'opacity-0 translate-y-[50px] lg:translate-y-0 lg:translate-x-[50px]'
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d797.0623137983624!2d-77.00066952301201!3d-12.00297822202396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c55d77d1b035%3A0x220b1a1847e934e6!2sArtes%20Marciales%20-%20FERTEX%20Villa%20Flores!5e0!3m2!1ses!2spe!4v1760283061155!5m2!1ses!2spe"
              width="100%"
              height="100%"
              className="border-0 rounded-xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Fertex Villa Flores"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacto;