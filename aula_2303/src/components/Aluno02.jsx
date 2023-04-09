import React from 'react';

const Aluno02 = ({ nome, email, curso, media }) =>{
    const status = media >= 7.0 ? 'APROVADO(A)' : 'REPROVADO(A)';

    return (
    <>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>Curso: {curso}</p>
        <p>Média: {media}</p>
        <p>Status: {status}</p>
    </>
    );
}

export default Aluno02;