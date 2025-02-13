import React, { useEffect, useState } from 'react';
import '../common.scss';
import './Info.scss'
import { doc, getDoc } from '@firebase/firestore';
import { db } from '../utils/firebase';


interface User {
  email: string;
  introduction: string;
  name: string;
}

const Info: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {

    const fetchData = async () => {
      const docRef = doc(db, "portfolio", "user");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUser(docSnap.data() as User)
      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, []);




  return (
    <div className="container" ref={ref}>
      <div className="row">
          <p>
            <img src="/profile.jpeg" width="300px" style={{ marginTop: '30px' }} />
          </p>
          <div className="content">
            {user ?
              <div dangerouslySetInnerHTML={{ __html: user?.introduction }}></div>
              :
              <div>
                <h2><b>안녕하세요!</b></h2><br />  
                4년 차 프론트엔드 개발자 이현정입니다.<br /> <br />   
                <u>Vue.js를 사용</u>하여 SPA와 SSR 프로젝트를 설계하고 배포하며 운영한 경험을 통해, 실제 서비스 환경에서의 문제 해결과 최적화 작업을 다수 진행해왔습니다. <br/>   사용자의 요구를 정확히 반영하고, 성능을 고려한 UI/UX 설계 및 구현을 중시했습니다. <br />
                그 과정에서 다양한 라이브러리와 툴을 사용하며 기술적으로 성장할 수 있었습니다. 
                또한, <u>협업을 통해 소통</u>하며 더 나은 결과물을 도출하는 것에 큰 즐거움을 느낍니다!<br /><br />
                빠르게 변화하는 프론트엔드 기술에 발 맞춰 성장하기 위해, 저는 단순히 프레임워크의 사용법에 얽매이기보다는 그 본질적인 원리와 개념을 깊이 이해하고 이를 적용하는 데 더 많은 시간을 투자하고 있습니다. 프레임워크는 결국 도구일 뿐이며, 중요한 것은 각 상황에 최적화된 솔루션을 찾아내는 것이 중요하다고 생각합니다.<br /><br/>
                하지만 보다 높은 생산성을 위해 프레임워크에 대한 이해도 역시 중요하다고 생각합니다. 
                그래서 현재는 <u>React.js를 집중적으로 학습</u>하며, 다양한 프레임워크와 라이브러리에 대한 폭넓은 이해를 쌓고 있습니다. 
                이를 통해 다양한 상황에서 더욱 유연하고 최적화된 개발을 할 수 있도록 준비하고 있습니다.<br />
                앞으로도 지속적으로 새로운 기술을 익히고, 더 나은 개발자로 성장하는 것을 목표로 하고 있습니다.
              </div>
            }

        </div>
      </div>
    </div>
  )
}
export default Info