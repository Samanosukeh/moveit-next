import '../styles/global.css'

//reaproveitar uma coisa que nao muda em todas as páginas
function MyApp({ Component, pageProps }) {//exemplo uma SideBar
  

  return(
    <Component {...pageProps} />
  ) 
}//tudo que vai repetir em todas as págninas fica no _app

export default MyApp
/*
next.js é um framework em cima do React que é uma biblioteca de construção de interfaces
next traz um conjunto de funcionalidades que repetimos muito no React e traz jpa pronto
como rotas, é possivel com ele trabalhar com 
  SPA: single page aplication, troca o conteudo mas não a página inteira
  SSR: Server Side Rendering
  SSG: Static Side Generator

-Páginas que não mudam com tanta frequência ficam na tela sem ir no back-end buscar a informação

Next faz com que as aplicações consigam ser indexadas em motores de busca.
*/