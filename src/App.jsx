import "./styles/styles.css"

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Privy by IDfy</h1>
        <nav className="nav">
          <a href="#about">About Us</a>
          <a href="#products">Products</a>
          <a href="#resources">Resources</a>
          <button className="book-demo">Book Demo</button>
        </nav>
      </header>

      <main className="main-content">
        <h2>A comprehensive consent governance suite for all enterprises</h2>
        <div className="cards">
          <div className="card">
            <h3>Inspect AI</h3>
            <p className="tagline">The compliance co-pilot</p>
            <p>
              A tool designed for Privacy & Info-sec teams to perform DPDP gap
              assessments in less than a minute.
            </p>
            <a href="#inspect">Explore Inspect AI →</a>
          </div>
          <div className="card">
            <h3>Consent Governance Platform</h3>
            <p className="tagline">The custodian of consents</p>
            <p>
              A Governance platform that will streamline your organization to
              collect, store and manage consents the compliant way.
            </p>
            <a href="#cgp">Explore CGP →</a>
          </div>
          <div className="card">
            <h3>Cookie Manager</h3>
            <p className="tagline">The website compliance manager</p>
            <p>Platform that manages cookie consents on your website</p>
            <a href="#cookie">Explore Cookie Manager →</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
