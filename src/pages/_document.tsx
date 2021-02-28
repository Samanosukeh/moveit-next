import Document, { Html, Head, Main, NextScript } from 'next/Document';
//Aqui vai tudo que é estatico
export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                {/* Tudo que ficar dentro da tag head vai para o cabeçalho */}
                <Head> {/**O document carrega as fontes uma única vez */}
                    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main /> {/* Onde mostra as páginas*/}
                    <NextScript /> {/* alguns scripts que o next injeta na aplicacao de forma automática*/}
                </body>
            </Html>
        );
    }
}