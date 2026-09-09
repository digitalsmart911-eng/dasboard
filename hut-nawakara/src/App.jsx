import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-11-09T00:00:00+07:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    updateCountdown();

    const timer = setInterval(
      updateCountdown,
      1000
    );

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (number) =>
    String(number).padStart(2, "0");

  return (
    <div className="app">

      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="background-noise"></div>

      <div className="background-grid"></div>

      <div className="bg-orb bg-orb-one"></div>
      <div className="bg-orb bg-orb-two"></div>
      <div className="bg-orb bg-orb-three"></div>


      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <header className="navbar">

        <a
          href="#home"
          className="navbar-logo"
        >
          <img
            src="/nawakara-logo.png"
            alt="Nawakara Security Solutions"
          />
        </a>


        <nav className="nav-menu">

          <a
            href="#home"
            className="active"
          >
            Home
          </a>

          <a href="#journey">
            Journey
          </a>

          <a href="#values">
            Values
          </a>

          <a href="#celebration">
            Celebration
          </a>

        </nav>


        <a
          href="#celebration"
          className="nav-button"
        >
          CELEBRATE WITH US
          <span>→</span>
        </a>

      </header>


      {/* =====================================================
          HERO
          ===================================================== */}

      <main
        id="home"
        className="hero"
      >

        {/* LEFT CONTENT */}

        <section className="hero-left">

          <div className="hero-eyebrow">

            <span className="eyebrow-line"></span>

            <span>
              CELEBRATING EXCELLENCE
            </span>

          </div>


          <h1 className="hero-title">

            <span>
              HUT
            </span>

            <strong>
              NAWAKARA
            </strong>

          </h1>


          <p className="hero-description">

            Bersama menjaga keamanan, membangun
            kepercayaan, dan menciptakan masa depan
            yang lebih baik.

          </p>


          <div className="hero-actions">

            <a
              href="#celebration"
              className="primary-button"
            >
              CELEBRATE WITH US

              <span>
                →
              </span>

            </a>


            <a
              href="#journey"
              className="outline-button"
            >
              OUR JOURNEY
            </a>

          </div>

        </section>


        {/* RIGHT VISUAL */}

        <section className="hero-right">

          <div className="visual-wrapper">


            {/* ORBITS */}

            <div className="orbit orbit-large"></div>

            <div className="orbit orbit-medium"></div>

            <div className="orbit orbit-small"></div>


            {/* GLOBE */}

            <div className="globe">

              <div className="globe-dots"></div>

              <div className="globe-horizontal"></div>

              <div className="globe-vertical"></div>

            </div>


            {/* CENTER LOGO */}

            <div className="hero-logo">

              <img
                src="/nawakara-logo.png"
                alt="Nawakara"
              />

            </div>


            {/* LIGHT POINTS */}

            <span className="light-point point-one"></span>

            <span className="light-point point-two"></span>

            <span className="light-point point-three"></span>

            <span className="light-point point-four"></span>


            {/* SECURITY */}

            <div className="feature feature-security">

              <div className="feature-icon">
                ✓
              </div>

              <div>

                <strong>
                  SECURITY
                </strong>

                <span>
                  SAFER
                  <br />
                  TOMORROW
                </span>

              </div>

            </div>


            {/* SERVICE */}

            <div className="feature feature-service">

              <div className="feature-icon">
                ⚙
              </div>

              <div>

                <strong>
                  SERVICE
                </strong>

                <span>
                  STRONGER
                  <br />
                  TOGETHER
                </span>

              </div>

            </div>


            {/* INNOVATION */}

            <div className="feature feature-innovation">

              <div className="feature-icon">
                ♧
              </div>

              <div>

                <strong>
                  INNOVATION
                </strong>

                <span>
                  FOR A BRIGHTER
                  <br />
                  FUTURE
                </span>

              </div>

            </div>


            {/* TAGLINE */}

            <div className="visual-tagline">

              PLAN
              <span>–</span>
              PREVENT
              <span>–</span>
              PROTECT

            </div>

            <div className="tagline-line"></div>

          </div>

        </section>

      </main>


      {/* =====================================================
          COUNTDOWN
          ===================================================== */}

      <section
        id="celebration"
        className="countdown-section"
      >

        <div className="countdown-heading">

          <span></span>

          <h2>
            COUNTDOWN TO THE CELEBRATION
          </h2>

          <span></span>

        </div>


        <p className="countdown-date">
          09 NOVEMBER 2026
        </p>


        <div className="countdown">

          <div className="count-card">

            <strong>
              {formatNumber(timeLeft.days)}
            </strong>

            <span>
              DAYS
            </span>

          </div>


          <div className="count-card">

            <strong>
              {formatNumber(timeLeft.hours)}
            </strong>

            <span>
              HOURS
            </span>

          </div>


          <div className="count-card">

            <strong>
              {formatNumber(timeLeft.minutes)}
            </strong>

            <span>
              MINUTES
            </span>

          </div>


          <div className="count-card">

            <strong>
              {formatNumber(timeLeft.seconds)}
            </strong>

            <span>
              SECONDS
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          JOURNEY
          ===================================================== */}

      <section
        id="journey"
        className="content-section journey-section"
      >

        <div className="section-number">
          01
        </div>


        <div className="section-header">

          <span>
            OUR JOURNEY
          </span>

          <h2>
            Three Decades.
            <br />
            One Purpose.
          </h2>

        </div>


        <div className="journey-grid">

          <div className="journey-year">

            <span>
              ESTABLISHED
            </span>

            <strong>
              1996
            </strong>

            <div className="year-line"></div>

            <span>
              2026
            </span>

          </div>


          <div className="journey-text">

            <p>

              Tiga dekade perjalanan Nawakara
              dibangun melalui komitmen terhadap
              keamanan, profesionalisme, pelayanan,
              dan kepercayaan.

            </p>


            <p>

              Dari awal perjalanan pada tahun 1996
              hingga memasuki tahun ke-30,
              Nawakara terus berkembang menghadapi
              tantangan keamanan yang semakin dinamis.

            </p>


            <p className="gold-text">

              30 YEARS OF TRUST.

            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
          ===================================================== */}

      <section
        id="values"
        className="content-section values-section"
      >

        <div className="section-number">
          02
        </div>


        <div className="section-header">

          <span>
            OUR PRINCIPLES
          </span>

          <h2>
            Plan.
            <br />
            Prevent.
            <br />
            Protect.
          </h2>

        </div>


        <div className="values-grid">


          <article className="value-card">

            <div className="value-top">
              01
            </div>

            <div className="value-symbol">
              ◈
            </div>

            <h3>
              PLAN
            </h3>

            <p>

              Memahami kebutuhan, mengidentifikasi
              risiko, dan membangun strategi keamanan
              yang tepat.

            </p>

          </article>


          <article className="value-card">

            <div className="value-top">
              02
            </div>

            <div className="value-symbol">
              ◇
            </div>

            <h3>
              PREVENT
            </h3>

            <p>

              Mengantisipasi potensi ancaman melalui
              pendekatan preventif, teknologi,
              dan sumber daya profesional.

            </p>

          </article>


          <article className="value-card">

            <div className="value-top">
              03
            </div>

            <div className="value-symbol">
              ✦
            </div>

            <h3>
              PROTECT
            </h3>

            <p>

              Memberikan perlindungan terbaik untuk
              menciptakan lingkungan yang aman,
              nyaman, dan terpercaya.

            </p>

          </article>

        </div>

      </section>


      {/* =====================================================
          30 YEARS
          ===================================================== */}

      <section className="anniversary-section">

        <div className="anniversary-background">
          30
        </div>


        <div className="anniversary-content">

          <span>
            HUT NAWAKARA KE-30
          </span>

          <h2>
            30 YEARS
          </h2>

          <p>
            OF TRUST, SECURITY & INNOVATION
          </p>

          <div className="anniversary-line"></div>

          <p className="anniversary-message">

            Tiga puluh tahun perjalanan.
            <br />
            Satu komitmen untuk terus melindungi.

          </p>

        </div>

      </section>


      {/* =====================================================
          SECURITY / SERVICE / INNOVATION
          ===================================================== */}

      <section className="content-section capability-section">

        <div className="section-number">
          03
        </div>


        <div className="section-header">

          <span>
            WHAT DRIVES US
          </span>

          <h2>
            Security.
            <br />
            Service.
            <br />
            Innovation.
          </h2>

        </div>


        <div className="capability-grid">

          <div className="capability-item">

            <span>
              01
            </span>

            <h3>
              SECURITY
            </h3>

            <p>
              Menjaga keamanan sebagai
              prioritas utama.
            </p>

          </div>


          <div className="capability-item">

            <span>
              02
            </span>

            <h3>
              SERVICE
            </h3>

            <p>
              Memberikan pelayanan terbaik
              untuk membangun kepercayaan.
            </p>

          </div>


          <div className="capability-item">

            <span>
              03
            </span>

            <h3>
              INNOVATION
            </h3>

            <p>
              Mengembangkan solusi untuk
              kebutuhan keamanan masa depan.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL
          ===================================================== */}

      <section className="final-section">

        <div className="final-glow"></div>


        <div className="final-content">

          <img
            src="/nawakara-logo.png"
            alt="Nawakara"
            className="final-logo"
          />


          <span className="final-eyebrow">
            HUT NAWAKARA KE-30
          </span>


          <h2>

            TOGETHER

            <span>
              WE SECURE
            </span>

          </h2>


          <div className="final-line"></div>


          <p>

            Plan • Prevent • Protect

          </p>


          <p className="final-date">

            09 • 11 • 2026

          </p>

        </div>

      </section>


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="footer">

        <div className="footer-logo">

          <img
            src="/nawakara-logo.png"
            alt="Nawakara"
          />

        </div>


        <div className="footer-center">

          HUT NAWAKARA KE-30

        </div>


        <div className="footer-right">

          PLAN • PREVENT • PROTECT

        </div>

      </footer>

    </div>
  );
}

export default App;