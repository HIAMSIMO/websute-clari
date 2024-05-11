import "./advantages.css";

import API from "../images/icon-api.svg";
import Online from "../images/icon-online.svg";
import Budgetting from "../images/icon-budgeting.svg";
import Onboarding from "../images/icon-onboarding.svg";

const Advantages = () => (
    <section className="advantages">
        <div className="advantages-intro">
            <h2 className="advantages-title">Pourquoi Choisir ClariSante?</h2>
            <p className="advantages-info">
                ClariSante simplifie la gestion de vos médicaments en fournissant des instructions d'utilisation
                détaillées en texte et en voix, ainsi que d'autres fonctionnalités pratiques pour prendre soin de votre
                santé.
            </p>
        </div>
        <div className="advantages-container">
            {advantagesData.map((advantage) => (
                <div className="advantage" key={advantage.title}>
                    <img src={advantage.icon} alt={advantage.title}/>
                    <h3 className="advantage-title">{advantage.title}</h3>
                    <p className="advantages-info">{advantage.description}</p>
                </div>
            ))}
        </div>
    </section>
);

const advantagesData = [
    {
        title: "Facilité d'utilisation",
        icon: Online,
        description:
            "L'application offre une interface conviviale, permettant de scanner rapidement les codes-barres des médicaments pour accéder aux instructions d'utilisation.",
    },
    {
        title: "Instructions claires et précises",
        icon: Budgetting,
        description:
            "ClariSante fournit des informations détaillées sur les médicaments, y compris les posologies, les effets secondaires et les interactions médicamenteuses, en les présentant de manière claire et compréhensible.",
    },
    {
        title: "Rappels personnalisés",
        icon: API,
        description:
            "Vous pouvez configurer des rappels pour ne jamais oublier de prendre vos médicaments, en personnalisant les horaires et les fréquences selon vos besoins.",
    },
    {
        title: "Localisation des services de santé",
        icon: Onboarding,
        description:
            "Trouvez facilement des médecins dans votre ville, des pharmacies à proximité et des services d'urgence en cas de besoin, le tout à portée de main.",
    },
];

export default Advantages;
