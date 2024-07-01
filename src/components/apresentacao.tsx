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
            <img src="https://file.notion.so/f/f/bc784506-abc4-447b-a019-de88577513f2/662da60d-aa3f-4f6d-8614-edb7df6ab63a/Untitled.png?id=6ab2cd17-fbd3-42f7-8b23-25f7fcacd9e2&table=block&spaceId=bc784506-abc4-447b-a019-de88577513f2&expirationTimestamp=1719964800000&signature=Q40R65P3uDuHri8zIJKvoyrefX-ZP3u_kmhqsGCr-sg&downloadName=Untitled.png"></img>
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