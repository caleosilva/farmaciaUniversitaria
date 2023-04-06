import './InputText.css'
import Form from 'react-bootstrap/Form';



const InputText = ({label, placeholder, controlId}) => {
  return (
      <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label className='labelInputConfig'>{label}</Form.Label>
        <Form.Control type="text" placeholder={placeholder} />
      </Form.Group>

  );
}

export default InputText;