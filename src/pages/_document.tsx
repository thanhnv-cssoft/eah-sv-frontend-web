import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import Document, { Html, Head, Main, NextScript, type DocumentContext } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
      });

    const initialProps = await Document.getInitialProps(ctx);
    const style = extractStyle(cache, true);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style dangerouslySetInnerHTML={{ __html: style }} />
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-dark-900 antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
