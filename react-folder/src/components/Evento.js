import Button from './event/Button'

function Evento(){

    function meuEvento(){
        alert('Opa, primeiro evento ativado!');
    }

    function segundoEvento(){
        alert('Opa, segundo evento ativado!');
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </div>
    )
}

export default Evento;