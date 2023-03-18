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
    ];

    const aoSalvar = (e) => {
        e.preventDefault();

        return console.log('LUL');
    }

    return (

        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço de sua imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
                <Botao>
                    {/* <h2> Olá </h2> */}
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;