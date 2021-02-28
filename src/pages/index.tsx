import { Profile } from "../components/Perfil";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { CompletedChallenges } from "../components/CompletedChallenges";

import Head from 'next/head';

import styles from "../styles/pages/Home.module.css";



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar /> {/** Mostrando aqui o componente da barrinha de XP do cara */}

      <section>{/**Criando uma section para separar esse conteúdo */}
        <div>
          <Profile /> {/**Import do componente Profile aqui.. */}
          <CompletedChallenges /> {/**Importando o componente de Desafios abaixo de perfil */}
          <Countdown />
        </div>
      </section>
    </div>
  )
}
