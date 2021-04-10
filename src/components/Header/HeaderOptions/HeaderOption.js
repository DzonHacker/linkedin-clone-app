import './HeaderOption.css'

const HeaderOption = ({Icon, title, source }) => {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption__icon" src={source? source: ``}/>}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption