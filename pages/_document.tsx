import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// import Document, {
//   Html,
//   Head,
//   Main,
//   NextScript,
//   DocumentContext,
//   DocumentInitialProps,
// } from 'next/document';

// export default class MyDocument extends Document {
//   static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
//     const initialProps = await Document.getInitialProps(ctx);

//     return initialProps;
//   }

//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           <link
//             href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;500;700&display=swap"
//             rel="stylesheet"
//           />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }
