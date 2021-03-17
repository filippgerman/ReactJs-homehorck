import style from './style.module.css';
import cn from 'classnames';


const routs = ["HOME", "GAME", "ABOUT", "CONTACT"];
const Menu = ({onMenu}) => {
    return (
        <div className={cn(style.menuContainer, {[style.active]: onMenu === true, [style.deactive]: onMenu === false})}>
          <div className={style.overlay} />
          <div className={style.menuItems}>
            <ul>
            {routs.map((rout) => <li> <a href="#">{rout}</a> </li>)}
            </ul>
          </div>
        </div>
    );
};

export default Menu;
