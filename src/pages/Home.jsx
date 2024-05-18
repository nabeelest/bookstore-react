import { Navbar, Main, Product, Footer, Banner, ProductCard} from "../components";

const Home = () => {
  // Sample book data (replace with your actual data)
  const books = [
    {
      imageUrl: './assets/book1.jpg',
      title: 'The Wishing Game',
      price: '$67',
    },
    {
      imageUrl: './assets/book2.jpg',
      title: 'The Hunger Games',
      price: '$15',
    },
    {
      imageUrl: './assets/book3.jpg',
      title: 'The Housemaids Secret',
      price: '$18',
    },
    {
      imageUrl: './assets/book4.jpg',
      title: 'Happy Medium',
      price: '$22',
    },
    {
      imageUrl: './assets/book5.jpg',
      title: 'Yours Truly',
      price: '$17',
    },
  ];

  return (
    <>
      <Navbar />
      <Main />
      <Banner />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {books.map((book, index) => (
          <ProductCard key={index} {...book} />
        ))}
      </div>
      
      <br></br>
      <Product />
      <Footer />
    </>
  );
};

export default Home;
