import React, { useState } from 'react';

const photos = [
    { id: 1, src: "/images/exclusive_1.jpg", category: "Exclusive" },
    { id: 2, src: "/images/exclusive_3.jpg", category: "Exclusive" },
    { id: 3, src: "/images/exclusive_9.jpg", category: "Exclusive" },
    { id: 4, src: "/images/elegant_1.jpeg", category: "Elegant" },
    { id: 5, src: "/images/elegant_2.jpeg", category: "Elegant" },
    { id: 6, src: "/images/elegant_6.jpg", category: "Elegant" },
    { id: 7, src: "/images/tematic_2.jpeg", category: "Tematic" },
    { id: 8, src: "/images/tematic_5.jpg", category: "Tematic" },
    { id: 9, src: "/images/tematic_6.jpg", category: "Tematic" },
    { id: 10, src: "/images/Polas_stats.png", category: "Polas" },
    { id: 11, src: "/images/Polas_2.jpg", category: "Polas" },
    { id: 12, src: "/images/Polas_4.jpg", category: "Polas" },
    { id: 13, src: "/images/Polas_5.jpg", category: "Polas" },
    { id: 14, src: "/images/Polas_6.jpg", category: "Polas" },
    { id: 15, src: "/images/Polas_1.jpg", category: "Polas" },
    { id: 16, src: "/images/Workshop_1.jpg", category: "Workshop" },
    { id: 17, src: "/images/Workshop_2.jpg", category: "Workshop" },
    { id: 18, src: "/images/Workshop_3.jpg", category: "Workshop" },
    { id: 19, src: "/images/Workshop_4.jpg", category: "Workshop" },
    { id: 20, src: "/images/Workshop_5.jpg", category: "Workshop" },
    { id: 21, src: "/images/Workshop_6.jpg", category: "Workshop" },
];
const categories = ["Todos", "Exclusive", "Elegant", "Tematic", "Polas", "Workshop Zyra"];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("Todos");
    const filteredPhotos = activeCategory === "Todos"
        ? photos
        : photos.filter(photo => photo.category === activeCategory);

    return (
        <section id="portfolio" className="py-16 bg-stone-50 min-h-screen">
            <div className="max-w-[1600px] mx-auto px-4">

                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`text-sm tracking-[0.2em] uppercase transition-all duration-300 pb-1 border-b-2 
                ${activeCategory === cat
                                    ? "border-brand-dark text-brand-dark font-semibold"
                                    : "border-transparent text-gray-400 hover:text-gray-600"}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

                    {filteredPhotos.map((photo) => (
                        <div key={photo.id} className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-sm">
                            <img
                                src={photo.src}
                                alt={`Sesión ${photo.category}`}
                                className="w-full h-auto object-cover transition-all duration-700 ease-in-out"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Gallery;