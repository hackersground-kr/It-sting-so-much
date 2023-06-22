import styles from '../css/list.module.css'
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../css/input.css'
const List = () => {
	const [expanded, setExpanded] = useState(false);
	const [list, setList] = useState([]);
	const inputRef = useRef(null);


	const handleClick = () => {
		setExpanded(true);
	};

	const handleClickOutside = (event) => {
		if (inputRef.current && !inputRef.current.contains(event.target)) {
			setExpanded(false);
		}
	};

  useEffect(() => {
    axios 
      .get("api/list") 
      .then((res) => {
        setList(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 


	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div>
			<div className={styles.List_main}>
				<div className={styles.Title}>Pure Impact</div>
				<div className={styles.container}>
					<div className={styles.List_header}>
						<ul>
							<li>search</li>
							<li>review</li>
						</ul>
						<div className={styles.search_container}>
							<input
								ref={inputRef}
								className={`searchBar${expanded ? 'expanded' : ''}`}
								type="search"
								onClick={handleClick}
								placeholder="   Search"
							/>
							<button className={styles.post_btn}>POST</button>
						</div>

					</div>
					<div className={styles.ListContainer}>
					{
						list.map((list,idx)=>{
							return(
								<>

								</>
							)
						})
					}
						<div className={styles.List}>
							<div className={styles.title_img_container}>
								<div className={styles.title_img}>

								</div>
							</div>
							<div className={styles.List_title}>
								<div className={styles.title}>
									경북소프트웨어 고등학교 체육관 청소
								</div>
								<div className={styles.subtitle}>
									경북소프트웨어 고등학교 체육관 청소를 도와줄 수 있는
									학생을 찾습니다. 많은 관심 부탁드립니다.
								</div>
							</div>
							<div className={styles.user}>
								3/5
							</div>
							<div className={styles.usertemp}>
								0도
							</div>
						</div>
						<div className={styles.List}>
							<div className={styles.title_img_container}>
								<div className={styles.title_img}>

								</div>
							</div>
							<div className={styles.List_title}>
								<div className={styles.title}>
									경북소프트웨어 고등학교 체육관 청소
								</div>
								<div className={styles.subtitle}>
									경북소프트웨어 고등학교 체육관 청소를 도와줄 수 있는
									학생을 찾습니다. 많은 관심 부탁드립니다.
								</div>
							</div>
							<div className={styles.user}>
								3/5
							</div>
							<div className={styles.usertemp}>
								0도
							</div>
						</div>
						<div className={styles.List}>
							<div className={styles.title_img_container}>
								<div className={styles.title_img}>

								</div>
							</div>
							<div className={styles.List_title}>
								<div className={styles.title}>
									경북소프트웨어 고등학교 체육관 청소
								</div>
								<div className={styles.subtitle}>
									경북소프트웨어 고등학교 체육관 청소를 도와줄 수 있는
									학생을 찾습니다. 많은 관심 부탁드립니다.
								</div>
							</div>
							<div className={styles.user}>
								3/5
							</div>
							<div className={styles.usertemp}>
								0도
							</div>
						</div>
						<div className={styles.List}>
							<div className={styles.title_img_container}>
								<div className={styles.title_img}>

								</div>
							</div>
							<div className={styles.List_title}>
								<div className={styles.title}>
									경북소프트웨어 고등학교 체육관 청소
								</div>
								<div className={styles.subtitle}>
									경북소프트웨어 고등학교 체육관 청소를 도와줄 수 있는
									학생을 찾습니다. 많은 관심 부탁드립니다.
								</div>
							</div>
							<div className={styles.user}>
								3/5
							</div>
							<div className={styles.usertemp}>
								0도
							</div>
						</div>
						<div className={styles.List}>
							<div className={styles.title_img_container}>
								<div className={styles.title_img}>

								</div>
							</div>
							<div className={styles.List_title}>
								<div className={styles.title}>
									경북소프트웨어 고등학교 체육관 청소
								</div>
								<div className={styles.subtitle}>
									경북소프트웨어 고등학교 체육관 청소를 도와줄 수 있는
									학생을 찾습니다. 많은 관심 부탁드립니다.
								</div>
							</div>
							<div className={styles.user}>
								3/5
							</div>
							<div className={styles.usertemp}>
								0도
							</div>
						</div>
						<div className={styles.List}>
							<div className={styles.title_img_container}>
								<div className={styles.title_img}>

								</div>
							</div>
							<div className={styles.List_title}>
								<div className={styles.title}>
									경북소프트웨어 고등학교 체육관 청소
								</div>
								<div className={styles.subtitle}>
									경북소프트웨어 고등학교 체육관 청소를 도와줄 수 있는
									학생을 찾습니다. 많은 관심 부탁드립니다.
								</div>
							</div>
							<div className={styles.user}>
								3/5
							</div>
							<div className={styles.usertemp}>
								0도
							</div>
						</div>
						<div className={styles.List}>
							<div className={styles.title_img_container}>
								<div className={styles.title_img}>

								</div>
							</div>
							<div className={styles.List_title}>
								<div className={styles.title}>
									경북소프트웨어 고등학교 체육관 청소
								</div>
								<div className={styles.subtitle}>
									경북소프트웨어 고등학교 체육관 청소를 도와줄 수 있는
									학생을 찾습니다. 많은 관심 부탁드립니다.
								</div>
							</div>
							<div className={styles.user}>
								3/5
							</div>
							<div className={styles.usertemp}>
								0도
							</div>
						</div>
						<div className={styles.List}>
							<div className={styles.title_img_container}>
								<div className={styles.title_img}>

								</div>
							</div>
							<div className={styles.List_title}>
								<div className={styles.title}>
									경북소프트웨어 고등학교 체육관 청소
								</div>
								<div className={styles.subtitle}>
									경북소프트웨어 고등학교 체육관 청소를 도와줄 수 있는
									학생을 찾습니다. 많은 관심 부탁드립니다.
								</div>
							</div>
							<div className={styles.user}>
								3/5
							</div>
							<div className={styles.usertemp}>
								0도
							</div>
						</div>
						
					</div>
					<div className={styles.next_web}>
						<button className={styles.next_btn}>1</button>
						<button className={styles.next_btn}>2</button>
						<button className={styles.next_btn}>3</button>
						<button className={styles.next_btn}>4</button>
						<button className={styles.next_btn}>5</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default List;