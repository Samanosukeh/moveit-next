import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const [time, setTime] = useState(25 * 60);//25min * 60 segundos
    const [isActive, setIsActive] = useState(false); //iniciar nao ativo, precisa clicar para ativar

    const minutes = Math.floor(time / 60);//vai dar o numero de minutos, math.floor arredonda pra baixo
    const seconds = time % 60;

    //padstart preenche o caractere 2 para 02
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true);
    }

    function resertCountdown() {
        setIsActive(false);//parar o contador
    }

    //executar uma função sempre que uma variavel mudar, no nosso caso isActive
    useEffect(() => {//setEffect: efeito colateral
        if (isActive && time >0) {//enquanto estiver ativo true e o tempo for maior que zero
            setTimeout(() => {//setTimeout: quero que algo aconteça depois de um tempo
                setTime(time - 1); //reduza o tempo em 1 segundo
            }, 1000)//executar uma função depois de 1 segundo, 1000mili
        }
    }, [isActive, time]);//sempre que active mudar ou time mudar, execute...

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

            { isActive ? (/*Se o botão tiver apertado - mostra o botão abandonar */
                <button
                 type="button"
                 className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                 onClick={resertCountdown}//sempre que um ciclo começar pode ser resetado o contador clicando nesse botão
                >Abandonar Ciclo</button>//botão que aparece apenas quando é clicado
            ) : ( /*Se o botão nao tiver apertado mostra o botão iniciar ciclo */
                <button type="button" className={styles.countdownButton} onClick={startCountdown}>Iniciar Ciclo</button>
            )}
        </div>
    );
}