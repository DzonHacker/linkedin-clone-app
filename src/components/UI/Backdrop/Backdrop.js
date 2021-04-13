import './Backdrop.css'
const Backdrop = (props) => {
    return (
        props.show ? <div className={props.backdropClass} onClick={props.backdropClicked}></div> : ''
    )
}

export default Backdrop