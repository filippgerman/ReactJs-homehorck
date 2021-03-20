import style from './style.module.css';
import cn from "classnames";

const Layout = ({id, title, urlBg = false, colorBg = false, children = false, addPokemon=false}) => {
    const styleBg = {}; 
    if (urlBg) { styleBg.backgroundImage = `url(${urlBg})` }
    if (colorBg) { styleBg.backgroundColor = colorBg }

    const clickButton = () => {
        addPokemon && addPokemon();
    }
    return (
        <section 
            className={style.root} 
            style={styleBg}
            id={id}
        >
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        <h3>{title}</h3>
                        <span className={style.separator}></span>
                        <button onClick={clickButton}>Add pokemon</button>
                    </div>
                    <div className={cn(style.desc, style.full)}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;
