export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <section className="footer-contact d-none d-lg-block">
          <ul>
            <li>
              <a href="tel:+44 (0)10 2345 6789" title="Call us">
                Call us <br />
                +44 (0)10 2345 6789
              </a>
            </li>

            <li>
              <a href="" title="Email customer care">
                Email customer care
              </a>
            </li>
          </ul>
        </section>

        <section className="footer-nav">
          <div className="footer-nav-title d-block d-lg-none mt-4 mt-lg-0">
            <ul>
              <li>
                <h1>How can we help?</h1>
              </li>
            </ul>
          </div>

          <nav className="footer-nav-content mt-3 mt-lg-0">
            <ul>
              <li>
                <a href="" title="Style and fit" className="d-block d-lg-none">
                  Style and fit
                </a>
              </li>

              <li>
                <a
                  href=""
                  title="Style & fit advice"
                  className="d-none d-lg-block"
                >
                  Style & fit advice
                </a>
              </li>

              <li>
                <a href="" title="Faqs">
                  Faqs
                </a>
              </li>

              <li>
                <a href="" title="Delivery">
                  Delivery
                </a>
              </li>

              <li>
                <a
                  href=""
                  title="Exchanges & returns"
                  className="d-none d-lg-block"
                >
                  Exchanges & returns
                </a>
              </li>

              <li>
                <a href="" title="returns" className="d-block d-lg-none">
                  returns
                </a>
              </li>
            </ul>

            <div className="footer-nav-line d-block d-lg-none mt-1 mt-lg-0"></div>

            <ul>
              <li>
                <a href="" title="About us">
                  About us
                </a>
              </li>

              <li>
                <a href="" title="Careers">
                  Careers
                </a>
              </li>

              <li>
                <a href="" title="Affiliates">
                  Affiliates
                </a>
              </li>

              <li>
                <a href="" title="Advertising">
                  Adverstising
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer-nav-terms mt-5 mt-lg-0">
            <ul>
              <li>
                <a
                  href=""
                  title="Terms and Conditions"
                  className="d-block d-lg-none"
                >
                  terms & conditions
                </a>
              </li>

              <li>
                <a
                  href=""
                  title="Privacy and Coockies"
                  className="d-block d-lg-none"
                >
                  privacy & cookies
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="footer-connect">
          <div className="footer-newsletter">
            <h1 className="d-block d-lg-none">Lets connect</h1>

            <form>
              <label htmlFor="email" className="d-none d-lg-block">
                Sign up for our newsletter
              </label>

              <label htmlFor="email" className="d-block d-lg-none">
                Be the first to receive exclusives offers
              </label>

              <input
                className="footer-subscribe"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              ></input>
              <button className="subscribe-button" type="submit" title="Submit">
                Submit
              </button>

              <label htmlFor="email" className="d-block d-lg-none">
                I agree with {''}
                <a href="" title="Privacy Policy">
                  Privacy Policy
                </a>
                {''} and i want to receive emails from Monochrome
              </label>
            </form>
          </div>

          <div className="footer-social ">
            <h1 className="d-block d-lg-none">We are highly likeable</h1>

            <ul className="mt-2 mt-lg-0">
              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Youtube"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <i className="fa-brands fa-twitter-square"></i>
                </a>
              </li>

              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <i className="fa-brands fa-facebook-square"></i>
                </a>
              </li>

              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
}
