import '../common.css';


function Info() {

  return ( 
    <div className="info-container">
      <div className="row">
        <div className="column left">
          <span className="dot" style={{background:"#ED594A"}}></span>
          <span className="dot" style={{background:"#FDD800"}}></span>
          <span className="dot" style={{background:"#5AC05A"}}></span>
        </div>
        <div className="column middle">
          <input type="text" value="About Me"/>
        </div>
        <div className="column right">
          <div style={{float:'right'}}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <div className='info'>
          <p>
            <img src="/profile.jpeg" width="300px" style={{marginTop:'30px'}}/>
          </p>
          <div className="content">
            <h3>안녕하세요</h3>
            <p> 2년 차 프론트엔드 개발자 이현정입니다.<br/>
              Vue.js로 SPA, SSR로 프로젝트를 설계부터 배포, 운영까지 해온 경험을 가지고 있습니다.
                버그를 최소화 하기 위해 테스트코드를 작성하며 개발을 진행합니다. 또한 보다 편한 유지보수를 위해 클린코드를 작성하려고 노력합니다. 이슈나 버그의 회고를 습관화하여 동일한 문제를 방지화 하고 사내 개발 문서에 기여하여 발전을 도모합니다.</p>

             <p> 최근에는 다양한 프레임워크의 사용을 위해 React.js를 학습하고 있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Info