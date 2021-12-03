import styled from 'styled-components'
import {Button} from './Button'
import { Link } from "react-router-dom";

const Title = styled.h1`
    margin-top: 4em;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;

const GameOver = ({pts}) => {

    const refreshPage = () => window.location.reload();

    return (
        <>
            
            <Title>Game Over</Title>
            <Points>You did {pts} out of 9!</Points>
            {pts >= 4 ?  
            <Link to='/' className='btn btn-dark'>Retour a l'acceuil</Link>
            :
            <Button onClick={refreshPage}>Jouez le quiz a nouveau</Button>
            }
        </>
    )
}

export default GameOver
