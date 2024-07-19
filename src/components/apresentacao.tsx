import "./apresentacao.css"
import { GithubLogo, EnvelopeSimple, LinkedinLogo, Phone} from "@phosphor-icons/react"
import "../assets/foto.png"

export function Apresentacao(){
    return(
    <>
    <div className="body">
        <div className="divApresentar">
            <h2>Olá, eu sou</h2>
            <h1>Lucas Ryan</h1>
            <h3>deselvedor web junior</h3>
        </div>

        <div className="divImagem">
            <img src="https://github.com/luryian/portifolioReact2.0/blob/main/src/assets/foto.png?raw=true"/>
        </div>
    </div>

    <div className="rodape">
        <div className="logos">
            <a href="https://github.com/luryian" ><GithubLogo size={64} className="logo"/></a>
            <a href="https://www.linkedin.com/in/lucas-ryan-fernandes-de-melo-a94076191/" ><LinkedinLogo size={64} className="logo"/></a>
        </div>

        <div className="cont">
            <p className="contatos"> <EnvelopeSimple size={20} /> lucas.ryan.fernandesmelo@gmail.com</p>
            <p className="contatos"> <Phone size={20} className="icone" /> (88) 988339968</p>
        </div>
    </div>
    </>
    )
}