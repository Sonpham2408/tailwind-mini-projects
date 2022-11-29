import './App.css';
import Email from './components/email/email-subscribe';
import Product from './components/product-modal/product-modal';
import Gallery from './components/image-gallery/image-gallery';
import Quotes from './components/quotes/quotes';
import Layout from './components/layout';
import ClipBoard from './components/website-clipboard/website-clipboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="product" element={<Product />} />
          <Route path="email" element={<Email />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="quotes" element={<Quotes />} />
        </Route>
        <Route path="clipboard" element={<ClipBoard />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
