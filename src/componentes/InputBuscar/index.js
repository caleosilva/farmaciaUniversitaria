import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import './InputBuscar.css'


function InputBuscar({placeholder}) {
    return (

        // <Form className="d-flex">
        //     <Form.Control
        //         type="search"
        //         placeholder="Nome do medicamento"
        //         className="me-2"
        //         aria-label="Buscar"
        //     />
        //     <Button variant="outline-secondary">Buscar</Button>
        // </Form>

        <InputGroup className='buscar'>
            <Form.Control
                placeholder={placeholder}
                aria-label={placeholder}
                aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
                Buscar
            </Button>
        </InputGroup>
    )


}

export default InputBuscar;