import React, { useEffect, useRef, useState } from 'react';
import styles from './cssMain/main.module.css';

const Mains = () => {
  const [showText, setShowText] = useState(false);
  const mainTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const mainTextPosition = mainTextRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (mainTextPosition < windowHeight * 0.75) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={styles.mainImg}>
        <div className={`${styles.mainText} ${showText ? styles.show : ''}`} ref={mainTextRef}>
          <strong>소수의 열정으로도 더 나은 <br />사회를 만들 수 있습니다.</strong>
        </div>
        <div className={`${styles.mainText1} ${showText ? styles.show : ''}`} ref={mainTextRef}>
          우리는 지역의 쓰레기 문제를 해결하기 위해 <br />소수의 사람들이 모여 청소하는 프로젝트를 기획하고 있습니다.
        </div>
        <button className={`${styles.btn} ${showText ? styles.show : ''}`} ref={mainTextRef}>
          시작하기
        </button>
        <div className={`${styles.flower} ${showText ? styles.show : ''}`} ref={mainTextRef}></div>
      </div>
      <div className={styles.MainColor}></div>
    </div>
  );
};

export default Mains;