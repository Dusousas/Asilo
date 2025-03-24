import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <title>Missono - Casa de Repouso</title>
        
        {/* Meta Tags Essenciais */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* SEO */}
        <meta name="description" content="Missono - Casa de Repouso. Cuidamos com carinho e dedicação dos seus entes queridos, proporcionando bem-estar e qualidade de vida." />
        <meta name="keywords" content="Casa de repouso, Asilo, Cuidados para idosos, Missono, Assistência a idosos, Lar para idosos, Idosos, Cuidados," />
        <meta name="author" content="Missono" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Missono - Casa de Repouso" />
        <meta property="og:description" content="Cuidamos com carinho e dedicação dos seus entes queridos, proporcionando bem-estar e qualidade de vida." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.missono.com.br" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Missono - Casa de Repouso" />
        <meta name="twitter:description" content="Cuidamos com carinho e dedicação dos seus entes queridos, proporcionando bem-estar e qualidade de vida." />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* Ícones */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* FONTES */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
