import { useState } from "react";
import Repos from "./components/repos";
import Perfil from "./components/perfil/perfil";
import './global.css'

function App() {
  const [nomeUsuario, setnomeUsuario ] = useState('')

  function getName(e) {
    setnomeUsuario(e.target.value)
  }
 
  return (
    <>
    <input type="text" onBlur={getName}/>

    {nomeUsuario.length > 4 && (
      <>
      <Perfil NomeUsuario={nomeUsuario} />
      <Repos NomeUsuario={nomeUsuario} />
      </>
    )}
    
    </>
  );
}

export default App;
