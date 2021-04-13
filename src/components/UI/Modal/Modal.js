import './Modal.css'
import Backdrop from '../Backdrop/Backdrop'
const Modal = (props) => {
    return (
        <div className="mymodal">
            <Backdrop show={props.show} backdropClass={`backdrop zidx`} backdropClicked={props.handleCreatePost}/>
            <div className="modal"
                style={{
                    transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
                    opacity: props.show ? `1` : 0
                }}
            >
                {props.children}
            </div>        
        </div> 
    )
}

export default Modal