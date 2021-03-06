import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <a href="https://github.com/Samanosukeh" target="_blank" rel="noopener noreferrer">
                <img src="https://github.com/Samanosukeh.png" alt="Flauberth Duarte"/>
            </a>
            <div>
                <strong>Flauberth Duarte</strong>
                <p>
                    {/**ta dentro de public/icons... */}
                    <img src="icons/level.svg" alt="Level"/> 
                    Level {level}
                </p>
            </div>
        </div>
    )
}