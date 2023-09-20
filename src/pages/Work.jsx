import styles from '../styles/work.module.css'
import CardWork from '../components/CardWork';
import { motion } from 'framer-motion'
function Work() {

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
            transition={{ delay: 0.3 }}
            className={styles.wh3}
          >
            Work
          </motion.h3>
        </div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          className={styles.lineGradient}
        ></motion.div>
        <div>
          <CardWork />
        </div>
      </div>
    </>
  );
}

export default Work
