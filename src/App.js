import './index.css'
import Nav from './components/nav';
import Slider from './components/slider';
import Item from './components/item';
import Offer from './components/offer';
import Blog from './components/blog';
import Footer from './components/footer';
import Data from './data';


function App() {

  const newArrivals = Data.map(d => {
    return <Item {...d}/>
  })

  return (
    <div className="App">
     <Nav />
     <Slider />
     <div className="products-section">
        <h2><b><i><u>New Arrivals!</u></i></b></h2>
        <div className="new-arrivals products-container">
           {newArrivals}
        </div>
     </div>
     <hr/>

    <div className="products-section">
        <h2><b><i><u>Top Selling!</u></i></b></h2>
        <div className="top-selling products-container">
            {newArrivals}
        </div>
    </div>
     <hr/>

     <Offer />
     <hr/>

    <div className="products-section">
     <h2><b><i><u>Featured!</u></i></b></h2>
      <div className="featured products-container">
        {newArrivals}
      </div>
    </div>
    <hr/>

    <div className="blog-section">
      <h2>Latest News and Blogs</h2>
      <Blog heading="This is blog 1" body="This is the body of blog 1"/>
      <Blog heading="This is blog 2" body="This is the body of blog 2"/>
    </div>

    <div className="footer-section">
      <Footer />
    </div>

    </div>
  );
}

export default App;
