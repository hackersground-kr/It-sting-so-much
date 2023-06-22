import styles from './cssMain/idt.module.css'

const Idt = ()  => {
  return (
    <div>
        <div className={styles.idtContainer}>
            <button className={styles.btn}>시작하기</button>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <div className={styles.img}></div>
                    <div className={styles.text1}>웹사이트나 앱을 통해 등록하기</div>
                    <div className={styles.text2}>이를 통해 인원 모집과 관리를 효율적으로 할 수 있습니다.</div>
                </div>
                <div className={styles.imgContainer}>
                <div className={styles.img}></div>
                    <div className={styles.text1}>참여자들이 청소를 완료한 후 <br></br>인증 사진이나 증명 자료를 제출하기</div>
                    <div className={styles.text2}>프로젝트 웹사이트나 소셜 미디어를 통해 결과를 공유할 수 있습니다.</div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                <div className={styles.img}></div>
                    <div className={styles.text1}> 참여자들끼리 소통하고 의견을 나눌 수 있는 <br></br>커뮤니티 기능 제공</div>
                    <div className={styles.text2}> 추가 포럼, 댓글 기능, 실시간 채팅 등을 활용하여<br></br> 참여자들끼리 소통하고 협력할 수 있는 플랫폼을 제공합니다.</div>
                </div>
                <div className={styles.imgContainer}>
                <div className={styles.img}></div>
                    <div className={styles.text1}>성과 및 통계 보고하기</div>
                    <div className={styles.text2}>프로젝트의 성과와 통계 정보를 시각화하여 제공합니다.</div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Idt;
