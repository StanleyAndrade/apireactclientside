import React, { useEffect, useState } from "react";
import { FaHome, FaHistory, FaDumbbell } from 'react-icons/fa'; // Importando ícones
import DisplayTreinos from "./displaytreinos";
import TreinoGym from "./treinogym";
import CreateTreino from "./createTreino";
import { BsBook } from "react-icons/bs";
import Questionario from "./questionario";
import CreateCurso from "./createCurso";
import Provas from "./provas";
import Cursos from "./curso";

const TreinoCompleto = () => {
    const [componente, setComponente] = useState();
    const [userData, setUserData] = useState(null);

    const cursos = () => {
        setComponente(<Cursos />);
    }

    const provas = () => {
        setComponente(<Provas />);
    }

    const createCurso = () => {
        setComponente(<CreateCurso />);
    }

    const criarQuiz = () => {
        setComponente(<CreateTreino />);
    }

    return (
        <div className="father-treino">
            <div className="children-Treino-Completo">
                <button className="bottom-bar-button-treino" onClick={cursos}>
                    <BsBook className="icon" />
                    <span>Seus Novos Cursos</span>
                </button>
                <button className="bottom-bar-button-treino" onClick={provas}>
                    <BsBook className="icon" />
                    <span>Suas Novas Provas</span>
                </button>
                <button className="bottom-bar-button-treino" onClick={createCurso}>
                    <BsBook className="icon" />
                    <span>Criar Curso</span>
                </button>
                <button className="bottom-bar-button-treino" onClick={criarQuiz}>
                    <BsBook className="icon" />
                    <span>Criar Prova</span>
                </button>
            </div>
            <div className="componente-container">
                {componente}
            </div>
        </div>
    )
}

export default TreinoCompleto;
