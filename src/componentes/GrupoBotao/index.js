import './GrupoBotao.css'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';


function GrupoBotao({primeiroLabel, segundoLabel, terceiroLabel}) {
    return (
        <ButtonGroup aria-label="Basic example">
            <Button variant="outline-secondary">{primeiroLabel}</Button>
            <Button variant="outline-secondary">{segundoLabel}</Button>
            <Button variant="outline-danger">{terceiroLabel}</Button>

        </ButtonGroup>
    )
}

export default GrupoBotao;