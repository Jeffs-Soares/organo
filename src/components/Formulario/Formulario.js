import Botao from '../Botao/Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css';


const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design'
    ]

    return (

        <section className='formulario'>
            <form>
                <h2> Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço de sua imagem" />
                <ListaSuspensa  label="Time" itens = {times} />
                <Botao>
                    {/* <h2> Olá </h2> */}
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;