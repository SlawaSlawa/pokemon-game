import s from './style.module.css';

const Layout = (props) => {
    const { id, title, descr, urlBg, colorBg = 'red' } = props;
    const bg = urlBg ? { backgroundImage: ` url(${urlBg})` } : { backgroundColor: colorBg };
    const divClasss = s.desc + ' ' + s.full;

    return (
        <section className={s.root} id={id}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={divClasss}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section >);
};

export default Layout;