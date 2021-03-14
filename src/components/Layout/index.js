import style from './style.module.css';

const Layout = ({id, title, urlBg = false, colorBg = false, children = false}) => {
    const styleBg = {}; 
    if (urlBg) { styleBg.backgroundImage = `url(${urlBg})` }
    if (colorBg) { styleBg.backgroundColor = colorBg }
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
                    </div>
                    <div className={`${style.desc} ${style.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout
