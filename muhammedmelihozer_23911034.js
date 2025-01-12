import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CV Oluşturucu</h1>
      </header>
      <main className="main-container">
        <section className="card" id="personal-info">
          <h2>Kişisel Bilgiler</h2>
          <img src="/profile.jpg" alt="Profil Fotoğrafı" className="profile-pic" />
          <p><strong>Ad:</strong> Muhammed Melih Özer</p>
          <p><strong>İletişim:</strong> muhammed.ozer@kun.edu.tr</p>
        </section>

        <section className="card" id="education">
          <h2>Eğitim Bilgileri</h2>
          <p><strong>Üniversite:</strong>Kapadokya Üniversitesi</p>
          <p><strong>Bölüm:</strong> Bilgisayar Programcılığı</p>
          <p><strong>Mezuniyet Yılı:</strong> Devam Ediyor</p>
        </section>

        <section className="card" id="experience">
          <h2>İş Deneyimi</h2>
          <p><strong>Şirket:</strong> Konneka Bilgi Ve İletişim Teknolojileri</p>
          <p><strong>Pozisyon:</strong> Sızma Testi Stajyeri</p>
          <p><strong>Çalışma Süresi:</strong> 2020-2021</p>
          <p><strong>Açıklama:</strong> Havelsana üretilen bir web application waf cihazı üzerinde sızma testi çalışmalarında bulundum</p>
        </section>

        <section className="card" id="skills">
          <h2>Yetenekler</h2>
          <ul>
            <li>Siber güvenlik</li>
            <li>Temel Düzeyde c++</li>
            <li>Python</li>
            <li>React.js</li>
          </ul>
        </section>

        <section className="card" id="hobbies">
          <h2>Hobiler ve İlgi Alanları</h2>
          <ul>
            <li>Kitap</li>
            <li>Finans</li>
            <li>Kopuz</li>
          </ul>
        </section>

        <section className="card" id="social-media">
          <h2>Sosyal Medya</h2>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;