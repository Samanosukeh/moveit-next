import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

let contdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const { 
        minutes, 
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown 
    } = useContext(CountdownContext);
    
    //padstart preenche o caractere 2 para 02
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                  disabled
                  className={styles.countdownButton}
                >Ciclo encerrado</button>
            ) : ( 
                <> {/*Fragment div para solucionar o problema do React  para executar o codigo com html dentro do ELSE*/}
                    { isActive ? (/*Se o botão tiver apertado - mostra o botão abandonar */
                        <button
                        type="button"
                        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        onClick={resetCountdown}//sempre que um ciclo começar pode ser resetado o contador clicando nesse botão
                        >Abandonar Ciclo</button>//botão que aparece apenas quando é clicado
                    ) : ( /*Se o botão nao tiver apertado mostra o botão iniciar ciclo */
                        <button type="button" className={styles.countdownButton} onClick={startCountdown}>Iniciar Ciclo</button>
                    ) }
                </>
            ) }
        </div>
    );
}