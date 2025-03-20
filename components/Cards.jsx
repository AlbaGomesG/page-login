import styles from "../styles/Cards.module.css";
import Image from "next/image";

export default function Card({ image, title, text}) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Image className={styles.img} src={image} alt=""/>
                <div className={styles.text}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.textContent}>{text}</p>
                </div>
            </div>
        </div>
    );
}