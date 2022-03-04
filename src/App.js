import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Banner from './Pages/Home/Banner/Banner';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <Footer />
        </div>
    );
}

export default App;
