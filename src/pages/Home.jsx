import styles from'../styles/home.module.css'
import { motion } from 'framer-motion'
import { useEffect , useState } from 'react';



function Home() {

  const [intro , setIntro] = useState("welcome to my portfolio")

  useEffect(()=>{ 
    setTimeout (() =>{
      setIntro(
        ""
      )
    },6000); 
  },[])

  return (
    
    <div>
      <div className={styles.containDiv}>
        <div className={styles.containText}>
          <motion.h4
            initial={{ x: -90, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 ,type:"spring", stiffness:100}}
            className={styles.homeH4}
          >
            Gastón
          </motion.h4>

          <motion.h3
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 ,type:"spring", stiffness:100}}
            className={styles.homeH4}
          >
            Balmaceda
          </motion.h3>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Frontend
          </motion.h2>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Developer
          </motion.h1>
          
         <motion.h6
            initial={{ x: -40, opacity: 1 }}
            animate={{ x: 10, opacity: 0 }}
            transition={{ duration:6 }}
            className={styles.introH6}>{intro}</motion.h6>     
        </div>
      </div>
    </div>
  );
}

export default Home