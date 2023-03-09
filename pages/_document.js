import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script defer src={`https://rsms.me/inter/inter.css`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
