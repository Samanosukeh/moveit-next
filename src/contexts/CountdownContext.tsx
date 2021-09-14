import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownContextProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownContextProps) {
    const { startNewChallenge } = useContext(ChallengesContext);//{} desestrutura para pegar apenas um atributo ou método
    const [time, setTime] = useState(0.1 * 60);//25min * 60 segundos
    const [isActive, setIsActive] = useState(false); //iniciar nao ativo, precisa clicar para ativar
    const [hasFinished, setHasFinished] = useState(false);//inicia como falso pois o estado de terminado nao é vdd até acabar

    const minutes = Math.floor(time / 60);//vai dar o numero de minutos, math.floor arredonda pra baixo
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);//cancelando a contagem de tempo após pausar
        setIsActive(false);//parar o contador
        setHasFinished(false);
        setTime(0.1 * 60);//resetando o tempo para o valor de origem
    }

    //executar uma função sempre que uma variavel mudar, no nosso caso isActive
    useEffect(() => {//setEffect: efeito colateral
        if (isActive && time >0) {//enquanto estiver ativo true e o tempo for maior que zero
            //retorne na variável contdownTimeout o resultado do contador de tempo
            countdownTimeout = setTimeout(() => {//setTimeout: quero que algo aconteça depois de um tempo
                setTime(time - 1); //reduza o tempo em 1 segundo
            }, 1000)//executar uma função depois de 1 segundo, 1000mili
        } else if (isActive && time === 0) {//se o botão tiver ativo e o tempo chegou a zero...
            console.log("Finalizou");
            setHasFinished(true);//finalizado
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);//sempre que active mudar ou time mudar, execute...


    return (
        <CountdownContext.Provider value={{
            minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}