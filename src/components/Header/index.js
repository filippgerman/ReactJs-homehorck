import style from './style.module.css';

const Header = ({ title, children, onClickButton }) => {
    const handleClick = () => {
        onClickButton && onClickButton('game');
    }
    return (
        <header className={style.root}>
            <div className={style.forest}></div>
            <div className={style.silhouette}></div>
            <div>className={style.moon}</div>
            <div className={style.container}>
            { title && (<h1>{title} </h1>)}
            {children && (<p>{children}</p>)}
            <button onClick={handleClick}>
                Start Game
            </button>
            </div>
        </header>
    );
}

export default Header
