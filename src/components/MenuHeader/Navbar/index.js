import style from './style.module.css';
import cn from 'classnames';

const Nav = ({ onChange}) => {
    const onClickLigo = (value) => {
       onChange && onChange(value);
    }
    return (
        <nav className={style.root}>
          <div className={style.navWrapper}>
            <p className={style.brand} onClick={() => onClickLigo(true)}>
              LOGO
            </p>
            <a className={cn(style.menuButton,  style.active)} onClick={() => onClickLigo(false)}>
              <span />
            </a>
          </div>
        </nav>
    );
};

export default Nav;
