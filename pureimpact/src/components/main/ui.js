import styles from './cssMain/ui.module.css'

const UI = ()  => {
  return (
    <div>
      <div className={styles.ui}>-이용 절차-</div>
        <div className={styles.boxContainer}>
            <div className={styles.bcon}>
              <div className={styles.bbcon}>
                <div className={styles.box1}>
                    <div className={styles.box}>
                      <div className={styles.number}>01</div>
                      <div className={styles.img1}></div>
                    </div>
                    <div className={styles.text}>봉사할 곳을 찾으세요.</div> 
                </div>
                <div className={styles.box2}>
                    <div className={styles.box}>
                      <div className={styles.number}>02</div>
                      <div className={styles.img2}></div>
                    </div>
                    <div className={styles.text}>게시자에게 신청하세요.</div>
                </div>
                <div className={styles.box3}>
                    <div className={styles.box}>
                      <div className={styles.number}>03</div>
                      <div className={styles.img3}></div>
                    </div>
                    <div className={styles.text}>시간에 맞춰 찾아가세요.</div>
                </div>   
              </div>
            </div>
            <div className={styles.backC}></div>
        </div>
    </div>
  );
}

export default UI;
