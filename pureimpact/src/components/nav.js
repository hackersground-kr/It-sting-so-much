import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from '../css/nav.module.css'




const Nav = ()  => {
  const [login,setLogin] = useState(false);
  if(login){
    window.addEventListener("click",(e)=>{
      if(e.target.id === "closeLoginBtn"){
        setLogin(false);
      }
    })
  }
  return (
    <div>
      <nav className={styles.nav}>
        <div>
          <label className={styles.logo}>PureImpact</label>
        </div>
        <div className={styles.navright}>
          <Link className={styles.navtitle} to="/">home</Link>
          <Link className={styles.navtitle} to="/login">sign in</Link>
          <Link className={styles.navtitle} to="/register" id='closeLoginBtn'>sign up</Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;