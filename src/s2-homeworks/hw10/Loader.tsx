import s from './Loader.module.css'
import icon from './icon.gif'

export const Loader = () => <div className={s.loader}>
    <img src={icon} alt="loading icon"/>
</div>