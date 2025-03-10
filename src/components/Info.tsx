import React, { useEffect, useState } from 'react';
import "../styles/common.scss"
import "../styles/components/Info.scss"

const Info: React.FC = () => {



  return (
    <div className="info-container" >
      <div className="image">
        <img src="/images/profile.jpeg" />
      </div>
      <div className="content">
        <h2>안녕하세요,<br />
        <strong>사용자 경험을 고민하는 개발자 이현정</strong>입니다.</h2>

        <p>
          Vue와 React를 활용하며, <strong>유지보수가 쉬운 구조</strong>와 <strong>본질적인 원리를 이해하는 개발</strong>을 지향합니다.<br />
          더 나은 UI/UX를 고민하는 과정에서 <strong>성능 최적화</strong>와 <strong>접근성 개선</strong>에 관심을 두고 있으며,<br />
          사용자 중심의 인터페이스를 만들기 위해 끊임없이 탐구하고 있습니다.
        </p>

        <h3>💡 개발자로서의 가치관</h3>
        <ul>
          <li>✔️원활한 협업을 위해 <strong>생산적인 커뮤니케이션</strong>을 중요하게 생각합니다.</li>
          <li>✔️새로운 기술을 배우고 적용하는 과정을 즐깁니다.</li>
          <li>✔️특정 프레임워크에 국한되지 않고, 더 나은 해결책을 찾는 개발자가 되기 위해 노력합니다.</li>
        </ul>

        <h3>💡 관심 분야</h3>
        <ul>
          <li>✔️성능 최적화 (LCP 개선, 웹페이지 로딩 속도 향상)</li>
          <li>✔️테스트 기반 개발 (Cypress, Jest 활용한 자동화 테스트)</li>
          <li>✔️접근성 개선 (웹 표준 및 ARIA 적용, 모든 사용자가 편리한 UI 구현)</li>
        </ul>

      </div>
    </div>
  )
}
export default Info