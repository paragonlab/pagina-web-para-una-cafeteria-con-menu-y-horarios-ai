"use client"

import { useState } from "react"

function IconCoffeeCup(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props} aria-hidden="true">
      <path d="M18 8h1a3 3 0 0 1 0 6h-1" />
      <path d="M4 8h12v7a4 4 0 0 1-12 0V8z" />
      <path d="M8 3v1m4 0v1" />
    </svg>
  )
}

function IconClock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props} aria-hidden="true">
      <circle cx={12} cy={12} r={10} />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function IconLocation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props} aria-hidden="true">
      <path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z" />
      <circle cx={12} cy={10} r={3} />
    </svg>
  )
}

const menuItems = [
  {
    id: 1,
    name: "Espresso Clásico",
    description: "Café intenso, molido fresco y extracto perfecto de 30ml.",
    price: "1.50€",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 21h8m-5-13v6m5-4v2a3 3 0 0 1-6 0v-2a3 3 0 0 1 6 0z" />
      </svg>
    )
  },
  {
    id: 2,
    name: "Cappuccino Cremoso",
    description: "Espresso con leche vaporizada y espuma sedosa y suave.",
    price: "2.80€",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 9h20M2 13h20M6 18h12a4 4 0 0 1-12 0z" />
      </svg>
    )
  },
  {
    id: 3,
    name: "Té Verde Orgánico",
    description: "Infusión suave y refrescante de hojas premium cultivadas localmente.",
    price: "2.10€",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 12c4-4 8-2 12-6-4 4-2 8-6 12-4-4-2-8-6-12z" />
      </svg>
    )
  },
  {
    id: 4,
    name: "Pastel de Zanahoria",
    description: "Rebanada casera con especias y glaseado de queso crema.",
    price: "3.50€",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx={12} cy={12} r={10} />
        <path d="M6 12h12M12 6v12" />
      </svg>
    )
  },
  {
    id: 5,
    name: "Chocolate Caliente",
    description: "Chocolate oscuro hecho con cacao premium y leche cremosa.",
    price: "3.00€",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 21h10M7 10h10v9H7zM10 6h4v4h-4z" />
      </svg>
    )
  },
  {
    id: 6,
    name: "Croissant de Mantequilla",
    description: "Horneado fresco y hojaldrado, perfecto para acompañar el café.",
    price: "2.60€",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12l7-9 7 9-7 9-7-9z" />
      </svg>
    )
  }
]

const horarios = [
  { day: "Lunes - Viernes", hours: "7:00 – 20:00" },
  { day: "Sábado", hours: "8:00 – 18:00" },
  { day: "Domingo", hours: "Cerrado" }
]

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 bg-white border-b border-stone-200 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#hero" className="text-2xl font-heading font-extrabold text-primary cursor-pointer select-none">
            Café Sol y Sombra
          </a>
          <nav className="hidden md:flex gap-8 font-medium text-stone-700">
            <a href="#menu" className="hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer">Menú</a>
            <a href="#horarios" className="hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer">Horarios</a>
            <a href="#contacto" className="hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer">Contacto</a>
          </nav>
          <button
            aria-label="Menú"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary hover:text-primary-dark transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden px-6 pb-6 bg-white border-t border-stone-200 shadow-sm flex flex-col gap-6 font-semibold text-primary text-lg">
            <a href="#menu" onClick={() => setIsMenuOpen(false)} className="focus-visible:ring-2 focus-visible:ring-primary cursor-pointer">Menú</a>
            <a href="#horarios" onClick={() => setIsMenuOpen(false)} className="focus-visible:ring-2 focus-visible:ring-primary cursor-pointer">Horarios</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="focus-visible:ring-2 focus-visible:ring-primary cursor-pointer">Contacto</a>
          </nav>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-6 py-24">
        {/* HERO */}
        <section id="hero" className="text-center max-w-3xl mx-auto mb-32">
          <h1 className="font-heading text-6xl font-extrabold leading-tight text-primary mb-6">
            Café Sol y Sombra
          </h1>
          <p className="text-lg leading-relaxed text-stone-700 mb-10">
            Artesanía en cada taza, aromas que despiertan tus sentidos. Ven y disfruta del mejor café y pastelería artesanal en un ambiente cálido y acogedor.
          </p>
          <a
            href="#menu"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark shadow-md focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-200 cursor-pointer"
          >
            Ver Menú
          </a>
        </section>

        {/* MENÚ */}
        <section id="menu" className="mb-32">
          <h2 className="font-heading text-3xl font-semibold text-stone-800 mb-10 text-center">
            Nuestro Menú Destacado
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map(({ id, name, description, price, icon }) => (
              <article
                key={id}
                tabIndex={0}
                className="cursor-pointer rounded-2xl border border-stone-200 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-transform transition-shadow duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`${name} - ${price}`}
              >
                <div className="flex items-center gap-4 mb-4 text-primary">
                  {icon}
                  <h3 className="font-heading text-xl font-semibold text-stone-900">{name}</h3>
                </div>
                <p className="text-stone-700 mb-5">{description}</p>
                <p className="font-semibold text-primary">{price}</p>
              </article>
            ))}
          </div>
        </section>

        {/* HORARIOS */}
        <section id="horarios" className="mb-32 bg-stone-50 rounded-2xl p-16 shadow-sm max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-semibold text-stone-800 mb-10 text-center">
            Horarios de Atención
          </h2>
          <ul className="flex flex-col md:flex-row md:justify-center md:gap-24 text-stone-700 font-medium text-lg">
            {horarios.map(({ day, hours }) => (
              <li key={day} className="mb-6 md:mb-0 flex flex-col items-center">
                <span className="font-semibold text-stone-900">{day}</span>
                <span>{hours}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA FINAL */}
        <section id="contacto" className="text-center max-w-3xl mx-auto mb-32">
          <h2 className="font-heading text-3xl font-semibold text-stone-900 mb-6">
            Ubícanos y Ven a Disfrutar
          </h2>
          <p className="text-stone-700 mb-10">
            Calle Sol 23, Barrio Central, Ciudad Palma. Estamos aquí para ofrecerte el mejor café con pasión y dedicación.
          </p>
          <a
            href="https://goo.gl/maps/XaQ5N7uZQDs7gU6J6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark shadow-md focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-200 cursor-pointer"
          >
            <IconLocation className="w-6 h-6" />
            Ver en Google Maps
          </a>
        </section>
      </main>

      <footer className="border-t border-stone-200 py-8 bg-white text-center text-stone-600 text-sm font-medium select-none">
        © 2024 Café Sol y Sombra. Todos los derechos reservados.
      </footer>
    </>
  )
}
