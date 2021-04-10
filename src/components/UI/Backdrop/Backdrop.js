import './Backdrop.css'
const Backdrop = (props) => {
    return (
        props.show ? <div className="backdrop" onClick={props.backdropClicked}></div> : ''
    )
}

export default Backdrop