import './InputDate.css'
import Form from 'react-bootstrap/Form';


const InputDate = ({label, placeholder, controlId}) => {
    return (
        <Form.Group className="mb-3" controlId={controlId}>
            <Form.Label className='labelInputConfig'>{label}</Form.Label>
            <Form.Control type="date" placeholder={placeholder} />
        </Form.Group>
    )
}

export default InputDate;