import {  darmoha, ortho, sdis, wildcode, armee } from "../assets/images";
import {
    car,
    contact,
    css,
    
    express,
    git,
    github,
    html,
    javascript,
    linkedin,

    
    nodejs,
    pricewise,
    react,
  
    sass,
    snapgram,
  
    tailwindcss,
    threads,
    
    mysql,
    three,
    figma
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {  
        
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
   
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
   
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: three,
        name: "Three.js",
        type: "Frontend"},

{
        imageUrl: figma,
        name: "Figma",
        type: "Design",},


   
];

export const experiences = [
    {
        title: "Instrumentiste de Bloc opératoire", 
        company_name: "ES santé lausanne",
        icon: ortho,
        iconBg: "#accbe1",
        date: "Aout 2018 - Mai 2021",
        points: [
            "Pendant cette période, j'ai eu l'opportunité de travailler en étroite collaboration avec les chirurgiens pour assurer le bon déroulement des opérations. Mes responsabilités incluaient l'assistance pendant les interventions chirurgicales, la gestion rigoureuse de la stérilité du champ opératoire, et la traçabilité des dossiers patients. J'étais également responsable de la gestion et de l'entretien des dispositifs médicaux, garantissant ainsi leur disponibilité et leur bon fonctionnement lors des interventions."
        ],
    },
    {
        title: "Sapeur-pompier volontaire", 
        company_name: "SDIS Nyon-Dole",
        icon: sdis,
        iconBg: "#accbe1",
        date: "janvier 2016 - Mai 2023",
        points: [
            "Durant mon engagement en tant que sapeur-pompier volontaire, j'ai acquis une expertise particulière dans la gestion des accidents de la route. Mon rôle impliquait l'entretien régulier du matériel de sécurité, la conduite de sessions de prévention et de formation sur la sécurité pour le grand public et les professionnels, ainsi que la communication et la coordination avec les autorités locales et autres services d'urgence pour assurer une intervention efficace et rapide."
        ],
    },
    {
        title: "Sergent instruteur FIM92-Stinger", 
        company_name: "Armée suisse",
        icon: armee,
        iconBg: "#accbe1",
        date: "juillet 2016 - décembre 2023",
        points: [
            "En tant que sergent instructeur pour le système FIM92-Stinger, j'étais chargé de diriger un groupe d’intervention anti-aériennes composé de 10 soldats. J'ai supervisé l’instruction et la formation au niveau de la section, touchant environ 40 soldats. Mon rôle nécessitait une communication efficace entre les troupes et les cadres supérieurs pour assurer une coordination optimale des missions et des opérations d'entraînement."
        ],
    },
    {
        title: "Orthoprothesiste",
        company_name: "Ortho-reha Wallner",
        icon: ortho,
        iconBg: "#fbc3bc",
        date: "Aout 2021 - Avril 2024",
        points: [
            "Lors de mon travail chez Ortho-reha Wallner, j'ai été impliqué dans la fabrication de prothèses et d'orthèses sur mesure, répondant aux besoins spécifiques de chaque patient. En outre, j'ai géré la vente de dispositifs médicaux et entretenu une communication étroite avec les personnes en situation de handicap pour comprendre et répondre à leurs besoins, contribuant ainsi à améliorer leur qualité de vie au quotidien."
        ],
    },
    {
        title: "Direction",
        company_name: "Dar Moha Marrakech",
        icon: darmoha,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "En tant que directeur chez Dar Moha Marrakech, j'ai dirigé une équipe d'environ 110 employés dans le secteur de l'hôtellerie. Mes responsabilités incluaient la gestion des événements tels que des mariages, des cours de cuisine et des événements internationaux. J'ai également supervisé l'ouverture d'une maison d’hôtes et d'un restaurant gastronomique à Tanger, et mis en place des logiciels de gestion de stock, financier et de réservations pour optimiser les opérations de l'établissement."
        ],
    },
    {
        title: "Bootcamp developeur web fullstack",
        company_name: "Wild Code School",
        icon: wildcode,
        iconBg: "#a2d2ff",
        date: "Fevrier 2024 - Juillet 2024",
        points: [
           "Au cours du bootcamp de développeur web fullstack à la Wild Code School, j'ai acquis des compétences approfondies en développement web en utilisant des technologies modernes telles que React.js. Ce programme intensif m'a permis de maîtriser les bases du développement fullstack, incluant la création de conceptions réactives et l'assurance de la compatibilité entre les navigateurs, ainsi que la participation à des hackathons pour mettre en pratique et améliorer mes compétences en développement."
        ],
    },
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Leofedal',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/leonard-fedal-70450b128/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Mon Portfolio',
        description: "Création d'un portfolio de développement web qui présente des projets variés, incluant des applications interactives, des sites responsives et des outils innovants, démontrant mes compétences en HTML, CSS, JavaScript, et autres technologies web.",
        link: 'https://github.com/Leofedal/Portfolio',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Open souls',
        description: "Développement d'un jeu au tour par tour en React, utilisant des appels API et inspiré de l'univers de Dark Souls. Le projet met en avant le choix du joueur, des mécaniques de combat stratégiques et l'intégration de données dynamiques provenant d'API pour enrichir l'expérience de jeu.",
        link: 'https://github.com/WildCodeSchool-2024-02/js-toulouse-p2-open_souls',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Escape Toolouse',
        description: "Développement d'une single page application en HTML, CSS et JavaScript : un jeu d'escape game sur le thème de la ville de Toulouse. Le projet met en avant la résolution d'énigmes, la découverte des lieux emblématiques de la ville et l'interaction utilisateur pour offrir une expérience immersive et engageante.3",
        link: 'https://github.com/ileanaspl/escape-touloose',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Talentia',
        description: "Développement d'une plateforme de recherche d'emploi pour les personnes en situation de handicap dans le cadre d'un hackathon de 48 heures. Le projet se concentre sur l'accessibilité, la facilité d'utilisation et la mise en relation des candidats avec des employeurs inclusifs, visant à promouvoir l'inclusion et l'égalité des chances sur le marché du travail.",
        link: 'https://github.com/elhayanich/Hackaton-WCS-Groupe-HackaTonMayonnaise-InclutTalent',
    },
   
];