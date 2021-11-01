import { FaEnvelope, FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { Container } from "./styles";

export function Footer() {

    const linkedin = () => {
        window.open("https://www.linkedin.com/in/wilhelm-henrique-zimmermann-7053051b1/");
    }

    const github = () => {
        window.open("https://www.github.com/Wilhelm-Zimmermann");
    }

    const mail = () => {
        window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new");
    }

    return (
        <Container>
            <div className="author">
                <h2> Site desenvolvido por </h2>
                <h5>wilhelmzimmermann8@gmail.com</h5>
            </div>
            <div className="social">
                <FaLinkedin className="linkedin" onClick={linkedin} />
                <FaGithubAlt onClick={github}/>
                <FaEnvelope onClick={mail} className="mail"/>
            </div>
        </Container>
    )
}