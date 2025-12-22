import React from 'react';

const About = () => {
    return (
        <section className="py-20 md:py-32 bg-white text-center px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif italic mb-10 text-brand-dark">
                    Sobre Mí
                </h2>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light mb-8">
                    ¡Hola! Soy <span className="font-semibold text-black">Aixa Bacur</span>, tengo 24 años.
                    Soy estudiante de Comunicación Social en la UNCuyo y modelo profesional en la agencia
                    <span className="italic font-serif"> Runway Models</span>.
                </p>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light mb-12">
                    Actualmente, combino mis estudios con mi pasión por la moda. Creo firmemente en la
                    importancia de la <span className="font-semibold text-black">diversidad corporal</span> y
                    me esfuerzo por ser parte de un cambio positivo que promueva la inclusión y representación
                    real en esta industria.
                </p>
                <div className="w-24 h-0.5 bg-brand-gold mx-auto mt-12"></div>
            </div>
        </section>
    );
};

export default About;