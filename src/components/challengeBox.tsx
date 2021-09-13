import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
    //esse código pode ser usado em qualquer lugar da aplicação
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);//passando o contexto como argumento

    return(
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? ( //se activeChallenge nao for nulo...
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>{/* Parte principal */}
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/> {/*Se for tipo body pega uma imagem, senao pega a outra */}
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeFailedButton} onClick={resetChallenge}>
                            Falhei
                        </button>
                        
                        <button type="button" className={styles.challengeSuceededButton} onClick={completeChallenge}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (//Só vai aparecer o card de desafios se a variavel nao tiver
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios.
                    </p>
                </div>

            )}
        </div>
    )
}