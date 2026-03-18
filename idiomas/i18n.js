let currentLang = "es";
const btnVerMas = document.getElementById("btn-ver-mas");
const contenedorVerMas = document.getElementById("ver-mas");

const translations = {
    es: {
        "title": "Portafolio - Desarrollador Full-Stack",
        "nav.about": "Acerca de mí",
        "nav.skills": "Habilidades",
        "nav.projects": "Proyectos",
        "nav.contact": "Contactos",
        "hero.title": "Hola, soy Rodriguez Alexis",
        "hero.subtitle": "Desarrollador Full-Stack con leve orientación al Front-End",
        "hero.descripcion.uno": "Me apasiona construir aplicaciones completas, tanto en la parte técnica como en el modelo de negocio detrás de cada proyecto. Creo interfaces modernas y disfruto más diseñar experiencias del lado del usuario, como también sé crear endpoints y arquitecturas MVC sólidas aplicando POO en Node.js.",
        "hero.more": "Ver más",
        "hero.less": "Ver menos",
        "hero.descripcion.dos": "Uno de mis mayores aprendizajes fue el desarrollo de un sistema multi-tenant de gestión de turnos, donde perfeccioné mi capacidad para diseñar arquitecturas robustas y tomar decisionesestratégicas antes de iniciar un MVP. Este proceso me enseñó a transformar ideas en soluciones claras y estructuradas. Lo que me diferencia es mi constancia y resiliencia: nunca bajo los brazos y siempre trabajo para alcanzar los objetivos de cada proyecto, sin perder de vista la experiencia del usuario y el impacto real de la solución.",
    },
    en: {
        "title": "Portfolio - Full-Stack Developer",
        "nav.about": "About me",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "hero.title": "Hi, I'm Rodriguez Alexis",
        "hero.subtitle": "Full-Stack Developer with a slight Front-End focus",
        "hero.descripcion.uno": "I’m passionate about building complete applications, both from a technical perspective and from the business model behind each project. I create modern interfaces and especially enjoy designing user-centered experiences, while also being capable of building endpoints and solid MVC architectures using object-oriented programming in Node.js.",
        "hero.more": "Read more",
        "hero.less": "Read less",
        "hero.descripcion.dos": "One of my most valuable learning experiences was developing a multi-tenant appointment management system, where I strengthened my ability to design robust architectures and make strategic decisions before starting an MVP. This process taught me how to transform ideas into clear and structured solutions. What sets me apart is my consistency and resilience: I never give up and always work towards achieving each project’s goals, without losing sight of the user experience and the real impact of the solution.",
    },
    pt: {
        "title": "Portfólio - Desenvolvedor Full-Stack",
        "nav.about": "Sobre mim",
        "nav.skills": "Habilidades",
        "nav.projects": "Projetos",
        "nav.contact": "Contato",
        "hero.title": "Olá, sou Rodriguez Alexis",
        "hero.subtitle": "Desenvolvedor Full-Stack com foco em Front-End",
        "hero.descripcion.uno": "Sou apaixonado por construir aplicações completas, tanto do ponto de vista técnico quanto do modelo de negócio por trás de cada projeto. Crio interfaces modernas e gosto especialmente de projetar experiências centradas no usuário, além de ter experiência na criação de endpoints e arquiteturas MVC sólidas utilizando programação orientada a objetos em Node.js.",
        "hero.more": "Ler mais",
        "hero.less": "Ler menos",
        "hero.descripcion.dos": "Um dos meus maiores aprendizados foi o desenvolvimento de um sistema multi-tenant de gestão de agendamentos, onde aperfeiçoei minha capacidade de projetar arquiteturas robustas e tomar decisões estratégicas antes de iniciar um MVP. Esse processo me ensinou a transformar ideias em soluções claras e estruturadas. O que me diferencia é minha constância e resiliência: nunca desisto e sempre trabalho para alcançar os objetivos de cada projeto, sem perder de vista a experiência do usuário e o impacto real da solução.",
    }
};

btnVerMas.addEventListener("click", () => {
    contenedorVerMas.classList.toggle("hidden");

    const isHidden = contenedorVerMas.classList.contains("hidden");

    btnVerMas.textContent = isHidden
        ? translations[currentLang]["hero.more"]
        : translations[currentLang]["hero.less"];
});

function changeLanguage(lang) {
    currentLang = lang;
    contenedorVerMas.classList.add("hidden");
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[lang][key] || key;
    });

    document.documentElement.lang = lang;
    document.title = translations[lang]["title"];

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations[lang]["meta.description"]) {
        metaDesc.setAttribute("content", translations[lang]["meta.description"]);
    }

    localStorage.setItem("lang", lang);
}

document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        changeLanguage(lang);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "es";
    changeLanguage(savedLang);
});
