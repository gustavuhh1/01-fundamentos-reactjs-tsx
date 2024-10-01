import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://i.pinimg.com/originals/05/41/5c/05415c1e9a04dfc9a8569343616948ba.gif"
                alt=""
            />

            <div className={styles.profile}>
                <Avatar hasBorder src="https://github.com/gustavuhh1.png" />
                <strong>Gustavo Martins</strong>
                <span>Ti Working</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
