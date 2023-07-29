import { useEffect, useState } from "react"


const Formulario = (props) => {
    


    let [notaA, setNotaA] = useState(0)
    let [notaB, setNotaB] = useState(0)
    let [notaC, setNotaC] = useState(0)
    let [nome, setNome] = useState('')

    useEffect(() => {
        console.log('o componente iniciou')

        return () => {
            console.log('o componente foi desmontado')
        }
    }, [])

    const AlteraNome = (evento) => {
        setNome(evento.target.value)
    }

    const media = () => {
        const soma = notaA + notaB + notaC
        const resultado = soma / 3

        

        if(resultado <= 7) {
            return (
                <h1>{nome} VOCE FOI REPROVADO</h1>
            )
        } else {
            return (
                <h2>{nome} VOCE FOI APROVADO</h2>
            )
        }
    
    }




    return (
        <div>
            <form>
            <input type="text" placeholder="nome" onChange={AlteraNome} />
            <input type="number" placeholder="Primeira Nota" onChange={evento => setNotaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Segunda Nota" onChange={evento => setNotaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Terceira Nota" onChange={evento => setNotaC(parseInt(evento.target.value))} />
            {media()}
        </form>
        <p>Sua primeira nota foi {notaA}</p>
        <p>Sua Segunda nota foi {notaB}</p>
        <p>Sua Terceira nota foi {notaC}</p>
        
        </div>
    )
}

export default Formulario