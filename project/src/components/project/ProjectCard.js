import {Link} from 'react-router-dom'
import styles from "./ProjectCard.module.css";

import {BsPencil, BsFillTrashFill} from 'react-icons/bs';

function ProjectCard({id, name, budget, category, handleRemove}){

    const remove = (e) => {
        e.preventDefault() // e.preventDefault = não permite nenhum outro evento ser executado 
        handleRemove(id)
    }

    return(
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category} {/* toLowerCase = retorna o valor da string original convertido para minúsculo, assim gerando um padrão */}
            </p>
            <div className={styles.project_card_actions}>
                <Link to={`/project/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCard;