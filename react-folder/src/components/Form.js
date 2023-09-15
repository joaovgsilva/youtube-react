function Form(){

    function cadastrarUsuario(e){
        e.preventDefault(); // = para o comportamente padrão do HTML e faz a impressão da linha de código a baixo
        alert('Usuário cadastrado!');
    }

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form; 