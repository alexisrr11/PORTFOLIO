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
        "hero.descripcion.dos": "Uno de mis mayores aprendizajes fue el desarrollo de un sistema de gestión de turnos médicos. A lo largo del proyecto fortalecí mi capacidad para organizar la arquitectura de una aplicación completa, mantener una estructura clara de archivos y separar el frontend y el backend en capas con responsabilidades bien definidas. En el backend aprendí a distribuir la lógica entre rutas, controladores, servicios, errores, repositorios, tipados, patrones de diseño y acceso a datos, evitando concentrar demasiadas responsabilidades en un mismo archivo. También profundicé mis conocimientos en Node.js, Express, TypeScript y Prisma ORM. En el frontend fortalecí la organización de aplicaciones con React, TypeScript y Tailwind CSS, separando componentes, hooks, tipos, constantes, estilos y funciones auxiliares. También trabajé en la división entre layouts, páginas, componentes reutilizables y centralizar las llamadas al backend mediante servicios o clientes HTTP. El proyecto también me permitió adquirir experiencia trabajando con aplicaciones desplegadas en producción. Aprendí a preparar correctamente los entornos antes del despliegue, borrar logs o metodos de debugs olvidados dentro del código como revisar o editar registros de gitHub para evitar potenciales vulnerabilidades de seguridad, gestionar variables de entorno y proteger archivos sensibles. Además, preparé entornos locales y de prueba utilizando Prisma con SQLite, manteniendo una estructura que facilitara posteriormente la transición a PostgreSQL. Esta experiencia me enseñó a planificar arquitecturas, gestionar diferentes entornos, anticipar problemas de seguridad y comprender cómo se comporta un sistema desde el desarrollo local hasta su funcionamiento en producción.",
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
        "modal.preparation.age": "3 Años",
        "modal.languages": "Idiomas:",
        "modal.spanish": "Español: Lenguaje nativo",
        "modal.english": "Inglés: (B1)",
        "modal.portuguese": "Portugués: (A2)",
        "modal.age": "Edad:",
        "modal.my.age": "31 Años",
        "modal.goals": "Objetivos",
        "modal.goals.description": "Mi objetivo es seguir desarrollándome como builder enfocado en arquitectura de software, creando aplicaciones completas, organizadas y preparadas para crecer. Busco profundizar en el uso de Next.js mediante una arquitectura monorepo que me permita trabajar frontend y backend dentro de un mismo entorno, compartir tipos, validaciones y lógica reutilizable, reducir duplicaciones y simplificar el mantenimiento de cada proyecto. También quiero incorporar Docker para crear entornos de desarrollo y prueba consistentes, reproducibles y cercanos a producción. Aunque actualmente trabajo de forma individual y no busco coordinar diferentes configuraciones entre varios desarrolladores, considero que Docker puede ayudarme a automatizar dependencias, reducir errores de configuración y lograr despliegues más limpios, seguros y predecibles. Mi meta es consolidar un stack basado en TypeScript, Next.js, Prisma, PostgreSQL y Docker, aplicando una correcta separación de responsabilidades, buenas prácticas de seguridad y una arquitectura clara.",
        "modal.description": "Descripción",
        "modal.technologies": "Tecnologías",
        "modal.repo": "Repositorio",

        "nav.education": "Formación",
        "modal.demo": "Ver demo",
        "education.readMore": "Leer más",
        "education.readLess": "Leer menos",
        "education.diploma.loading": "Cargando diploma...",
        "education.diploma.error": "No se pudo cargar la imagen del diploma.",

        "education.title": "Formación y aprendizaje",
        "education.description": "Mi formación combina cursos especializados, aprendizaje autodidacta y experiencia práctica desarrollando y desplegando proyectos completos.",

        "education.course.label": "Curso realizado",
        "education.course.title": "React Talento Tech",
        "education.course.institution": "Institución:",
        "education.course.institutionName": "Ministerio de educación de la Ciudad de Buenos Aires",
        "education.course.description": "Formación práctica orientada al desarrollo de una aplicación completa con React, desde su creación hasta su despliegue.",

        "education.course.item1": "Creación de aplicaciones React desde cero utilizando Vite.",
        "education.course.item2": "Gestión de estado mediante useState y Context API.",
        "education.course.item3": "Desarrollo de rutas dinámicas y protegidas para una navegación segura.",
        "education.course.item4": "Construcción de formularios con validaciones y autenticación de usuarios.",
        "education.course.item5": "Desarrollo de un CRUD para la gestión de productos de un e-commerce.",
        "education.course.item6": "Estilización de aplicaciones con Bootstrap y styled-components.",
        "education.course.item7": "Integración de Firebase y Firestore para almacenamiento.",
        "education.course.item8": "Despliegue de la aplicación final en una plataforma de hosting.",

        "education.selfTaught.label": "Formación autodidacta",
        "education.selfTaught.title": "Desarrollo web Full Stack",
        "education.selfTaught.description": "Aprendizaje continuo mediante documentación, práctica y construcción de proyectos reales, abarcando frontend, backend, bases de datos, arquitectura y despliegue.",

        "education.selfTaught.developmentTitle": "Desarrollo y arquitectura",
        "education.selfTaught.databaseTitle": "Bases de datos",
        "education.selfTaught.deploymentTitle": "Despliegue y producción",

        "education.selfTaught.item1": "Desarrollo de aplicaciones con JavaScript, TypeScript, React, Node.js y Express.",
        "education.selfTaught.item2": "Construcción de APIs, endpoints, autenticación y arquitecturas backend basadas en separación de responsabilidades.",
        "education.selfTaught.item3": "Uso de Prisma ORM, Git y flujos de trabajo orientados al mantenimiento de proyectos.",
        "education.selfTaught.item4": "Trabajo con PostgreSQL en aplicaciones desplegadas y entornos de producción.",
        "education.selfTaught.item5": "Uso de SQLite como base de datos para desarrollo local, prototipos y entornos de prueba.",
        "education.selfTaught.item6": "Configuración y despliegue de bases de datos PostgreSQL administradas mediante Neon.",
        "education.selfTaught.item7": "Experiencia desplegando aplicaciones frontend en Vercel.",
        "education.selfTaught.item8": "Despliegue de APIs y servicios backend en Render.",
        "education.selfTaught.item9": "Configuración de variables de entorno, migraciones y conexiones entre frontend, backend y base de datos.",

        projects: {
            abogados: {
                title: "App para estudios jurídicos",
                description: "Aplicación web orientada a la gestión de estudios jurídicos.",
                imagesDesc: [
                    "Sistema diseñado para centralizar la gestión de clientes, expedientes, tareas, plazos y documentos de un estudio jurídico. La aplicación busca simplificar el trabajo diario mediante formularios claros, información organizada y acceso rápido a los datos más importantes.",
                    "Vista para administrar expedientes, clientes y datos relacionados con cada caso."
                ],
                github: "https://github.com/alexisrr11/Muestra-para-estudios-juridicos",
                demo: "https://muestra-para-estudios-juridicos.vercel.app/"
            },

            agenda: {
                title: "Agenda de contactos",
                description: "Aplicación web para registrar, organizar y gestionar contactos.",
                imagesDesc: [
                    "Aplicación de gestión de contactos que permite registrar empresas o personas, almacenar números telefónicos, definir estados y programar fechas de seguimiento. El sistema facilita la organización de contactos y centraliza la información necesaria para realizar futuras comunicaciones.",
                    "Formulario para registrar y editar la información de los contactos.",
                    "Vista de gestión con información, estados y fechas de seguimiento."
                ],
                github: "https://github.com/alexisrr11/AppMiAgenda",
                demo: "https://app-mi-agenda.vercel.app/"
            },

            turnos: {
                title: "App de turnos médicos",
                description: "Sistema Full Stack para gestionar médicos, pacientes y turnos.",
                imagesDesc: [
                    "Sistema de gestión de turnos médicos desarrollado para administrar pacientes, profesionales, horarios y reservas. Incluye un panel administrativo para organizar la disponibilidad de los médicos y un portal para que los pacientes consulten horarios y soliciten turnos.",
                    "Vista del sistema para la gestión de pacientes y turnos.",
                    "Interfaz utilizada por los pacientes para seleccionar profesionales, fechas y horarios disponibles.",
                    "Calendario administrativo para consultar y organizar los turnos médicos."
                ],
                github: "https://github.com/alexisrr11/MVP-Medi-Turnos",
                demo: "https://mvp-medi-turnos.vercel.app"
            }
        }
    },
    en: {
        "title": "Portfolio - Full-Stack Developer",

        "nav.about": "About me",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.education": "Education",
        "nav.contact": "Contact",

        "hero.title": "Hi, I'm Alexis Rodriguez",
        "hero.subtitle": "Full-Stack Developer with a slight Front-End focus",

        "hero.descripcion.uno": "I am passionate about building complete applications, both from a technical perspective and by understanding the business model behind each project. I create modern interfaces and especially enjoy designing user-centered experiences, while also being able to develop endpoints and solid MVC architectures by applying object-oriented programming in Node.js.",

        "hero.more": "Read more",
        "hero.less": "Read less",

        "hero.descripcion.dos": "One of my greatest learning experiences was developing a medical appointment management system. Throughout the project, I strengthened my ability to organize the architecture of a complete application, maintain a clear file structure, and separate the frontend and backend into layers with well-defined responsibilities. On the backend, I learned to distribute logic across routes, controllers, services, error handling, repositories, types, design patterns, and data access, avoiding the concentration of too many responsibilities in a single file. I also deepened my knowledge of Node.js, Express, TypeScript, and Prisma ORM. On the frontend, I improved the organization of applications built with React, TypeScript, and Tailwind CSS by separating components, hooks, types, constants, styles, and utility functions. I also worked with layouts, pages, reusable components, and centralized backend requests through services or HTTP clients. The project also allowed me to gain experience working with applications deployed in production. I learned how to properly prepare environments before deployment, remove forgotten logs or debugging methods from the code, review deployment and GitHub records to avoid potential security vulnerabilities, manage environment variables, and protect sensitive files. I also prepared local and testing environments using Prisma with SQLite, maintaining a structure that would later facilitate the transition to PostgreSQL. This experience taught me how to plan architectures, manage different environments, anticipate security issues, and understand how a system behaves from local development to production.",

        "hero.data": "My information",
        "hero.download": "Download CV",

        "skills.my": "My Skills",
        "skills.learning": "Currently learning",

        "projects.featured": "Featured Projects",
        "projects.details": "View details",

        "contacts.title": "Contact",
        "contacts.copy": "Email copied to clipboard!",

        "footer.rights": "All rights reserved",

        "modal.datas": "Personal Information",
        "modal.location": "Location:",
        "modal.preparation": "Learning experience:",
        "modal.current.job": "Current occupation:",
        "modal.preparation.age": "3 years",
        "modal.languages": "Languages:",
        "modal.spanish": "Spanish: Native language",
        "modal.english": "English: B1",
        "modal.portuguese": "Portuguese: A2",
        "modal.age": "Age:",
        "modal.my.age": "31 years old",

        "modal.goals": "Goals",

        "modal.goals.description": "My goal is to continue growing as a builder focused on software architecture, creating complete, well-organized applications that are prepared to scale. I want to deepen my knowledge of Next.js by applying a monorepo architecture that allows me to work with the frontend and backend within the same environment, share types, validations, and reusable logic, reduce duplication, and simplify the maintenance of each project. I also want to incorporate Docker to create consistent, reproducible development and testing environments that closely resemble production. Although I currently work independently and do not need to coordinate different configurations across multiple developers, I believe Docker can help me automate dependencies, reduce configuration errors, and achieve cleaner, safer, and more predictable deployments. My goal is to consolidate a stack based on TypeScript, Next.js, Prisma, PostgreSQL, and Docker, applying proper separation of responsibilities, security best practices, and a clear architecture.",

        "modal.description": "Description",
        "modal.technologies": "Technologies",
        "modal.repo": "Repository",
        "modal.demo": "View demo",

        "education.title": "Education and learning",

        "education.description": "My education combines specialized courses, self-directed learning, and practical experience developing and deploying complete projects.",

        "education.course.label": "Completed course",
        "education.course.title": "React — Talento Tech",
        "education.course.institution": "Institution:",
        "education.course.institutionName": "Ministry of Education of the City of Buenos Aires",

        "education.course.description": "Practical training focused on developing a complete React application, from its initial setup to deployment.",

        "education.course.item1": "Creating React applications from scratch using Vite.",
        "education.course.item2": "State management using useState and Context API.",
        "education.course.item3": "Developing dynamic and protected routes for secure and seamless navigation.",
        "education.course.item4": "Building validated forms and implementing user authentication.",
        "education.course.item5": "Developing a CRUD system to manage products in an e-commerce project.",
        "education.course.item6": "Styling applications with Bootstrap and styled-components.",
        "education.course.item7": "Integrating Firebase and Firestore for data storage.",
        "education.course.item8": "Deploying the final application to a hosting platform.",

        "education.selfTaught.label": "Self-directed learning",
        "education.selfTaught.title": "Full-Stack Web Development",

        "education.selfTaught.description": "Continuous learning through documentation, practice, and the development of real-world projects involving frontend, backend, databases, architecture, and deployment.",

        "education.selfTaught.developmentTitle": "Development and architecture",
        "education.selfTaught.databaseTitle": "Databases",
        "education.selfTaught.deploymentTitle": "Deployment and production",

        "education.selfTaught.item1": "Developing applications with JavaScript, TypeScript, React, Node.js, and Express.",
        "education.selfTaught.item2": "Building APIs, endpoints, authentication systems, and backend architectures based on separation of responsibilities.",
        "education.selfTaught.item3": "Using Prisma ORM, Git, and workflows focused on project maintenance.",
        "education.selfTaught.item4": "Working with PostgreSQL in deployed applications and production environments.",
        "education.selfTaught.item5": "Using SQLite as a database for local development, prototypes, and testing environments.",
        "education.selfTaught.item6": "Configuring and deploying managed PostgreSQL databases with Neon.",
        "education.selfTaught.item7": "Experience deploying frontend applications with Vercel.",
        "education.selfTaught.item8": "Deploying APIs and backend services with Render.",
        "education.selfTaught.item9": "Configuring environment variables, migrations, and connections between the frontend, backend, and database.",

        "education.readMore": "Read more",
        "education.readLess": "Read less",
        "education.diploma.loading": "Loading certificate...",
        "education.diploma.error": "The certificate image could not be loaded.",

        projects: {
            abogados: {
                title: "Law Firm Management App",
                description: "A web application designed for law firm management.",

                imagesDesc: [
                    "A system designed to centralize the management of clients, legal cases, tasks, deadlines, and documents within a law firm. The application aims to simplify daily work through clear forms, organized information, and quick access to the most important data.",
                    "View for managing legal cases, clients, and information related to each matter."
                ],

                github: "https://github.com/alexisrr11/Muestra-para-estudios-juridicos",
                demo: "https://muestra-para-estudios-juridicos.vercel.app/"
            },

            agenda: {
                title: "Contact Manager",
                description: "A web application for registering, organizing, and managing contacts.",

                imagesDesc: [
                    "A contact management application that allows users to register companies or individuals, store phone numbers, assign statuses, and schedule follow-up dates. The system simplifies contact organization and centralizes the information needed for future communication.",
                    "Form for registering and editing contact information.",
                    "Management view with contact information, statuses, and follow-up dates."
                ],

                github: "https://github.com/alexisrr11/AppMiAgenda",
                demo: "https://app-mi-agenda.vercel.app/"
            },

            turnos: {
                title: "Medical Appointment Management App",
                description: "A Full-Stack system for managing doctors, patients, and appointments.",

                imagesDesc: [
                    "A medical appointment management system developed to administer patients, healthcare professionals, schedules, and bookings. It includes an administrative dashboard for organizing doctors' availability and a patient portal where users can view available times and request appointments.",
                    "System view for managing patients and appointments.",
                    "Patient interface for selecting healthcare professionals, dates, and available appointment times.",
                    "Administrative calendar for viewing and organizing medical appointments."
                ],

                github: "https://github.com/alexisrr11/MVP-Medi-Turnos",
                demo: "https://mvp-medi-turnos.vercel.app"
            }
        }
    },
    pt: {
        "title": "Portfólio - Desenvolvedor Full-Stack",

        "nav.about": "Sobre mim",
        "nav.skills": "Habilidades",
        "nav.projects": "Projetos",
        "nav.education": "Formação",
        "nav.contact": "Contato",

        "hero.title": "Olá, sou Alexis Rodriguez",
        "hero.subtitle": "Desenvolvedor Full-Stack com leve orientação para Front-End",

        "hero.descripcion.uno": "Sou apaixonado por construir aplicações completas, tanto na parte técnica quanto na compreensão do modelo de negócio por trás de cada projeto. Crio interfaces modernas e gosto especialmente de projetar experiências centradas no usuário, além de também saber desenvolver endpoints e arquiteturas MVC sólidas, aplicando programação orientada a objetos em Node.js.",

        "hero.more": "Ler mais",
        "hero.less": "Ler menos",

        "hero.descripcion.dos": "Um dos meus maiores aprendizados foi o desenvolvimento de um sistema de gestão de consultas médicas. Ao longo do projeto, fortalecei minha capacidade de organizar a arquitetura de uma aplicação completa, manter uma estrutura clara de arquivos e separar o frontend e o backend em camadas com responsabilidades bem definidas. No backend, aprendi a distribuir a lógica entre rotas, controladores, serviços, tratamento de erros, repositórios, tipagens, padrões de projeto e acesso a dados, evitando concentrar responsabilidades demais em um único arquivo. Também aprofundei meus conhecimentos em Node.js, Express, TypeScript e Prisma ORM. No frontend, aprimorei a organização de aplicações com React, TypeScript e Tailwind CSS, separando componentes, hooks, tipos, constantes, estilos e funções auxiliares. Também trabalhei com a divisão entre layouts, páginas, componentes reutilizáveis e a centralização das chamadas ao backend por meio de serviços ou clientes HTTP. O projeto também me permitiu adquirir experiência trabalhando com aplicações implantadas em produção. Aprendi a preparar corretamente os ambientes antes da implantação, remover logs ou métodos de depuração esquecidos no código, revisar registros de implantação e do GitHub para evitar possíveis vulnerabilidades de segurança, gerenciar variáveis de ambiente e proteger arquivos sensíveis. Além disso, preparei ambientes locais e de teste utilizando Prisma com SQLite, mantendo uma estrutura que facilitasse posteriormente a transição para PostgreSQL. Essa experiência me ensinou a planejar arquiteturas, gerenciar diferentes ambientes, antecipar problemas de segurança e compreender como um sistema se comporta desde o desenvolvimento local até seu funcionamento em produção.",

        "hero.data": "Meus dados",
        "hero.download": "Baixar CV",

        "skills.my": "Minhas habilidades",
        "skills.learning": "Em aprendizado",

        "projects.featured": "Projetos em destaque",
        "projects.details": "Ver detalhes",

        "contacts.title": "Contato",
        "contacts.copy": "E-mail copiado para a área de transferência!",

        "footer.rights": "Todos os direitos reservados",

        "modal.datas": "Dados pessoais",
        "modal.location": "Localização:",
        "modal.preparation": "Tempo de preparação:",
        "modal.current.job": "Trabalho atual:",
        "modal.preparation.age": "3 anos",
        "modal.languages": "Idiomas:",
        "modal.spanish": "Espanhol: Língua nativa",
        "modal.english": "Inglês: B1",
        "modal.portuguese": "Português: A2",
        "modal.age": "Idade:",
        "modal.my.age": "31 anos",

        "modal.goals": "Objetivos",

        "modal.goals.description": "Meu objetivo é continuar me desenvolvendo como builder focado em arquitetura de software, criando aplicações completas, organizadas e preparadas para crescer. Busco aprofundar meus conhecimentos em Next.js por meio de uma arquitetura monorepo que me permita trabalhar com frontend e backend dentro de um único ambiente, compartilhar tipos, validações e lógica reutilizável, reduzir duplicações e simplificar a manutenção de cada projeto. Também quero incorporar Docker para criar ambientes de desenvolvimento e teste consistentes, reproduzíveis e próximos da produção. Embora atualmente eu trabalhe de forma individual e não precise coordenar diferentes configurações entre vários desenvolvedores, considero que o Docker pode me ajudar a automatizar dependências, reduzir erros de configuração e alcançar implantações mais limpas, seguras e previsíveis. Minha meta é consolidar um stack baseado em TypeScript, Next.js, Prisma, PostgreSQL e Docker, aplicando uma correta separação de responsabilidades, boas práticas de segurança e uma arquitetura clara.",

        "modal.description": "Descrição",
        "modal.technologies": "Tecnologias",
        "modal.repo": "Repositório",
        "modal.demo": "Ver demonstração",

        "education.title": "Formação e aprendizagem",

        "education.description": "Minha formação combina cursos especializados, aprendizagem autodidata e experiência prática no desenvolvimento e implantação de projetos completos.",

        "education.course.label": "Curso concluído",
        "education.course.title": "React — Talento Tech",
        "education.course.institution": "Instituição:",
        "education.course.institutionName": "Ministério da Educação da Cidade de Buenos Aires",

        "education.course.description": "Formação prática orientada ao desenvolvimento de uma aplicação completa com React, desde sua criação até a implantação.",

        "education.course.item1": "Criação de aplicações React do zero utilizando Vite.",
        "education.course.item2": "Gerenciamento de estado utilizando useState e Context API.",
        "education.course.item3": "Desenvolvimento de rotas dinâmicas e protegidas para uma navegação segura e fluida.",
        "education.course.item4": "Construção de formulários com validações e autenticação de usuários.",
        "education.course.item5": "Desenvolvimento de um CRUD para gerenciar produtos em um projeto de e-commerce.",
        "education.course.item6": "Estilização de aplicações com Bootstrap e styled-components.",
        "education.course.item7": "Integração do Firebase e Firestore para armazenamento de dados.",
        "education.course.item8": "Implantação da aplicação final em uma plataforma de hospedagem.",

        "education.selfTaught.label": "Formação autodidata",
        "education.selfTaught.title": "Desenvolvimento Web Full Stack",

        "education.selfTaught.description": "Aprendizagem contínua por meio de documentação, prática e desenvolvimento de projetos reais, abrangendo frontend, backend, bancos de dados, arquitetura e implantação.",

        "education.selfTaught.developmentTitle": "Desenvolvimento e arquitetura",
        "education.selfTaught.databaseTitle": "Bancos de dados",
        "education.selfTaught.deploymentTitle": "Implantação e produção",

        "education.selfTaught.item1": "Desenvolvimento de aplicações com JavaScript, TypeScript, React, Node.js e Express.",
        "education.selfTaught.item2": "Construção de APIs, endpoints, autenticação e arquiteturas backend baseadas na separação de responsabilidades.",
        "education.selfTaught.item3": "Uso do Prisma ORM, Git e fluxos de trabalho orientados à manutenção de projetos.",
        "education.selfTaught.item4": "Trabalho com PostgreSQL em aplicações implantadas e ambientes de produção.",
        "education.selfTaught.item5": "Uso do SQLite como banco de dados para desenvolvimento local, protótipos e ambientes de teste.",
        "education.selfTaught.item6": "Configuração e implantação de bancos de dados PostgreSQL gerenciados com Neon.",
        "education.selfTaught.item7": "Experiência na implantação de aplicações frontend com Vercel.",
        "education.selfTaught.item8": "Implantação de APIs e serviços backend com Render.",
        "education.selfTaught.item9": "Configuração de variáveis de ambiente, migrações e conexões entre frontend, backend e banco de dados.",

        "education.readMore": "Ler mais",
        "education.readLess": "Ler menos",
        "education.diploma.loading": "Carregando certificado...",
        "education.diploma.error": "Não foi possível carregar a imagem do certificado.",

        projects: {
            abogados: {
                title: "Aplicação para escritórios de advocacia",
                description: "Aplicação web voltada para a gestão de escritórios de advocacia.",

                imagesDesc: [
                    "Sistema projetado para centralizar a gestão de clientes, processos, tarefas, prazos e documentos de um escritório de advocacia. A aplicação busca simplificar o trabalho diário por meio de formulários claros, informações organizadas e acesso rápido aos dados mais importantes.",
                    "Tela para administrar processos, clientes e informações relacionadas a cada caso."
                ],

                github: "https://github.com/alexisrr11/Muestra-para-estudios-juridicos",
                demo: "https://muestra-para-estudios-juridicos.vercel.app/"
            },

            agenda: {
                title: "Agenda de contatos",
                description: "Aplicação web para registrar, organizar e gerenciar contatos.",

                imagesDesc: [
                    "Aplicação de gestão de contatos que permite registrar empresas ou pessoas, armazenar números de telefone, definir estados e programar datas de acompanhamento. O sistema facilita a organização dos contatos e centraliza as informações necessárias para futuras comunicações.",
                    "Formulário para registrar e editar as informações dos contatos.",
                    "Tela de gestão com informações, estados e datas de acompanhamento."
                ],

                github: "https://github.com/alexisrr11/AppMiAgenda",
                demo: "https://app-mi-agenda.vercel.app/"
            },

            turnos: {
                title: "Aplicação de consultas médicas",
                description: "Sistema Full Stack para gerenciar médicos, pacientes e consultas.",

                imagesDesc: [
                    "Sistema de gestão de consultas médicas desenvolvido para administrar pacientes, profissionais, horários e reservas. Inclui um painel administrativo para organizar a disponibilidade dos médicos e um portal para que os pacientes consultem horários disponíveis e solicitem consultas.",
                    "Tela do sistema para a gestão de pacientes e consultas.",
                    "Interface utilizada pelos pacientes para selecionar profissionais, datas e horários disponíveis.",
                    "Calendário administrativo para consultar e organizar as consultas médicas."
                ],

                github: "https://github.com/alexisrr11/MVP-Medi-Turnos",
                demo: "https://mvp-medi-turnos.vercel.app"
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
