import s from './style.module.css';

const Header = (props) => {
    const { title, descr } = props;

    return (
        <header className={s.root} title={title} descr={descr}>
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>This is title</h1>
                <p>This is Description!</p>
            </div>
        </header>)
};

export default Header;