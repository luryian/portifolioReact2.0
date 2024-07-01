import './App.css'
import { Navbar } from "./components/navbar"
import { Apresentacao } from "./components/apresentacao"
import { Tecnologias } from "./components/tecnologias"
import { TextoSobre } from "./components/textoSobre"
import { Experiencias } from "./components/experiencias"
import { Rodape } from "./components/rodape"

function App() {

  return (
    <>
      <Navbar/>
      <Apresentacao/>
      <TextoSobre/>
      <Tecnologias/>
      <Experiencias/>
      <Rodape/>
    </>
  )
}

export default App
