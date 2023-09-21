function Saudacao({name}){

function gerarSaudacao(algumName){
    return `Olá, ${algumName}! Tudo bem?`
}

    return(
        <>
            {name && <p>{gerarSaudacao(name)}</p>}
        </>
    )
}

export default Saudacao;