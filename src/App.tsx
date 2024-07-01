import './App.css'
import { Navbar } from "./components/navbar.tsx"
import { Apresentacao } from "./components/apresentacao.tsx"
import { Tecnologias } from "./components/tecnologias.tsx"
import { TextoSobre } from "./components/textoSobre.tsx"
import { Experiencias } from "./components/experiencias.tsx"
import { Rodape } from "./components/rodape.tsx"

function App() {

  return (
    <>
      <Navbar/>
      <Apresentacao/>
      <Tecnologias/>
      <TextoSobre/>
      <Experiencias/>
      <Rodape/>
    </>
  )
}

export default App
