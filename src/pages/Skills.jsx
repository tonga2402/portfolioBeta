import { motion } from 'framer-motion'
import styles from '../styles/skills.module.css'
import CardSkills from '../components/CardSkills';
import { IoLogoHtml5,IoLogoJavascript,IoLogoReact,IoLogoFigma,} from 'react-icons/io5'
import { DiCss3Full, DiPhotoshop } from "react-icons/di"; 

function Skills() {

  
  return (
    <div className={styles.containSkills}>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: "2" }}
        className={styles.backgroundGrey}
      ></motion.div>
      <div className={styles.containText}><div
          className={styles.aboutMe}>
          <motion.h3 
           initial={{ y: -20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay:0.7}}
          className={styles.sh3}>Skills</motion.h3>
        </div>
        <motion.div
          initial={{ x: -90, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay:0.5,type:"spring", stiffness:200}}
          className={styles.lineGradient}
        ></motion.div>
        <div className={styles.divCard}>
          <motion.div
           initial={{ y: 10, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay:0.5}}>
          <CardSkills icon={<IoLogoHtml5 />} porcent={90} />
          </motion.div>
          <motion.div
           initial={{ y: 10, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay:0.6}}>
          <CardSkills icon={<DiCss3Full />} porcent={80} />
          </motion.div>
          <motion.div
           initial={{ y: 10, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay:0.7}}>
          <CardSkills icon={<IoLogoJavascript />} porcent={75} />
          </motion.div>
          <motion.div
           initial={{ y: 10, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay:0.8}}>
          <CardSkills icon={<IoLogoReact />} porcent={75} />
          </motion.div>
          <motion.div
           initial={{ y: 10, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay:0.9}}>
          <CardSkills icon={<IoLogoFigma />} porcent={80} />
          </motion.div>
          <motion.div
           initial={{ y: 10, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay:1}}>
          <CardSkills icon={<DiPhotoshop />} porcent={75} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills
