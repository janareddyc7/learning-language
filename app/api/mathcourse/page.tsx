import Head from 'next/head';

export default function Home() {
  const animateButton = () => {
    alert('Button clicked! You can add your animation logic here.');
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Duolingo Math Course</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="logo mb-10">
        {/* Your Duolingo math course logo SVG */}
        {/* Paste the SVG provided in the question here */}
      </div>

      <div className="buttons flex flex-col items-center">
        <button
          className="green-button mb-4"
          onClick={animateButton}
        >
          Learn Math
        </button>
        <a href="/courses" className="get-started-button">Get Started</a>
      </div>
    </div>
  );
}
