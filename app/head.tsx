import Script from "next/script";

export default function Head() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WM9FZW6071"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WM9FZW6071');
        `}
      </Script>
  
      <title>Nagarjuna ICT Club | Home</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Empowering Innovation, Connecting Minds"
      />
      <link rel="icon" href="/images/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <meta name="facebook-domain-verification" content="46m6qwol6jy4zwda07hpk5lwx0ero1" />
    </>
  );
}
