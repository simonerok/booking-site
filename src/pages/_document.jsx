// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;
    const { isLanding, isProgram, isSchedule } = pageProps;

    let bodyClass = "";
    if (isLanding) {
      bodyClass = "landing-background";
    } else if (isProgram) {
      bodyClass = "program-background";
    } else if (isSchedule) {
      bodyClass = "schedule-background";
    } else {
      bodyClass = "default-background";
    }
    return (
      <Html>
        <Head />
        <body className={bodyClass}>
          <link rel="stylesheet" href="https://use.typekit.net/bxq7sds.css" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
