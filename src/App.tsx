import "./App.css";
import BookingSection from "./components/booking/BookingSection";
import CancelBooking from "./components/booking/CancelBooking";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a href="#home" className="brand">
          BOSSHEAD
          <span>BARBERSHOP</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#promo">Promo</a>
          <a href="#membership">Membership</a>
          <a href="#gallery">Gallery</a>
          <a href="#location">Location</a>
        </div>

        <a href="#booking" className="nav-booking">
          BOOK NOW
        </a>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-overlay" />

          <div className="hero-content">
            <p className="hero-label">EST. SURABAYA</p>

            <h1>
              LOOK SHARP.
              <br />
              <span>STAY BOSS.</span>
            </h1>

            <p className="hero-description">
              More than just a haircut. Find your style, choose your barber, and
              book your seat.
            </p>

            <div className="hero-actions">
              <a href="#booking" className="primary-button">
                BOOK YOUR SEAT
              </a>

              <a href="#services" className="secondary-button">
                EXPLORE SERVICES
              </a>
            </div>
          </div>

          <div className="hero-info">
            <div>
              <span>OPEN DAILY</span>
              <strong>11:00 — 21:00</strong>
            </div>

            <div>
              <span>LOCATION</span>
              <strong>Surabaya, Jawa Timur</strong>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>SCROLL</span>
            <div className="scroll-line" />
          </div>
        </section>

        <section id="promo" className="promo-section">
          <div className="section-heading">
            <div>
              <p className="section-number">01 / CURRENT OFFERS</p>

              <h2>
                FRESH DEALS.
                <br />
                <span>SHARPER LOOKS.</span>
              </h2>
            </div>

            <p className="section-description">
              Nikmati promo aktif BOSSHEAD dan tetap tampil maksimal dengan
              harga yang lebih hemat.
            </p>
          </div>

          <div className="promo-grid">
            <article className="promo-card promo-unair">
              <div className="promo-image-wrapper">
                <img
                  src="/promo/bosshead-promo-unair-ui.png"
                  alt="Promo khusus mahasiswa FEB UNAIR"
                  className="promo-image"
                />

                <span className="promo-badge">STUDENT DEAL</span>
              </div>

              <div className="promo-card-content">
                <div>
                  <p className="promo-type">FEB UNAIR SPECIAL</p>
                  <h3>DISCOUNT RP15.000</h3>
                </div>

                <p>
                  Khusus mahasiswa aktif FEB UNAIR dengan menunjukkan KTM atau
                  E-KTM.
                </p>

                <span className="promo-validity">
                  Berlaku sesuai syarat dan ketentuan
                </span>
              </div>
            </article>

            <article className="promo-card promo-traveloka">
              <div className="promo-image-wrapper">
                <img
                  src="/promo/bosshead-promo-traveloka-ui.png"
                  alt="Promo Traveloka Xperience"
                  className="promo-image"
                />

                <span className="promo-badge">PARTNER DEAL</span>
              </div>

              <div className="promo-card-content">
                <div>
                  <p className="promo-type">TRAVELOKA XPERIENCE</p>
                  <h3>DISCOUNT UP TO 30%</h3>
                </div>

                <p>
                  Temukan BOSSHEAD melalui Traveloka Xperience dan gunakan kode
                  promo yang tersedia.
                </p>

                <span className="promo-validity">Kode kupon: MATURNUWUN</span>
              </div>
            </article>
          </div>

          <p className="promo-note">
            *Promo mengikuti syarat, ketentuan, dan periode yang berlaku.
          </p>
        </section>

        <section id="services" className="services-section">
          <div className="services-heading">
            <div>
              <p className="section-number">02 / OUR SERVICES</p>

              <h2>
                PICK YOUR
                <br />
                <span>FRESH LOOK.</span>
              </h2>
            </div>

            <p className="section-description">
              Dari potongan rambut klasik sampai perawatan lengkap, pilih
              layanan yang paling sesuai dengan gaya dan kebutuhanmu.
            </p>
          </div>

          <div className="services-layout">
            <div className="services-list">
              <article className="service-card featured-service">
                <div className="service-top">
                  <span className="service-number">01</span>
                  <span className="service-popular">MOST POPULAR</span>
                </div>

                <div className="service-content">
                  <div>
                    <h3>HAIRCUT ONLY</h3>

                    <p>
                      Potongan rambut dengan konsultasi gaya bersama barber
                      BOSSHEAD.
                    </p>
                  </div>

                  <div className="service-price">
                    <span>START FROM</span>
                    <strong>50K</strong>
                  </div>
                </div>

                <div className="service-meta">
                  <span>± 30–45 MINUTES</span>
                  <span>4 BARBERS AVAILABLE</span>
                </div>
              </article>

              <article className="service-card">
                <div className="service-top">
                  <span className="service-number">02</span>
                  <span className="service-category">COMPLETE CARE</span>
                </div>

                <div className="service-content">
                  <div>
                    <h3>BOSSHEAD PACKAGE</h3>

                    <p>
                      Haircut, hair wash, hair tonic, massage, hot towel,
                      styling, dan pomade.
                    </p>
                  </div>

                  <div className="service-price">
                    <span>START FROM</span>
                    <strong>60K</strong>
                  </div>
                </div>

                <div className="service-meta">
                  <span>± 30–45 MINUTES</span>
                  <span>FULL TREATMENT</span>
                </div>
              </article>

              <div className="additional-services">
                <p>MORE SERVICES</p>

                <div className="additional-service-row">
                  <span>Kids Package</span>
                  <strong>50K</strong>
                </div>

                <div className="additional-service-row">
                  <span>Package + Shaving</span>
                  <strong>75K</strong>
                </div>

                <div className="additional-service-row">
                  <span>Shaving</span>
                  <strong>30K</strong>
                </div>

                <div className="additional-service-row">
                  <span>Family Package</span>
                  <strong>100K</strong>
                </div>

                <div className="additional-service-row">
                  <span>Women&apos;s Haircut</span>
                  <strong>75K</strong>
                </div>
              </div>

              <a href="#booking" className="services-booking-button">
                <span>CHOOSE YOUR SERVICE</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="price-list-visual">
              <div className="price-list-label">
                <span>FULL MENU</span>
                <span>BOSSHEAD BARBERSHOP</span>
              </div>

              <div className="price-list-frame">
                <img
                  src="/services/bosshead-pricelist-ui.png"
                  alt="Daftar lengkap layanan dan harga BOSSHEAD Barbershop"
                />
              </div>

              <p className="price-list-note">
                Harga dapat berubah mengikuti kebijakan BOSSHEAD Barbershop.
              </p>
            </div>
          </div>
        </section>

        <section id="membership" className="membership-section">
          <div className="membership-heading">
            <div>
              <p className="section-number">03 / MEMBERSHIP</p>

              <h2>
                LOYALTY HAS
                <br />
                <span>ITS PERKS.</span>
              </h2>
            </div>

            <p className="section-description">
              Setiap kunjungan membawamu semakin dekat dengan reward eksklusif
              dari BOSSHEAD Barbershop.
            </p>
          </div>

          <div className="membership-layout">
            <div className="member-card-area">
              <input
                type="checkbox"
                id="member-card-toggle"
                className="member-card-toggle"
              />

              <label
                htmlFor="member-card-toggle"
                className="member-card-scene"
                aria-label="Klik untuk melihat sisi lain kartu member"
              >
                <div className="member-card-object">
                  <div className="member-card-face member-card-front">
                    <img
                      src="/membership/bosshead-member-front-ui.png"
                      alt="Kartu member BOSSHEAD bagian depan"
                    />
                  </div>

                  <div className="member-card-face member-card-back">
                    <img
                      src="/membership/bosshead-member-back-ui.png"
                      alt="Kartu member BOSSHEAD bagian belakang"
                    />
                  </div>
                </div>
              </label>

              <label htmlFor="member-card-toggle" className="flip-card-button">
                <span className="flip-icon">↻</span>
                <span>CLICK TO FLIP THE CARD</span>
              </label>
            </div>

            <div className="membership-content">
              <p className="membership-tag">BOSSHEAD LOYALTY PROGRAM</p>

              <h3>
                COME FRESH.
                <br />
                LEAVE REWARDED.
              </h3>

              <p className="membership-intro">
                Tunjukkan kartu member kepada kasir sebelum melakukan transaksi,
                kumpulkan stamp kunjungan, lalu nikmati reward yang tersedia.
              </p>

              <div className="membership-benefits">
                <article className="benefit-card">
                  <span className="benefit-number">01</span>

                  <div>
                    <p>MEMBER REWARD</p>
                    <strong>10K DISCOUNT</strong>
                  </div>
                </article>

                <article className="benefit-card">
                  <span className="benefit-number">02</span>

                  <div>
                    <p>ULTIMATE REWARD</p>
                    <strong>FREE BOSSHEAD PACKAGE</strong>
                  </div>
                </article>
              </div>

              <div className="membership-steps">
                <div>
                  <span>01</span>
                  <p>GET YOUR MEMBER CARD</p>
                </div>

                <div>
                  <span>02</span>
                  <p>COLLECT YOUR STAMPS</p>
                </div>

                <div>
                  <span>03</span>
                  <p>UNLOCK YOUR REWARD</p>
                </div>
              </div>

              <a
                href="https://wa.me/6281233714565?text=Halo%20BOSSHEAD%2C%20saya%20ingin%20bertanya%20tentang%20membership."
                target="_blank"
                rel="noreferrer"
                className="membership-button"
              >
                <span>ASK ABOUT MEMBERSHIP</span>
                <span aria-hidden="true">↗</span>
              </a>

              <p className="membership-terms">
                *Reward mengikuti stamp, syarat, dan ketentuan yang berlaku di
                BOSSHEAD Barbershop.
              </p>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery-section">
          <div className="gallery-heading">
            <div>
              <p className="section-number">04 / OUR SPACE</p>

              <h2>
                STEP INSIDE.
                <br />
                <span>FEEL THE VIBE.</span>
              </h2>
            </div>

            <p className="section-description">
              Suasana industrial, detail vintage, dan karakter khas BOSSHEAD
              yang membuat setiap kunjungan terasa berbeda.
            </p>
          </div>

          <div className="gallery-grid">
            <figure className="gallery-item">
              <img
                src="/venue/bosshead-front.png"
                alt="Bagian depan BOSSHEAD Barbershop"
                loading="lazy"
              />
              <figcaption>
                <div>
                  <span>01</span>
                  <p>THE ENTRANCE</p>
                </div>
                <strong>SURABAYA</strong>
              </figcaption>
            </figure>

            <figure className="gallery-item">
              <img
                src="/venue/bosshead-waiting.png"
                alt="Ruang tunggu BOSSHEAD Barbershop"
                loading="lazy"
              />
              <figcaption>
                <div>
                  <span>02</span>
                  <p>WAITING AREA</p>
                </div>
                <strong>TAKE YOUR SEAT</strong>
              </figcaption>
            </figure>

            <figure className="gallery-item">
              <img
                src="/gallery/bosshead-wall-collage-hd.png"
                alt="Dekorasi poster vintage BOSSHEAD Barbershop"
                loading="lazy"
              />
              <figcaption>
                <div>
                  <span>03</span>
                  <p>VINTAGE DETAILS</p>
                </div>
                <strong>THE BOSSHEAD WALL</strong>
              </figcaption>
            </figure>

            <figure className="gallery-item">
              <img
                src="/gallery/bosshead-wall-onepiece-hd.png"
                alt="Dekorasi One Piece BOSSHEAD Barbershop"
                loading="lazy"
              />
              <figcaption>
                <div>
                  <span>04</span>
                  <p>WANTED WALL</p>
                </div>
                <strong>DETAILS WITH CHARACTER</strong>
              </figcaption>
            </figure>
          </div>

          <div className="gallery-footer">
            <p>SCROLL AND DISCOVER THE BOSSHEAD EXPERIENCE.</p>

            <a href="#booking">
              VISIT BOSSHEAD
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
        <BookingSection />
        <CancelBooking />
      </main>
    </div>
  );
}

export default App;
