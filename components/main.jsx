import ProductTile from './catalog/product-tile';
import HomeInfo from './homepage/home-info';

export default function Main() {
  return (
    <main className="content">
      <section className="home-mobile-image mb-4 d-block d-lg-none">
        <img src="./images/monochrome-mobile.png" alt="Monochrome"></img>

        <div className="inner container">
          <a className="cta" href="" title="New in">
            New in
          </a>
        </div>
      </section>

      <section className="container">
        <section className="home-catalog-preview">
          <header className="home-catalog-title">
            <h1 className="d-none d-lg-block">New Stuff</h1>
            <h1 className="d-block d-lg-none">Spring Collection</h1>
          </header>

          <div className="d-none d-lg-block">
            <section className="product-tiles">
              <ProductTile></ProductTile>

              <ProductTile></ProductTile>

              <ProductTile></ProductTile>

              <ProductTile></ProductTile>
            </section>
          </div>

          <section className="product-tiles-mobile d-flex justify-content-around gap-3 mt-3 mb-4 d-block d-lg-none">
            <ProductTile></ProductTile>

            <ProductTile></ProductTile>
          </section>
        </section>

        <section className="home-catalog-preview">
          <header className="home-catalog-title">
            <h1 className="d-none d-lg-block">Most Loved</h1>
            <h1 className="d-block d-lg-none">Best reviewed</h1>
          </header>

          <div className="d-none d-lg-block">
            <section className="product-tiles">
              <ProductTile></ProductTile>

              <ProductTile></ProductTile>

              <ProductTile></ProductTile>

              <ProductTile></ProductTile>
            </section>
          </div>

          <section className="product-tiles-mobile d-flex justify-content-around gap-3 mt-3 mb-5 d-block d-lg-none">
            <ProductTile></ProductTile>

            <ProductTile></ProductTile>
          </section>
        </section>

        <HomeInfo></HomeInfo>

        <section className="home-catalog-preview">
          <header className="home-catalog-title">
            <h1>Mens</h1>
          </header>

          <div className="d-none d-lg-block">
            <section className="product-tiles">
              <ProductTile></ProductTile>

              <ProductTile></ProductTile>

              <ProductTile></ProductTile>

              <ProductTile></ProductTile>
            </section>
          </div>

          <section className="product-tiles-mobile d-flex justify-content-around gap-3 mt-3 mb-4 d-block d-lg-none">
            <ProductTile></ProductTile>

            <ProductTile></ProductTile>
          </section>

          <footer>
            <a className="cta d-none d-lg-block" href="" title="View all">
              View all
            </a>
          </footer>
        </section>

        <section className="home-catalog-preview">
          <header className="home-catalog-title">
            <h1>Womens</h1>
          </header>

          <div className="d-none d-lg-block">
            <section className="product-tiles">
              <ProductTile></ProductTile>

              <ProductTile></ProductTile>

              <ProductTile></ProductTile>

              <ProductTile></ProductTile>
            </section>
          </div>

          <section className="product-tiles-mobile d-flex justify-content-around gap-3 mt-3 mb-4 d-block d-lg-none">
            <ProductTile></ProductTile>

            <ProductTile></ProductTile>
          </section>

          <footer>
            <a className="cta" href="" title="View all">
              View all
            </a>
          </footer>
        </section>
      </section>
    </main>
  );
}
