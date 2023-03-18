import { useState } from 'react';
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

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');


    const aoSalvar = (e) => {
        e.preventDefault();
        return console.log(nome, cargo, imagem, time);
    }

    return (

        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto

                obrigatorio={true}
                label="Nome"
                placeholder="Digite seu nome"
                valor = {nome}
                aoAlterado = {valorInput => setNome(valorInput)}

                />

                <CampoTexto
                obrigatorio={true}
                label="Cargo"
                placeholder="Digite seu cargo"
                valor = {cargo}
                aoAlterado = {valor => setCargo(valor)}
                />


                <CampoTexto
                label="Imagem"
                placeholder="Digite o endereço de sua imagem"
                valor = {imagem}
                aoAlterado = {valor => setImagem(valor)}
                />


                <ListaSuspensa
                obrigatorio={true}
                label="Time"
                itens={times}
                valor = {time}
                aoAlterado={valor => setTime(valor)}
                />

                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;