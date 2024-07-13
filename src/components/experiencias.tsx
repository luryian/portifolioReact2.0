import { Barricade, HardHat, TerminalWindow} from "@phosphor-icons/react"
import "./experiencias.css"

export function Experiencias (){
    return (
        <>
        <div className="divisor">

            <div id="exp" className="experiencias">
                <h3>Experiencias</h3>
                <div className="card">
                    <div className="borda">
                        <img id="ifce" src="https://files.passeidireto.com/d02ca57a-be06-46fe-8761-acba8bcf27fb/d02ca57a-be06-46fe-8761-acba8bcf27fb.png"></img>
                    </div>
                    <div className="textoE">
                        <h3>Projeto de Extensão</h3>
                        <h4>Fullstack <br></br>
                        Projeto: Centro de Inovação e difusão de tecnologia para o semiarido </h4>
                        <p>2021 - 2022</p>
                    </div>
                </div>
                <div className="card">
                <div className="borda">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Brasao4_vertical_cor_300dpi.png"></img>
                    </div>
                    <div className="textoE">
                        <h3>Iniciação Científica</h3>
                        <h4>Fullstack <br></br>
                        Projeto: Editor de Adventures Point and Click</h4>
                        <p>2024 - atual</p>
                    </div>
                </div>
            </div>

            <div className="projetos">
                <h3>Projetos</h3>
                    <div className="iconesC">
                    <Barricade size={80}/>
                    <TerminalWindow size={80}/>
                    <HardHat size={80}/>
                    <h4 className="costructText">Área em construção</h4>
                    </div>
            </div>

        </div>
        </>
    )
}