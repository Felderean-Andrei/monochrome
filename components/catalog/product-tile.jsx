export default function ProductTile() {
  return (
    <article className="product-tile">
      <div className="product-tile-image">
        <picture>
          <a href="" title="Monochrome">
            <img
              src="./images/products/recently_viewed_thumbnail_2-5.png"
              alt="Monochrome"
            ></img>
          </a>
        </picture>

        <a className="product-tile-wishlist" href="" title="Wishlist">
          <i className="fa-solid fa-heart"></i>
        </a>
      </div>

      <h1 className="product-tile-title">
        <a href="" title="Monochrome">
          Monochrome
        </a>
      </h1>

      <section className="product-tile-pricing">
        <span>$425</span>
      </section>
    </article>
  );
}
