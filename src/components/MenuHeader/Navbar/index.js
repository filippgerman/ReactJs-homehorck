import style from './style.module.css';
import cn from 'classnames';

const Nav = ({ isActive, onChange, bgActive}) => {
    return (
        <nav className={cn( style.root, {[style.bgActive]: bgActive})}>
          <div className={style.navWrapper}>
            <p className={style.brand} >
              LOGO
            </p>
            <div className={cn(style.menuButton,  {[style.active]: isActive})} onClick={onChange}>
              <span />
            </div>
          </div>
        </nav>
    );
};

export default Nav;
