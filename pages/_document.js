import Document, { Html, Head, Main, NextScript } from 'next/document';
// this head component is different from the one in next/head.

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;