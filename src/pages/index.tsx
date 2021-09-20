import Head from 'next/head';
import {GetServerSideProps} from 'next';

import { Profile } from "../components/Perfil";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/challengeBox";
import { ExperienceBar } from "../components/ExperienceBar";
import { CompletedChallenges } from "../components/CompletedChallenges";


import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props) { //props da propria página, função async abaixo...
  
  return (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Início  | move.it</title>
        </Head>
        <ExperienceBar /> {/** Mostrando aqui o componente da barrinha de XP do cara */}

        <CountdownProvider>
          <section>{/**Criando uma section para separar esse conteúdo */}
            <div>
              <Profile /> {/**Import do componente Profile aqui.. */}
              <CompletedChallenges /> {/**Importando o componente de Desafios abaixo de perfil */}
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}