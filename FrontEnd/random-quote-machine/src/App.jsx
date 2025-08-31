//App.jsx

import QuoteBox from './features/quotes/QuoteBox';
import Footer from './features/footer/Footer';
import ColorEffects from './features/colorEffects/ColorEffects';


export default function App() {
    return (
    <div id="main-container" className="d-flex flex-column justify-content-center align-items-center vw-100 vh-100">
        <QuoteBox />
        <Footer />
        <ColorEffects />
    </div>)    
}