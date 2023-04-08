import './InputDate.css'
import Form from 'react-bootstrap/Form';


const InputDate = ({label, controlId}) => {
    return (
        <Form.Group className="mb-3" controlId={controlId}>
            <Form.Label className='labelInputConfig'>{label}</Form.Label>
            <Form.Control type="date"/>
        </Form.Group>
    )
}

export default InputDate;