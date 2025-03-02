import './Header.scss';
import Dropdown from './Dropdown';


function Header({addrMsg}:{addrMsg:string}) {

  const handleNavigation = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  const headerMenu = [
    {label: '홈',onClick: () => {scrollToTop() }},
    {label: '자기소개',onClick:  () => {handleNavigation('#info')}},
    {label: '프로젝트 소개',onClick: () => {handleNavigation('#projects')}}
  ]
  
  return (
    <div className="header">
          <div className="column left">
            <span className="dot" style={{background:"#ED594A"}}></span>
            <span className="dot" style={{background:"#FDD800"}}></span>
            <span className="dot" style={{background:"#5AC05A"}}></span>
          </div>
          <div className="column middle">
            <input readOnly type="text" value={addrMsg}/>
          </div>
    
          <div className="column right" >
            <Dropdown menuItems={headerMenu}/>
          </div>
        </div>
  )
}
export default Header