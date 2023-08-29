import styles from '../styles/about.module.css'
import { motion } from 'framer-motion'
import PDF from '../download/CVGastonBalmaceda.pdf'


function About() {
  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: "2" }}
        className={styles.backgroundGrey}
      ></motion.div>
      <div className={styles.containText}>
        <div className={styles.aboutMe}>
          <motion.h3 
           initial={{ y: -20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay:0.2}}
           className={styles.h3}>About</motion.h3>
          <motion.h3 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay:0.3}}
          className={styles.h3}>Me</motion.h3>
        </div>
        <motion.div
          initial={{ x: -90, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay:0.5 , type:"spring", stiffness:200}}
          className={styles.lineGradient}
        ></motion.div>
        <motion.p
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay:0.7}}
        >
          I'm a web designer and frontend developer focused on creating clean
          and easy-to-use experiences. I am passionate about creating software
          that improves the lives of those around me. Join projects in order to
          consolidate myself in the field of development by contributing my
          knowledge, skills and values.
        </motion.p>
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay:0.8}}
          className={styles.button}
          href={PDF} download={PDF}
        >
          download CV
        </motion.a>
      </div>
    </>
  );
}

export default About;
