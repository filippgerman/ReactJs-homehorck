import style from './style.module.css';
import cn from 'classnames';


const MENU = [
        {   
            title: "HOME",
            to: 'home',
        }, 
        {
            title: "GAME",
            to: 'game',
        }, 
        {
            title: "ABOUT",
            to: 'about',
        }, 
        {
            title: "CONTACT",
            to: 'contact',
        },
    ];
const Menu = ({onMenu}) => {
    return (
        <div className={cn(style.menuContainer, {[style.active]: onMenu === true, [style.deactive]: onMenu === false})}>
          <div className={style.overlay} />
          <div className={style.menuItems}>
            <ul>
            {
                MENU.map(({title, to}, index)  => (
                    <li key={index}> 
                        <a href={to}>
                            {title}
                        </a>
                    </li>))
            }
            </ul>
          </div>
        </div>
    );
};

export default Menu;
