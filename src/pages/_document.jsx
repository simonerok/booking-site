import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    /* pageProps kommer fra App giver adgang til vores pageProps */
    const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;
    /* objekter der er blevet destructured så det kun er hver enkelte sides indhold */
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
      <Html lang="en">
        <Head />
        {/* her skiftes den dynamisk alt efter hvilken side vi er på */}
        <body className={bodyClass}>
          <link rel="stylesheet" href="https://use.typekit.net/bxq7sds.css" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
