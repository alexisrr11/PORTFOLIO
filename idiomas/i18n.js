import { abrirModal, currentProject } from "../destacados/cardsDestacados.js";

let currentLang = "es";

export function getLang() {
    return currentLang;
}

const btnVerMas = document.getElementById("btn-ver-mas");
const contenedorVerMas = document.getElementById("ver-mas");

export const translations = {
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
        "hero.descripcion.dos": "Uno de mis mayores aprendizajes fue el desarrollo de un sistema multi-tenant de gestión de turnos, donde perfeccioné mi capacidad para diseñar arquitecturas robustas y tomar decisiones estratégicas antes de iniciar un MVP. Este proceso me enseñó a transformar ideas en soluciones claras y estructuradas. Lo que me diferencia es mi constancia y resiliencia: nunca bajo los brazos y siempre trabajo para alcanzar los objetivos de cada proyecto, sin perder de vista la experiencia del usuario y el impacto real de la solución.",
        "hero.data": "Mis datos",
        "hero.download": "Descargar CV",
        "skills.my": "Mis Habilidades",
        "skills.learning": "En aprendizaje",
        "projects.featured": "Proyectos Destacados",
        "projects.details": "Ver detalles",
        "contacts.title": "Contactos",
        "contacts.copy": "¡Correo copiado al portapapeles!",
        "footer.rights": "Todos los derechos reservados",
        "modal.datas": "Datos Personales",
        "modal.location": "Ubicación:",
        "modal.preparation": "Tiempo de preparación:",
        "modal.current.job": "Trabajo Actual:",
        "modal.preparation.age": "2 Años",
        "modal.languages": "Idiomas:",
        "modal.spanish": "Español: Lenguaje nativo",
        "modal.english": "Inglés: (B1)",
        "modal.portuguese": "Portugués: (A2)",
        "modal.age": "Edad:",
        "modal.my.age": "30 Años",
        "modal.goals": "Objetivos",
        "modal.goals.description": "Mi objetivo es crear una sólida base en arquitectura de software, combinando frontend y backend para construir aplicaciones completas. También busco fortalecer mis ideas en productos funcionales sobre sistemas integrales, tomando siempre las mejores decisiones posibles en cuanto a estructura y resolución de problemas reales. En el futuro espero dominar un stack con TypeScript aplicado en Next.js, utilizando herramientas como Prisma y Docker.",
        "modal.description":"Descripción",
        "modal.technologies": "Tecnologías",
        "modal.repo": "Repositorio",
        projects: {
            ecommerce: {
                title: "Saturn E-Commerce",
                description: "Descripción general del proyecto",
                imagesDesc: [
                    "Vista principal de la tienda",
                    "Pantalla de productos con likes",
                    "Carrito de compras en acción"
                ]
            },
            multiuser: {
                title: "Multi-User",
                description: "Aplicación web multiusuario con React y Node.js",
                imagesDesc: [
                    "Vista principal",
                    "Login",
                    "Registro"
                ]
            },
            turnero: {
                title: "Practical Session",
                description: "",
                imagesDesc: [
                    "Practical Session es una aplicación SaaS multi-tenant compuesta por un software central, una base de datos única y múltiples clientes empresariales. La aplicación no tendrá optimización SEO y está pensada para un flujo aproximado de 20 empresas, cuidando el rendimiento del sistema al compartir una sola base de datos. La seguridad de los datos se garantiza mediante un id_empresarial y tokens JWT, definidos en el archivo .env. La creación de usuarios empresariales y clientes es ilimitada en la versión gratuita; sin embargo, si no se contrata el plan premium dentro de los 6 meses, todos los datos vinculados serán eliminados.El objetivo es ofrecer un software adaptable a cualquier empresa, automatizando la gestión de turnos y permitiendo delegar tareas de agenda de manera eficiente.",
                    "Registro empresa",
                    "Dashboard"
                ]
            }
        }
    },
    en: {
        "title": "Portfolio - Full-Stack Developer",
        "nav.about": "About me",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contacts",
        "hero.title": "Hi, I'm Rodriguez Alexis",
        "hero.subtitle": "Full-Stack Developer with a slight Front-End focus",
        "hero.descripcion.uno": "I’m passionate about building complete applications, both from a technical perspective and from the business model behind each project. I create modern interfaces and especially enjoy designing user-centered experiences, while also being capable of building endpoints and solid MVC architectures using object-oriented programming in Node.js.",
        "hero.more": "Read more",
        "hero.less": "Read less",
        "hero.descripcion.dos": "One of my most valuable learning experiences was developing a multi-tenant appointment management system, where I strengthened my ability to design robust architectures and make strategic decisions before starting an MVP. This process taught me how to transform ideas into clear and structured solutions. What sets me apart is my consistency and resilience: I never give up and always work towards achieving each project’s goals, without losing sight of the user experience and the real impact of the solution.",
        "hero.data": "My Information",
        "hero.download": "Download CV",
        "skills.my": "My Skills",
        "skills.learning": "Currently Learning",
        "projects.featured": "Featured Projects",
        "projects.details": "Learn more",
        "contacts.title": "Contacts",
        "contacts.copy": "Email copied to clipboard!",
        "footer.rights": "All rights reserved",
        "modal.datas": "Personal Information",
        "modal.location": "Location:",
        "modal.preparation": "Preparation Time:",
        "modal.current.job": "Current Job:",
        "modal.preparation.age": "2 Years",
        "modal.languages": "Languages:",
        "modal.spanish": "spanish: native",
        "modal.english": "english: (B1)",
        "modal.portuguese": "portuguese: (A2)",
        "modal.age": "Age:",
        "modal.my.age": "30 years",
        "modal.goals": "Goals",
        "modal.goals.description": "My goal is to build a solid foundation in software architecture, combining frontend and backend to develop complete applications. I also aim to strengthen my ideas into functional products within integrated systems, always making the best possible decisions regarding structure and solving real-world problems. In the future, I hope to master a stack with TypeScript applied in Next.js, using tools such as Prisma and Docker.",
        "modal.description":"Description",
        "modal.technologies": "Technologies",
        "modal.repo": "Repository",
        projects: {
            ecommerce: {
                title: "E-Commerce",
                description: "Description of the project",
                imagesDesc: [
                    "Main view of the store",
                    "Product screen with likes",
                    "Shopping cart in action"
                ]
            },
            multiuser: {
                title: "Multi-User",
                description: "Multi-user web application with React and Node.js",
                imagesDesc: [
                    "Main view",
                    "Login",
                    "Registration"
                ]
            },
            turnero: {
                title: "Practical Session",
                description: "System for managing appointments",
                imagesDesc: [
                    "Practical Session is a multi-tenant SaaS application composed of a central software, a single database, and multiple business clients. The application will not include SEO optimization and is designed to handle an approximate flow of 20 companies, ensuring system performance while sharing a single database. Data security is guaranteed through a business ID (id_empresarial) and JWT tokens, defined in the .end file. The creation of business users and company clients is unlimited in the free version; however, if the premium plan is not purchased within 6 months, all associated data will be deleted. The goal is to provide adaptable software for any company, automating appointment management and enabling efficient delegation of scheduling tasks",
                    "Company Registration",
                    "Dashboard"
                ]
            }
        }
    },
    pt: {
        "title": "Portfólio - Desenvolvedor Full-Stack",
        "nav.about": "Sobre mim",
        "nav.skills": "Habilidades",
        "nav.projects": "Projetos",
        "nav.contact": "Contatos",
        "hero.title": "Olá, sou Rodriguez Alexis",
        "hero.subtitle": "Desenvolvedor Full-Stack com foco em Front-End",
        "hero.descripcion.uno": "Sou apaixonado por construir aplicações completas, tanto do ponto de vista técnico quanto do modelo de negócio por trás de cada projeto. Crio interfaces modernas e gosto especialmente de projetar experiências centradas no usuário, além de ter experiência na criação de endpoints e arquiteturas MVC sólidas utilizando programação orientada a objetos em Node.js.",
        "hero.more": "Ler mais",
        "hero.less": "Ler menos",
        "hero.descripcion.dos": "Um dos meus maiores aprendizados foi o desenvolvimento de um sistema multi-tenant de gestão de agendamentos, onde aperfeiçoei minha capacidade de projetar arquiteturas robustas e tomar decisões estratégicas antes de iniciar um MVP. Esse processo me ensinou a transformar ideias em soluções claras e estruturadas. O que me diferencia é minha constância e resiliência: nunca desisto e sempre trabalho para alcançar os objetivos de cada projeto, sem perder de vista a experiência do usuário e o impacto real da solução.",
        "hero.data": "Meus dados",
        "hero.download": "Baixar CV",
        "skills.my": "Minhas habilidades",
        "skills.learning": "Em aprendizado",
        "projects.featured": "Projetos em destaque",
        "projects.details": "Ver detalhes",
        "contacts.title": "Contatos",
        "contacts.copy": "E-mail copiado para a área de transferência!",
        "footer.rights": "Todos os direitos reservados",
        "modal.datas": "Dados Pessoais",
        "modal.location": "Localização:",
        "modal.preparation": "Tempo de preparação",
        "modal.current.job": "Trabalho atual:",
        "modal.preparation.age": "2 anos",
        "modal.languages": "Idiomas:",
        "modal.spanish": "Espanhol: Língua nativa",
        "modal.english": "Inglês: (B1)",
        "modal.portuguese": "Português: (A2)",
        "modal.age": "Idade:",
        "modal.my.age": "30 anos",
        "modal.goals": "Objetivos",
        "modal.goals.description": "Meu objetivo é criar uma base sólida em arquitetura de software, combinando frontend e backend para desenvolver aplicações completas. Também busco transformar minhas ideias em produtos funcionais dentro de sistemas integrados, sempre tomando as melhores decisões possíveis em relação à estrutura e à resolução de problemas reais. No futuro, espero dominar um stack com TypeScript aplicado em Next.js, utilizando ferramentas como Prisma e Docker.",
        "modal.description":"Descrição",
        "modal.technologies": "Tecnologias",
        "modal.repo": "Repositório",
        projects: {
            ecommerce: {
                title: "Saturn E-Commerce",
                description: "Descrição do projeto",
                imagesDesc: [
                    "Vista principal da loja",
                    "Tela de produtos com likes",
                    "Carrinho de compras em ação"
                ]
            },
            multiuser: {
                title: "Multi-User",
                description: "Descrição do projeto",
                imagesDesc: [
                    "Vista principal",
                    "Login",
                    "Registro"
                ]
            },
            turnero: {
                title: "Practical Session",
                description: "Sistema de gestão de agendamentos",
                imagesDesc: [
                    "Practical Session é uma aplicação SaaS multi-tenant composta por um software central, um banco de dados único e múltiplos clientes empresariais. A aplicação não terá otimização de SEO e foi projetada para suportar um fluxo aproximado de 20 empresas, garantindo o desempenho do sistema ao compartilhar um único banco de dados.A segurança dos dados é garantida por meio de um id_empresarial e tokens JWT, definidos no arquivo .env. A criação de usuários empresariais e clientes é ilimitada na versão gratuita; no entanto, caso o plano premium não seja contratado dentro de 6 meses, todos os dados associados serão excluídos.O objetivo é oferecer um software adaptável a qualquer empresa, automatizando a gestão de agendamentos e permitindo a delegação eficiente de tarefas de agenda.",
                    "Registro de empresa",
                    "Dashboard"
                ]
            }
        }
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

    if (currentProject) {
        abrirModal(
            currentProject.projectKey,
            currentProject.imagenes,
            currentProject.tecnologias
        );
    }

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
