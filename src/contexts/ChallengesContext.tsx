import { createContext, ReactNode, useState } from 'react';
import challenges from "../../challenges.json";


/*boa prática falar qual é o tipo do 'children'
  deixando children tipado*/
interface ChallengesProviderProps {
    children: ReactNode;//aceita qualquer elemento filho como componente, html
}

interface Challenge {//definindo que tipo de objeto challenge é
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengeContextData {//essa interface cuida de sugerir o que usar na hr de importar o contexto em Countdown.tsx
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;//é uma função que nao tem retorno
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengeContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {/*vai ser chamado no _app*/
    const [level, setLevel] = useState(1); //criando um estado e o level=1 inicial
    const [currentExperience, setCurrentExperience] = useState(30);//xp sempre começa em 0
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    function levelUp(){
        setLevel(level + 1); //upando o level
    }

    const [activeChallenge, setActiveChallenge] = useState(null);//guarda o desafio atual no estado

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);//calculando xp para proximo nível
    
    function startNewChallenge() {
        //gerando numero aleatorio de 1 até tamanho do Json
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);//pegar um número aleatorio
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    }

    //função chamada quando usuario falhar
    function resetChallenge(){
        setActiveChallenge(null);
    }

    function completeChallenge(){
        if (!activeChallenge){//se o usário não tiver com um desafio ativo...
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) { //se a quantidade de xp for maior que a barrinha tem atualmente.
            finalExperience = finalExperience - experienceToNextLevel;//nova quantidade de xp vai ser o que sobrar, ex: 150 - 100 = 50xp no prox nível
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);//zerando o desafio
        setChallengesCompleted(challengesCompleted + 1); //desafios completo + 1

    }

    return(
        /*value={'teste'} é o que ele vai enviar, pode enviar um objeto/dicionário com várias informações sobre o usuário
        até funções
        como o nivel, nome e outros dados*/
        <ChallengesContext.Provider
          value={{level, 
          currentExperience, 
          experienceToNextLevel, 
          challengesCompleted, 
          activeChallenge, 
          levelUp, 
          startNewChallenge, 
          resetChallenge,
          completeChallenge
          }}> {/*todos os elementos dentro do provider vai ter acesso aos dados do contexto*/}
          {children}
        </ChallengesContext.Provider>
    );
}