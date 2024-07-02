import { DiHtml5, DiCss3, DiJavascript, DiGitBranch, DiReact, DiPython, } from "react-icons/di"
import { FigmaLogo} from "@phosphor-icons/react"
import { SiTypescript } from "react-icons/si"
import "./tecnologias.css"

export function Tecnologias(){
    return(
        <>

        <h2 id="tech" className="techTitulo">Tech Skills</h2>
        
        <ul className="tecList">
            <li className="tec" > <DiHtml5 size={36} className="icones"/> Html</li>
            <li className="tec" > <DiCss3 size={36} className="icones"/> Css </li>
            <li className="tec" > <DiJavascript size={36} className="icones"/> Javascrip</li>
            <li className="tec" > <SiTypescript size={32} className="icones"/> Typescript</li>
            <li className="tec" > <DiReact size={38} className="icones"/> React </li>
            <li className="tec" > <DiPython size={56} className="icones"/> Python básico </li>
            <li id="git" className="tec" > <DiGitBranch size={36} className="icones"/> Git e Github </li>
            <li id="figma" className="tec" > <FigmaLogo size={46} className="icones"/> Familiariedade com Figma</li>
        </ul>
        </>
    )
}