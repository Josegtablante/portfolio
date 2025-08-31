import { useState, useEffect } from "react";
import { Code, Monitor, Database, Server, Coffee } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
    const [darkMode, setDarkMode] = useState(false);
    const [formSent, setFormSent] = useState(false);

    // Smooth scrolling between anchor links
    useEffect(() => {
        document.documentElement.style.scrollBehavior = "smooth";
    }, []);

    // Hero image - usando ruta en public/ para evitar problemas de preview
    const HERO_IMG = "/fotoprincipal.jpg";

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSent(true);
        setTimeout(() => setFormSent(false), 3000);
    };

    const themeRoot = darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900";
    const cardBg = darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200";
    const softBg = darkMode ? "bg-gray-800" : "bg-gray-50";

    const proyectos = [
        {
            title: "Melomanodisco",
            description: "E-commerce - API REST con autenticación, CRUD, órdenes, pagos.",
            image: "/melomanodisco.png",
            repo: "https://github.com/Josegtablante/melomanodisco",
            live: "https://melomanodisco.netlify.app/"
        },
        // {
        //     title: "NextBank",
        //     description: "Homebanking",
        //     image: "/melomanodisco.png",
        //     repo: "https://github.com/Josegtablante/NextBank?tab=readme-ov-file",
        //     live: "https://minhubbank.herokuapp.com/web/index.html"
        // },
        {
            title: "PetShop Franco",
            description: "E-commerce dedicado a la venta de productos para mascotas",
            image: "/petshop.png",
            repo: "https://github.com/Josegtablante/PetShop-Franco",
            live: "https://santyaragon.github.io/PetShop-Franco/"
        },
        {
            title: "Origami",
            description: "E-commerce dedicado a la venta de productos otakus",
            image: "/Origami.webp",
            repo: "https://github.com/Josegtablante/PetShop-Franco",
            live: "https://santyaragon.github.io/PetShop-Franco/"
        }
    ];

    const frontendTools = [
        { name: "🌐 HTML5", icon: Code, color: "text-orange-500" },
        { name: "🎨 CSS3 / TailwindCSS", icon: Code, color: "text-cyan-500" },
        { name: "🪄 Boostrap", icon: Code, color: "text-cyan-500" },
        { name: "💡 JavaScript (ES6+)", icon: Code, color: "text-yellow-500" },
        { name: "🚀 React", icon: Monitor, color: "text-blue-500" },
        { name: "⚡ Vite", icon: Server, color: "text-purple-500" },
    ];

    const backendTools = [
        { name: "🍵 Java", icon: Coffee, color: "text-red-500" },
        { name: "🐍 Python", icon: Coffee, color: "text-red-500" },
        { name: "🥣 Spring Boot", icon: Server, color: "text-green-500" },
        { name: "📖 SQL", icon: Database, color: "text-yellow-500" },
        { name: "🕵️ PostgreSQL", icon: Database, color: "text-blue-500" },
        { name: "🍴 REST APIs", icon: Server, color: "text-teal-500" },
    ];


    return (
        <div className={`${themeRoot} min-h-screen font-sans`} >
            {/* Header */}
            < header className={`fixed top-0 left-0 w-full z-50 border-b ${darkMode ? "bg-gray-900/90 border-gray-700" : "bg-white/90 border-gray-200"} backdrop-blur`
            }>
                <nav className="container mx-auto flex items-center justify-between px-6 py-4">
                    <h1 className="text-2xl font-bold tracking-tight">Jose | FullStack Dev</h1>
                    <ul className="hidden md:flex gap-8 font-medium">
                        <li><a href="#habilidades" className="hover:text-blue-500 transition">Habilidades</a></li>
                        <li><a href="#about" className="hover:text-blue-500 transition">Sobre mí</a></li>
                        <li><a href="#projects" className="hover:text-blue-500 transition">Proyectos</a></li>
                        <li><a href="#contact" className="hover:text-blue-500 transition">Contacto</a></li>
                    </ul>
                    <button onClick={() => setDarkMode(!darkMode)} className="ml-6 px-3 py-2 rounded-full border hover:opacity-80 transition">
                        {darkMode ? "☀️ Modo claro" : "🌙 Modo oscuro"}
                    </button>
                </nav>
            </header >

            {/* Hero Section */}
            < section className="min-h-screen flex items-center pt-24 md:pt-28" >
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    {/* Texto */}
                    <div className="order-2 md:order-1 text-center md:text-left space-y-6">
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Hola, soy José 👋</h2>
                        <p className="text-lg max-w-xl mx-auto md:mx-0 opacity-90">
                            Desarrollador Backend especializado en <span className="font-semibold">Java, Spring Boot y Python</span>.
                            Construyo sistemas escalables, eficientes y mantenibles.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                            <a href="./CV_Jose_Tablante_ATS_ES.pdf" download className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition">📄 Descargar CV</a>
                            <a href="https://www.linkedin.com/in/josetablante" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl border font-medium hover:bg-gray-100 transition">🔗 Ver LinkedIn</a>
                            <a
                                href="https://wa.me/5491157199026?text=Hola%20José,%20vi%20tu%20portafolio%20y%20quiero%20más%20información."  // <-- aquí tu número de WhatsApp con código de país
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-xl bg-green-600 text-black font-medium shadow hover:bg-green-700 hover:text-white-700 transition">
                                💬 WhatsApp
                            </a>
                        </div>
                    </div>
                    {/* Imagen */}
                    <div className="order-1 md:order-2 flex justify-center">
                        <img
                            src={HERO_IMG}
                            alt="Foto profesional de José"
                            className="w-72 h-72 md:w-96 md:h-96 object-contain rounded-2xl shadow-2xl ring-1 ring-black/5"
                        />
                    </div>
                </div>
            </section >

            {/* Habilidades */}
            <section id="habilidades" className={`py-24 ${softBg}`}>
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Habilidades
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Frontend */}
                        <motion.div
                            className={`shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300 ${cardBg}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Monitor className="w-8 h-8 text-gradient-to-r from-blue-400 to-blue-600" />
                                <h3 className="text-2xl font-semibold text-blue-500">Frontend</h3>
                            </div>
                            <ul className="list-none space-y-3">
                                {frontendTools.map((tool, idx) => {
                                    // const Icon = tool.icon;
                                    return (
                                        <li
                                            key={idx}
                                            className={`flex items-center gap-3 ${darkMode ? "text-gray-100" : "text-gray-900"}`}
                                        >
                                            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 transition-transform duration-300 hover:scale-110">
                                                {/* <Icon className={`w-4 h-4 ${tool.color}`} /> */}
                                            </div>
                                            <span className="font-medium">{tool.name}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </motion.div>

                        {/* Backend */}
                        <motion.div
                            className={`shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300 ${cardBg}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Server className="w-8 h-8 text-gradient-to-r from-green-400 to-green-600" />
                                <h3 className="text-2xl font-semibold text-green-500">Backend</h3>
                            </div>
                            <ul className="list-none space-y-3">
                                {backendTools.map((tool, idx) => {
                                    // const Icon = tool.icon;
                                    return (
                                        <li
                                            key={idx}
                                            className={`flex items-center gap-3 ${darkMode ? "text-gray-100" : "text-gray-900"}`}
                                        >
                                            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 transition-transform duration-300 hover:scale-110">
                                                {/* <Icon className={`w-4 h-4 ${tool.color}`} /> */}
                                            </div>
                                            <span className="font-medium">{tool.name}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sobre mí */}
            < section id="about" className="py-24" >
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">Sobre mí</h3>
                    <p className="text-xl opacity-90">
                        Soy un desarrollador backend con más de 3 años de experiencia creando soluciones informáticas
                        que ayudan a empresas y personas a optimizar sus procesos. Vivo en Argentina y me especializo en el
                        desarrollo de APIs robustas, la optimización de bases de datos y el despliegue de servicios en la nube.
                        Me motiva encontrar soluciones prácticas y eficientes, siempre cuidando la calidad del código,
                        el trabajo en equipo y la mejora continua.
                    </p>
                </div>
            </section >

            {/* Proyectos */}
            < div className="w-full min-h-screen" >
                {/* 🔹 Sección Proyectos */}
                < section id="projects" className={`py-24 ${softBg}`
                }>
                    <div className="container mx-auto px-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
                            Proyectos
                        </h3>

                        <div className="grid md:grid-cols-3 gap-8">
                            {proyectos.map((project, idx) => (
                                <div
                                    key={idx}
                                    className={`relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 ${cardBg}`}
                                >
                                    {/* Imagen + Overlay */}
                                    <div className="relative h-64 group">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
                                        />

                                        {/* Overlay con hover */}
                                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center z-10 pointer-events-none group-hover:pointer-events-auto">
                                            <h4 className="text-xl font-bold text-white mb-2">
                                                {project.title}
                                            </h4>
                                            <p className="text-sm text-white mb-4 max-w-[85%]">
                                                {project.description}
                                            </p>
                                            <div className="flex gap-3">
                                                <a
                                                    href={project.repo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                                >
                                                    Repo
                                                </a>
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 bg-pink text-white rounded-lg hover:bg-green-700 transition"
                                                >
                                                    Visitar
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section >
            </div >

            {/* Contacto */}
            < section id="contact" className="py-24" >
                <div className="container mx-auto px-6 max-w-xl text-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-8">Contacto</h3>
                    <p className="mb-8 opacity-80">¿Quieres trabajar conmigo? Escríbeme y conversemos sobre tu proyecto.</p>
                    {formSent && <p className="text-green-600 font-semibold mb-6">Su mensaje se ha enviado con éxito ✅</p>}
                    <form onSubmit={handleSubmit} className={`border rounded-xl p-6 space-y-4 shadow-sm ${softBg === "bg-gray-50" ? "bg-gray-50 border-gray-200" : "bg-gray-800 border-gray-700"}`}>
                        <input type="text" name="name" placeholder="Nombre" required className="w-full border rounded-lg p-3 bg-transparent" />
                        <input type="email" name="email" placeholder="Correo" required className="w-full border rounded-lg p-3 bg-transparent" />
                        <input type="text" name="subject" placeholder="Asunto" required className="w-full border rounded-lg p-3 bg-transparent" />
                        <textarea name="message" placeholder="Descripción" rows="4" required className="w-full border rounded-lg p-3 bg-transparent" />
                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium">Enviar</button>
                    </form>
                </div>
            </section >

            {/* Footer */}
            < footer className={`border-t py-6 text-center ${softBg}`}>
                <p className="opacity-70 text-sm">© {new Date().getFullYear()} Jose Backend Dev. Todos los derechos reservados.</p>
            </footer >


        </div >
    );
}
