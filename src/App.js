import React from 'react';

import './App.css';

function App() {
  return (
    <main className="bio-main">
      <section className="bio-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
          alt="Daniel Hanák, Ing. - QA & Automation Enthusiast"
          className="bio-avatar"
          onError={e => { e.target.onerror = null; e.target.src = process.env.PUBLIC_URL + '/logo192.png'; }}
        />
        <h1>Daniel Hanák</h1>
        <h2>QA & Automation Enthusiast</h2>
        <p className="bio-desc">
          Jsem technický nadšenec, který miluje automatizaci, testování a hledání nových cest, jak věci zjednodušit a zefektivnit. Pracuji jako QA specialista, zajímám se o IT bezpečnost, výkonnost systémů a rád se učím nové technologie.
        </p>
        <ul className="bio-list">
          <li><strong>Rodina:</strong> Manželka, dvě děti a dva psi</li>
          <li><strong>Koníčky:</strong> Zahradničení, World of Warcraft, Star Wars</li>
          <li><strong>Osobní rozvoj:</strong> Chci začít s boxem</li>
        </ul>
        <div className="bio-links">
          <a href="https://www.linkedin.com/in/daniel-hanak/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:daniel.hanak@email.com">E-mail</a>
        </div>
      </section>

      <section className="bio-section">
        <h3>O mně</h3>
        <p>
          V IT světě se pohybuji už řadu let a nejvíc mě baví automatizace, testování a hledání chyb, které ostatním uniknou. Neustále se vzdělávám v oblasti IT security a performance. Věřím, že i malý detail může rozhodnout o kvalitě celého produktu.
        </p>
        <p>
          Kromě práce si užívám čas s rodinou, relaxuji na zahradě a občas se ponořím do světa World of Warcraft nebo Star Wars. Nově mě láká i box – rád zkouším nové výzvy.
        </p>
      </section>

      <section className="bio-section">
        <h3>Co mě vystihuje</h3>
        <ul>
          <li>Preciznost, smysl pro detail a chuť zlepšovat procesy</li>
          <li>Radost z automatizace a technických vychytávek</li>
          <li>Otevřenost novým technologiím a výzvám</li>
          <li>Rodina a férový přístup</li>
        </ul>
      </section>

      <section className="bio-section">
        <h3>Oblíbené motto</h3>
        <blockquote className="bio-quote">"Kvalita není náhoda, ale výsledek promyšleného úsilí."</blockquote>
      </section>

      <footer className="bio-footer">
        <span>© 2025 Ing. Daniel Hanák</span>
      </footer>
    </main>
  );
}

export default App;
