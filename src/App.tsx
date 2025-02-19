
import './App.css'
import ButtonInverse from './componentes/ButtonInverse';
import ButtonPrimary from './componentes/ButtonPrimary';
import HeaderClient from './componentes/HeaderClient';
import ProductDetailsCard from './componentes/ProductDetailsCard';

export default function App() {

  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard />
          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}
