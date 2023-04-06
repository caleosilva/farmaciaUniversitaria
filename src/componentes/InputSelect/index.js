import './InputSelect.css'
import Form from 'react-bootstrap/Form';


const InputSelect = ({label}) => {
    return (
        <section>
            <Form.Label className='labelInputConfig'>{label}</Form.Label>
            <Form.Select aria-label={label}>
                <option></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </section>

    )
}

export default InputSelect;