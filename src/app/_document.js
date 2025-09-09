import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />

        {/* ✅ Hidden static form so Netlify can register it */}
        <form 
          name="contact" 
          netlify="true" 
          netlify-honeypot="bot-field" 
          data-netlify-recaptcha="true" 
          hidden
        >
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <input type="text" name="company" />
          <textarea name="message"></textarea>
        </form>
      </body>
    </Html>
  );
}
