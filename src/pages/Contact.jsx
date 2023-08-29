import { useRef} from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'
import styles from '../styles/contact.module.css'
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    form.current.reset();

    emailjs.sendForm('service_qb9kb0e', 'template_gf7b3r9', form.current, 'XHv2Rsj86bwRrO9-k')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  };
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
           className={styles.h3}>Contact</motion.h3>
        </div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 ,type:"spring", stiffness:200}}
          className={styles.lineGradient}
        ></motion.div>
        
          <form className={styles.divForm} ref={form} >
          <motion.input 
           initial={{ y: 10, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.5 }}
          type='text' placeholder='Full name' name='user_name' />
          <motion.input 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          type='email' placeholder='Email address' name='user_email'/>
          <motion.textarea 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          rows={15} cols={17} placeholder='Type your message here...' name='message'/>
          </form>
          <motion.button 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          type='submit' onClick={sendEmail}>Send message</motion.button>
          <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          >
            <a className={styles.iconSocial} href=""><IoLogoGithub/></a>
            <a className={styles.iconSocial} href=""><IoLogoLinkedin/></a>
          </motion.div>
      </div>
     
    </>
  )
}
export default Contact