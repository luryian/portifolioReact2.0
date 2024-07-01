import "./apresentacao.css"
import { GithubLogo, EnvelopeSimple, LinkedinLogo, Phone} from "@phosphor-icons/react"

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
            <img src="../assets/foto.png" />
        </div>
    </div>

    <div className="rodape">
        <div className="logos">
            <GithubLogo size={64} className="logo"/>
            <LinkedinLogo size={64} className="logo"/>
        </div>

        <div className="cont">
            <p className="contatos"> <EnvelopeSimple size={20} /> lucas.ryan.fernandesmelo@gmail.com</p>
            <p className="contatos"> <Phone size={20} className="icone" /> (88) 988339968</p>
        </div>
    </div>
    </>
    )
}