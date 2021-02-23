import styles from  '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    return (
        /*className é a class no React
        experience-bar esta sendo descrita o css em global.css*/
        <header className={styles.experienceBar}> {/* importando a classe que tem dentro dessa pasta com o css local de lá */}
            <span>0 xp</span>
            <div>
                {/* 60% por que pode ser controlado com uma variável para muar esse valor */}
                <div style={{ width: '50%'}} /> 

                {/* left: 50% ele vai mover para a esquerda em 50% */}
                <span className={styles.currentExperience} style={{left: '50%'}}> 300 xp</span>
            </div>
            <span>600 xp</span>
        </header>
    );
}