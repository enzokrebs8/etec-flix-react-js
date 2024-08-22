import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from "./components/Container";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header />
      <Banner image='favoritos' />
      <Container>
        <body>
          <h2>Curso React JS</h2>
          <section className="cards">
            <Card id='KsFLXOTflsM' />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </body>
      </Container>
      <Footer />
    </>
  );
}

export default App;
