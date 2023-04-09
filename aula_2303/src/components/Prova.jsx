import React, { useState } from 'react';
//npm run dev
//cd ./aula_2303/
const Prova = () => {
  const [respostasQ1, setRespostasQ1] = useState([]);
  const [respostasQ2, setRespostasQ2] = useState([]);
  const [respostasQ3, setRespostasQ3] = useState([]);

  const handleEscolherQ1 = (resposta) => {
    if (respostasQ1.length === 0) {
      setRespostasQ1([resposta]);
    }else{
      alert("Questão já foi respondida!");
    }
  };

  const handleEscolherQ2 = (resposta) => {
    if (respostasQ2.length === 0) {
      setRespostasQ2([resposta]);
    }else{
      alert("Questão já foi respondida!");
    }
  };

  const handleEscolherQ3 = (resposta) => {
    if (respostasQ3.length === 0) {
      setRespostasQ3([resposta]);
    }else{
      alert("Questão já foi respondida!");
    }
  };

  const calcularAcertos = () => {
    let acertos = 0;
    if (respostasQ1[0] === "b") {
      acertos++;
    }
    if (respostasQ2[0] === "a") {
      acertos++;
    }
    if (respostasQ3[0] === "d") {
      acertos++;
    }
    return acertos;
  };

  const handleFinalizarQuiz = () => {
    if (respostasQ1.length === 0 || respostasQ2.length === 0 || respostasQ3.length === 0) {
      alert("Por favor, responda todas as perguntas.");
    } else {
      const acertos = calcularAcertos();
      alert(`Você acertou ${acertos} questões.`);
      window.location.reload();
    }
  };

  const styles = {
    display: 'flex',
    alignContent: 'stretch',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline'
  };

  return (
    <div style={styles}>
      <div>
        <div>
            <h1>Quiz de Front-end</h1>
            <br />
            <h2>#1 - O que é Front-end?</h2>
            <p>a) Parte de um sistema que é oculta para usuário. <button onClick={() => handleEscolherQ1("a")}>Escolher</button></p>
            <p>b) Parte de um sistema é visivel e interativa ao usuário. <button onClick={() => handleEscolherQ1("b")}>Escolher</button></p>
            <p>c) Parte lógica que recebe as regras de negócio. <button onClick={() => handleEscolherQ1("c")}>Escolher</button></p>
            <p>d) nenhuma das alternativas anteriores. <button onClick={() => handleEscolherQ1("d")}>Escolher</button></p>
            <br />
            <h2>#2 - O que é o React JS?</h2>
            <p>a) Uma poderosa biblioteca JavaScript. <button onClick={() => handleEscolherQ2("a")}>Escolher</button></p>
            <p>b) Uma liguagem de programação. <button onClick={() => handleEscolherQ2("b")}>Escolher</button></p>
            <p>c) Um servidor de Cloud. <button onClick={() => handleEscolherQ2("c")}>Escolher</button></p>
            <p>d) Todas as respostas anteriores. <button onClick={() => handleEscolherQ2("d")}>Escolher</button></p>
            <br />
            <h2>#3 - Quais são as principais tecnologias do mundo Front-end?</h2>
            <p>a) Java, golang e python. <button onClick={() => handleEscolherQ3("a")}>Escolher</button></p>
            <p>b) AWS, Google Cloud e Azure. <button onClick={() => handleEscolherQ3("b")}>Escolher</button></p>
            <p>c) Kotlin, HTML e CSS. <button onClick={() => handleEscolherQ3("c")}>Escolher</button></p>
            <p>d) HTML, CSS e JavaScript. <button onClick={() => handleEscolherQ3("d")}>Escolher</button></p>
        </div>
      </div>
      <div>
        <div>
            <h3>Questões Respondidas:</h3>
            <ul style={{listStyle: 'none'}}>
            {respostasQ1.length > 0 && (
              <li>
                <br />
                Questão 1: <br /> <br />
                Escola: {respostasQ1.map((resposta) => resposta)}
              </li>
            )}
            {respostasQ2.length > 0 && (
              <li>
                <br />
                Questão 2: <br /> <br />
                Escola: {respostasQ2.map((resposta) => resposta)}
              </li>
            )}
            {respostasQ3.length > 0 && (
              <li>
                <br />
                Questão 3: <br /> <br />
                Escola: {respostasQ3.map((resposta) => resposta)}
              </li>
            )}
          </ul>
        </div>
      </div>
      <div >
        <button onClick={() => handleFinalizarQuiz()} >Finalizar Quiz</button>
        
      </div>
    </div>
  )
}

export default Prova;