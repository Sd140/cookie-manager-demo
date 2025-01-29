import "./styles/styles.css";
import banner from "./assets/home_banner_bg.png";
import scroll from "./assets/scroll_down.png";
import idfyLogo from "./assets/idfy_logo.png"

function App() {
  return (
    <div className="container">
                    {/* youtube iframes */}
                    <div id="youtube-vid">
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/MS5jByTX_pk?si=H0EcHQpMyJdEWyPy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                </div>

              <div className="youtube-vid">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rYb4JNGShOM?si=K3yUbeStbhNIMYNJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
      <header className="header">
        <div className="header-logo-section">
          <h1>PRIVY</h1>
          <p>by</p>
          <img src={idfyLogo} alt="IDfy"></img>
        </div>
        <nav className="nav">
          <a href="#about">About Us</a>
          <a href="#products">Products</a>
          <a href="#resources">Resources</a>
          <button className="book-demo">Book Demo</button>
        </nav>
      </header>

      <section className="home-banner">
        <div className="home-banner-bg">
          <img src={banner} alt="."></img>
        </div>
        <div className="home-banner-ellipse home-banner-ellipse-1"></div>
        <div className="home-banner-ellipse home-banner-ellipse-2"></div>
        <div className="home-banner-ellipse home-banner-ellipse-3"></div>
        <div className="home-banner-main">
          <div className="home-banner-text">
            <div className="home-banner-slogan">
              MANAGE COOKIES, GAIN COMPLIANCE
            </div>
            <div className="home-banner-title">
              Customize Your Cookie Consent for Ultimate Compliance
            </div>
            <div className="home-banner-subtitle">
              Leverage our unique solution to simplify cookie management
            </div>
          </div>
        </div>
        <div className="home-banner-footer">
          <p><u>How would you like to manage your cookie settings today?</u></p>
          <span>Scroll Down <img src={scroll} alt="" /></span>
        </div>
      </section>

      <div className="section-31 data">
        <div className="container-12">
          <div className="home-data">
            <div className="hd-header">
              {/* <!-- Facebook Like Button --> */}
              <div>
                <div className="fb-like" data-href="https://cookie-manager.sanketsaboo.com" data-width="" data-layout="standard"
                  data-action="like" data-size="large" data-share="true"></div>

                {/* <!-- Facebook SDK --> */}
                <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0"
                  nonce="YOUR_NONCE">
                </script>
              </div>

              {/* <!-- Twitter Share Button --> */}
              <div>
                <a href="https://twitter.com/share" className="twitter-share-button" data-text="Check out this awesome site!"
                  data-url="https://cookie-manager.sanketsaboo.com" data-hashtags="example,website" data-show-count="false">
                  Tweet
                </a>

                {/* <!-- Twitter SDK --> */}
                <script async src="https://platform.twitter.com/widgets.js"></script>
              </div>
              <div>
                {/* Pinterest Save Button */}
                <a data-pin-do="buttonPin" href="https://www.pinterest.com/pin/create/button/" data-pin-custom="true">
                  <img src="https://assets.pinterest.com/images/pidgets/pinit_fg_en_rect_red_20.png" />
                </a>

                {/* <!-- Pinterest SDK --> */}
                <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
              </div>

              {/* video with cookies */}
              <iframe
                src="https://open.spotify.com/embed/track/7ouMYWpwJ422jRcDASZB7P"
                width="300"
                height="380"
                allow="encrypted-media">
              </iframe>

              <img src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1" width="1" height="1" />



              <h2 data-w-id="877904d2-8fa1-ad57-8a62-e5aaf389adda" style={{ opacity: 1, transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} className="heading-76">
                A comprehensive consent governance suite for all enterprises
              </h2>
              <div className="div-block-21 mt20">
              </div>
            </div>
          </div>
          <div className="hd-content">
            <div data-w-id="a2ba9228-f7c1-f0c8-bf61-eb098024b59b" style={{ opacity: 1, transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} className="hd-wrapper">
              <div className="hd-inner">
                <h2 className="heading-75">
                  Inspect AI
                </h2>
                <div className="div-block-21">
                </div>
                <div className="paragraph-14px-3">
                  The compliance co-pilot
                </div>
              </div>
              <div className="paragraph-16px-4">
                A tool designed for Privacy &amp; Info-sec teams to perform DPDP gap assessments in less <br />than a minute.</div>
              <div className="div-block-20">
                <a href="/inspect-ai" className="link-6">
                  Explore Inspect AI
                </a>
                <img src="https://cdn.prod.website-files.com/65f7dd1d0e60ce666af29650/668e6ca84e4730a2ef3fa896_arrow_forward.png" loading="lazy" alt="" />
              </div>
            </div>
            <div data-w-id="a2ba9228-f7c1-f0c8-bf61-eb098024b5a5" style={{ opacity: 1, transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} className="hd-wrapper">
              <div className="hd-inner">
                <h2 className="heading-73">
                  Consent Governance<br />Platform
                </h2>
                <div className="div-block-21">
                </div>
                <div className="paragraph-14px-3">
                  The custodian off consents
                </div>
              </div>
              <div className="paragraph-16px-4">
                A Governance platform that will streamline your organisation to collect, store and manage&nbsp;&nbsp;consents the compliant way.
              </div>
              <div className="div-block-20">
                <a href="/cgp" className="link-6">
                  Explore CGP
                </a>
                <img src="https://cdn.prod.website-files.com/65f7dd1d0e60ce666af29650/668e6ca84e4730a2ef3fa896_arrow_forward.png" loading="lazy" alt="" />
              </div>
            </div>
            <div data-w-id="a2ba9228-f7c1-f0c8-bf61-eb098024b5af" style={{ opacity: 1, transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} className="hd-wrapper last">
              <div className="hd-inner">
                <h2 className="heading-74">
                  Cookie<br />Manager
                </h2>
                <div className="div-block-21">
                </div>
                <div className="paragraph-14px-3">
                  The website compliance manager
                </div>
              </div>
              <div className="paragraph-16px-4">
                Platform that manages cookie consents on your website
              </div>
              <div className="div-block-20">
                <a href="/category/cookies" className="link-6">
                  Explore cookies manager
                </a>
                <img src="https://cdn.prod.website-files.com/65f7dd1d0e60ce666af29650/668e6ca84e4730a2ef3fa896_arrow_forward.png" loading="lazy" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <main className="main-content">
        <h2>A comprehensive consent governance suite for all enterprises</h2>
        <div className="cards">
          <div className="card">
            <h3>Inspect AI</h3>
            <p className="tagline">The compliance co-pilot</p>
            <p className="description">
              A tool designed for Privacy & Info-sec teams to perform DPDP gap
              assessments in less than a minute.
            </p>
            <a href="#inspect">Explore Inspect AI →</a>
          </div>
          <div className="card">
            <h3>Consent Governance Platform</h3>
            <p className="tagline">The custodian of consents</p>
            <p className="description">
              A Governance platform that will streamline your organization to
              collect, store and manage consents the compliant way.
            </p>
            <a href="#cgp">Explore CGP →</a>
          </div>
          <div className="card">
            <h3>Cookie Manager</h3>
            <p className="tagline">The website compliance manager</p>
            <p className="description">Platform that manages cookie consents on your website</p>
            <a href="#cookie">Explore Cookie Manager →</a>
          </div>
        </div>
      </main> */}
    </div>
  );
};

export default App;
