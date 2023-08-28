import styles from '../styles/cardSkill.module.css'

function CardSkills({icon, porcent}) {

 
  return (
    <div>
      <div className={styles.containCard}>
        <div className={styles.iconcard}>{icon}</div>
        <h5>{porcent}%</h5>
        <div className={styles.contenedor}>
          <div className={styles.lineGradient2}></div>
          <div
            className={styles.lineGradient}
            style={{
              width: `${porcent}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default CardSkills
