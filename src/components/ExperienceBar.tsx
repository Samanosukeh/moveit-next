import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from  '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);//importando o XP do usuário

    //calcular o progresso da barrinha para ficar igual
    const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

    return (
        /*className é a class no React
        experience-bar esta sendo descrita o css em global.css*/
        <header className={styles.experienceBar}> {/* importando a classe que tem dentro dessa pasta com o css local de lá */}
            <span>0 xp</span>
            <div>
                {/* 60% porque pode ser controlado com uma variável para muar esse valor */}
                <div style={{ width: `${percentToNextLevel}%`}} /> 

                {/* left: 50% ele vai mover para a esquerda em 50% */}
                <span className={styles.currentExperience} style={{left: `${percentToNextLevel}%`}}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}