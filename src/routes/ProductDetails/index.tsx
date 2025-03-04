import './styles.css';
import ButtonInverse from "../../componentes/ButtonInverse";
import ButtonPrimary from "../../componentes/ButtonPrimary";
import HeaderClient from "../../componentes/HeaderClient";
import ProductDetailsCard from "../../componentes/ProductDetailsCard";
import { ProductDTO } from '../../models/product';

const product: ProductDTO = {
    id: 2,
    name: "Smart TV",
    description: "Esta TV e bonita demais",
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
    price: 2500.99,
    categories: [
        {
            id: 2,
            name: "Eletronicos",
        },
        {
            id: 3,
            name: "Computadores",
        },
        {
            id: 4,
            name: "Importados"
        }
    ]
}

export default function ProductDetails() {
    return (
        <>
            <HeaderClient />
            <main>
                <section id="product-details-section" className="dsc-container">
                    <ProductDetailsCard product={product} />
                    <div className="dsc-btn-page-container">
                        <ButtonPrimary text="Comprar" />
                        <ButtonInverse text="Inicio" />
                    </div>
                </section>
            </main>
        </>
    );
}