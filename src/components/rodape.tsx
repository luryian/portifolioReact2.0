import { GithubLogo, LinkedinLogo} from "@phosphor-icons/react"
import  "./rodape.css" 

export function Rodape() {
return (
    <>
    <div className="final">
        <h3>Para mais informaçõesc aesse meu Github e Linkedin:</h3>
            <div className="logosR">
                <GithubLogo size={64} className="logoR"/>
                <LinkedinLogo size={64} className="logoR"/>
            </div>
    </div>
    </>
)
}