import styles from './Container.module.css';

function Container(props){
    return <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div> // props.children = exibe os conteúdos dos componentes "filho" ( = componentes abaixo do componente "Container")
}

export default Container