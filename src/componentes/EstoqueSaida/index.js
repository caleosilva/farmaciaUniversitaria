import './EstoqueSaida.css'
import InputText from '../InputText';
import InputDate from '../InputDate';
import InputSelect from '../InputSelect';
import AbaIndicacao from '../AbaIndicacao';
import BotaoDark from '../BotaoDark';
import BotaoSecondary from '../BotaoSecondary';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


function EstoqueSaida (){
    return (
        <Container fluid="md" className='pt-5'>

            <Form className='p-5 m-3 border bg-light'>


                <Row className='mb-1'>
                    <AbaIndicacao label={"Saída de estoque"} />
                </Row>

                <Row className='mb-2'>
                    <Col sm={4}>
                        <InputDate label={"Data de saída"} controlId={"inputDataSaida"} />
                    </Col>

                    <Col sm={8}>
                        <InputText label={"Nome do medicamento"} placeholder={"Nome, Lote e Data de Validade"} controlId={"inputNomeDataLoteMed"} />
                    </Col>

                    
                </Row>

                <Row className='mb-2'>

                    <Col sm={4}>
                        <InputText label={"Quantidade"} placeholder={"0"} controlId={"inputQuantidadeEntrada"} />
                    </Col>

                    <Col sm={4}>
                        <InputSelect label={"Opção de saída"} />
                    </Col>

                    
                </Row>

                <Row className='justify-content-center mt-5'>
                    <Col sm={4}>
                        <BotaoSecondary label={"Cancelar"} />
                    </Col>

                    <Col sm={4}>
                        <BotaoDark label={"Confirmar"} />
                    </Col>

                </Row>
            </Form>
        </Container>
    )
}

export default EstoqueSaida;