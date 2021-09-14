import Head from 'next/head';

import { Profile } from "../components/Perfil";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/challengeBox";
import { ExperienceBar } from "../components/ExperienceBar";
import { CompletedChallenges } from "../components/CompletedChallenges";


import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
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
  )
}
