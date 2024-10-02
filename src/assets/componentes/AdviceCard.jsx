import React from 'react';
import { useAdvice } from '../hooks/UseAdvice';   
import desktopDivider from '../img/pattern-divider-desktop.svg';
import mobileDivider from '../img/pattern-divider-mobile.svg';
import diceIcon from '../img/icon-dice.svg';
import '../styles/adviceCard.css';

// Componente principal de la tarjeta del consejo
export const AdviceCard = () => {
    const { advice, fetchAdvice, error } = useAdvice();  

    // Retorno del componente HTML
    return (
        <div className='card'>
            {error ? (
                <p className='error'>{error}</p>
            ) : (
                <>
                    <p className='advice-id'>ADVICE #{advice.id}</p>
                    <h2 className='advice-text'>"{advice.advice}"</h2>
                </>
            )}
            <img src={desktopDivider} className="divider-desktop" alt="divider" />
            <img src={mobileDivider} className="divider-mobile" alt="divider" />
            <button className="dice-button" onClick={fetchAdvice}>
                <img src={diceIcon} alt="dice icon" />
            </button>
        </div>
    );
};

// Exportamos el componente
export default AdviceCard;
