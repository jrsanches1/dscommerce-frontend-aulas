import './styles.css';
import HeaderClient from '../../componentes/HeaderClient';
import SearchBar from '../../componentes/SearchBar';
import CatalogCard from '../../componentes/CatalogCard';
import ButtonNextPage from '../../componentes/ButtonNextPage';


export default function Catalog() {
    return (
        <>
            <HeaderClient />
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar />

                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                    </div>

                    <ButtonNextPage />
                </section>
            </main>
        </>
    );
}