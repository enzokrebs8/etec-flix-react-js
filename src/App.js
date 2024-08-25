import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from "./components/Container";
import Card from "./components/Card";
import videos from "./json/videos.json";
import Category from "./components/Category";

const categories =[
  "Geografia",
  "Como fazer e usar",
  "Climatologia, Meteorologia, Vegetação",
  "Geologia e Hidrografia",
]

function App() {
  return (
    <>
      <Header />
      <Banner image='favoritos' />
      <Container>
        <body>

          {/* <h2>Curso React JS</h2>
          <section className="cards">
            {videos.map(video =><Card id={video.id} key={video.id}/>)}
          </section> */}
          <Category category="Geografia">
            {videos.map(video =><Card id={video.id} key={video.id}/>)}
          </Category>
        </body>
      </Container>
      <Footer />
    </>
  );
}

export default App;
