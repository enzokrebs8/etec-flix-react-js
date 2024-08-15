import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Header />
      <Banner image='favoritos' />
      <Container>
        <body>
          <h1>ETEC MCM</h1>
          <p>Olá mundo!</p>
        </body>
      </Container>
      <Footer />
    </>
  );
}

export default App;
