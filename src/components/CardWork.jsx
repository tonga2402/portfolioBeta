import styles from '../styles/cardWork.module.css'
import img1 from '../img/trabajo1.png'
import img2 from '../img/trabajo2.png'
import img3 from '../img/trabajo3.png'
import img4 from '../img/trabajo4.png'
import img5 from '../img/trabajo5.png'
import { motion } from 'framer-motion'
function CardWork() {
  
const carData = [
  {
      img:img3,
      href:'https://pf-gaston-balmaceda.netlify.app/',
      delay:0.5
  },
  {
      img:img5,
      href:'https://github.com/tonga2402/ProtoAppTattooFigma',
      delay:0.6
  },
  {
      img:img4,
      href:'https://be-ta-login.netlify.app/',
      delay:0.7
  },
  {
      img:img1,
      href:'https://statuesque-boba-f2204f.netlify.app/',
      delay:0.8
  },
  {
      img:img2,
      href:'https://melodious-dragon-ac2edf.netlify.app/',
      delay:0.9
  },

]
  return (
    <div className={styles.containDivCard}>
        {carData.map((data, index) => {
          return (
            <motion.div 
            initial={{ y: 10, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay:(data.delay)}}
            className={styles.containCard} key={index}>
              <div>
                <div className={styles.imgWork}>
                  <img src={data.img} alt={""} />
                </div>
                <div className={styles.contenedor}></div>
                <div className={styles.lineGradient}></div>
                <a className={styles.a} href={data.href} target='_blank' rel='noreferrer'>Go!</a>
              </div>
            </motion.div>
          );
        })}
    </div>
  );
}

export default CardWork
