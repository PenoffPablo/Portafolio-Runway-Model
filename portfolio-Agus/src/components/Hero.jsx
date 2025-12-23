import React from 'react';
import { Instagram, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (

        <header className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
            <div
                className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-fixed md:bg-center"
                style={{
                    backgroundImage: "url('/images/exclusive_5.jpg')",
                    backgroundPosition: '50% 25%'
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* 4. EL CONTENIDO (Capa 10) */}

            <div className="relative z-10 text-white">

                {/* Subtítulo pequeño*/}

                <p className="text-sm md:text-base tracking-[0.4em] uppercase mb-4 opacity-90 font-light">
                    Portfolio & Booking
                </p>

                {/* Título Principal */}

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium tracking-tighter mb-6">
                    AIXA BACUR
                </h1>

                {/* Adornos decorativos */}
                <div className="flex items-center justify-center gap-4 text-xl tracking-widest uppercase opacity-80">
                    <span>Runway</span>
                </div>
            </div>

            {/* 5. REDES SOCIALES (Flotantes) */}
            <div className="absolute bottom-10 left-0 right-0 md:left-12 md:right-auto flex flex-row justify-center md:justify-start items-center gap-6 z-10">
                <a href="https://instagram.com/aixabacur" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white hover:scale-110 transition-all">
                    <Instagram size={24} strokeWidth={1.5} />
                </a>
                <a href="mailto:aixabacur@gmail.com" className="text-white/80 hover:text-white hover:scale-110 transition-all">
                    <Mail size={24} strokeWidth={1.5} />
                </a>
            </div>

            {/* 6. FLECHA DE SCROLL */}
            <div className="absolute bottom-8 animate-bounce z-10 text-white/70">
                <ChevronDown size={32} strokeWidth={1} />
            </div>

        </header>
    );
};

export default Hero;