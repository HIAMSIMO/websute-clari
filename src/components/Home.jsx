import "./home.css";
import mockups from "../images/clari-mockups.png";

const Home = () => {
    return (
        <section className="home">
            <div className="home-content">
                <h1 className="home-title">ClariSante : Votre assistant médical numérique</h1>
                <p className="home-info">
                    Clarisanté simplifie la gestion de vos médicaments en scannant les codes-barres pour fournir les
                    instructions d'utilisation en texte et en voix. Avec des fonctionnalités supplémentaires telles que
                    la gestion des rappels de médicament et pleins d'autres, restez en contrôle de votre bien-être
                </p>
                <button className="request">Download Our App</button>
            </div>
            <div className="home-img">
                <img src={mockups} alt="Four Phone Pictures"/>
            </div>
        </section>
    );
};

export default Home;
