import './FormAtualizarMed.css'
import InputText from '../InputText';
import InputDate from '../InputDate';
import InputSelect from '../InputSelect';
import AbaIndicacao from '../AbaIndicacao';
import BotaoDark from '../BotaoDark';
import BotaoSecondary from '../BotaoSecondary';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';


function FormAtualizarMed() {
    return (
        <Container fluid="md" className='pt-5'>

            <Form className='p-5 m-3 border bg-light'>


                <Row className='mb-1'>
                    <AbaIndicacao label={"Edição de medicamentos"} />
                </Row>

                <Row className='mb-5'>
                    <Col sm={8}>
                        <InputText label={"Nome do medicamento"} placeholder={"Nome, Lote e Data de Validade"} controlId={"inputNomeDataLoteMed"} />
                    </Col>

                    <hr />
                </Row>

                <Row className='mb-2'>
                    <Col sm={4}>
                        <InputDate label={"Data do cadastro"} placeholder={"DD/MM/AAAA"} controlId={"inputDataCadastro"} />
                    </Col>
                    <Col sm={8}>
                        <InputText label={"Nome do medicamento"} placeholder={"Nome"} controlId={"inputNomeMed"} />
                    </Col>
                </Row>

                <Row className='mb-2'>
                    <Col sm={4}>
                        <InputText label={"Lote"} placeholder={"ABC123"} controlId={"inputLoteMed"} />
                    </Col>
                    <Col sm={8}>
                        <InputText label={"Princípio ativo e dosagem"} placeholder={"50mg de ..."} controlId={"inputPrincMed"} />
                    </Col>
                </Row>

                <Row className='mb-2'>
                    <Col sm={4}>
                        <InputDate label={"Data de validade"} placeholder={"DD/MM/AAAA"} controlId={"inputDataValidade"} />
                    </Col>
                    <Col sm={8}>
                        <InputText label={"Origem do medicamento"} placeholder={"Ex: Doação"} controlId={"inputOrigemMed"} />
                    </Col>
                </Row>

                <Row className='mb-2'>
                    <Col sm={4}>
                        <InputText label={"Fabricante"} placeholder={"Ex: EMS"} controlId={"inputFabrivanteMed"} />
                    </Col>

                    <Col sm={4}>
                        <InputSelect label={"Classe"} />
                    </Col>

                    <Col sm={4}>
                        <InputSelect label={"Tipo de medicamento"} />
                    </Col>
                </Row>

                <Row className='mb-2'>
                    <Col sm={4}>
                        <InputSelect label={"Tarja"} />
                    </Col>

                    <Col sm={4}>
                        <InputSelect label={"Apresentação"} />
                    </Col>

                    <Col sm={4}>
                        <InputSelect label={"Motivo do descarte"} />
                    </Col>
                </Row>

                <Row className='justify-content-center mt-5'>
                    <Col sm={4}>
                        <BotaoSecondary label={"Cancelar"} />
                    </Col>

                    <Col sm={4}>
                        <BotaoDark label={"Salvar alterações"} />
                    </Col>

                </Row>
            </Form>
        </Container>
    )
}

export default FormAtualizarMed;