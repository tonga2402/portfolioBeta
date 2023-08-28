import { Link } from "react-router-dom"
import styles from '../styles/navbar.module.css'
import { IoHomeOutline,IoCodeSlash, IoAccessibilityOutline ,IoBuildOutline,IoLibraryOutline,IoNavigateOutline,IoChevronDown} from 'react-icons/io5'
import { useState } from "react"
import { IoLogoBuffer } from "react-icons/io";
import { Tooltip} from 'react-tooltip'
import { motion } from "framer-motion"

function NavBar() {

    const [ menuButon , setMenuButon ] = useState(true);

    const changeIcon = () => {
       setMenuButon(!menuButon)
    }


    

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: "0.3", type: "spring", stiffness: 200 }}
      className={styles.divNavbar}
    >
      <div className={menuButon ? styles.close : styles.open}>
        <Link
          to="/"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Home"
          data-tooltip-place="right"
          className={styles.navIcon}
          onClick={changeIcon}
        >
          <IoHomeOutline className={styles.icon} />
        </Link>
        <Link
          to="contact"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Contact"
          data-tooltip-place="right"
          className={styles.navIcon}
          onClick={changeIcon}
        >
          <IoNavigateOutline className={styles.icon} />
        </Link>
        <Link
          to="work"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Work"
          data-tooltip-place="right"
          className={styles.navIcon}
          onClick={changeIcon}
        >
          <IoCodeSlash className={styles.icon} />
        </Link>
        <Link
          to="skills"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Skills"
          data-tooltip-place="right"
          className={styles.navIcon}
          onClick={changeIcon}
        >
          <IoLibraryOutline className={styles.icon} />
        </Link>
        <Link
          to="about"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="About Me"
          data-tooltip-place="right"
          className={styles.navIcon}
          onClick={changeIcon}
        >
          <IoAccessibilityOutline className={styles.icon} />
        </Link>
      </div>

      <a onClick={changeIcon} className={styles.navIcon}>
        {menuButon ? (
          <IoLogoBuffer className={styles.icon} />
        ) : (
          <IoChevronDown className={styles.icon} />
        )}
      </a>
      <Tooltip
        id="my-tooltip"
        style={{ backgroundColor: "#1ADBBB", color: "#222" }}
      />
    </motion.div>
  );
}

export default NavBar
