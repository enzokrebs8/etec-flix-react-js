import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import Category, { categories, filterCategory } from "../../components/Category";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function Home() {
  return (
    <>
      <ScrollToTopButton></ScrollToTopButton>
      <Header />
      <Banner image='favoritos' />
      <Container>
        <body>
          {categories.map((category, index) =>
            <Category category={category}>
              <Carousel>
                {filterCategory(index).map((video) => <Card id={video.id} key={video.id} />)}
              </Carousel>
            </Category>
          )}
        </body>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
