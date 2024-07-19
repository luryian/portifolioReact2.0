import { GithubLogo, LinkedinLogo} from "@phosphor-icons/react"
import  "./rodape.css" 

export function Rodape() {
return (
    <>
    <div className="final">
        <h3>Para mais informaçõesc aesse meu Github e Linkedin:</h3>
            <div className="logosR">
            <a href="https://github.com/luryian" ><GithubLogo size={64} className="logoR"/></a>
            <a href="https://www.linkedin.com/in/lucas-ryan-fernandes-de-melo-a94076191/" ><LinkedinLogo size={64} className="logoR"/></a>
            </div>
    </div>
    </>
)
}