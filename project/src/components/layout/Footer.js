import {FaGithub, FaLinkedin} from 'react-icons/fa';

import styles from './Footer.module.css';

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaGithub /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p className={styles.copy_rigth}><span>Costs</span> &copy; 2023</p>
        </footer>
    )
}

export default Footer; 