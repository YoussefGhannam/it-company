  class MainHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header class="main-header clearfix">
          <div class="main-header__top clearfix">
            <div class="main-header__top-inner clearfix">
              <div class="main-header__top-left">
                <ul class="list-unstyled main-header__top-address">
                  <li>
                    <div class="icon">
                      <span class="icon-pin"></span>
                    </div>
                    <div class="text">
                      <p>Maroc, Casablanca</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <span class="icon-email"></span>
                    </div>
                    <div class="text">
                      <p><a href="mailto:support@gofoxi.com">support@gofoxi.com</a></p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="main-header__top-right">
                <div class="main-header__top-right-text">
                  <p><span>Nous recrutons :</span> Êtes-vous un développeur motivé et déterminé en design web ?</p>
                </div>
                <div class="main-header__top-right-social">
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-facebook"></i></a>
                  <a href="#"><i class="fab fa-pinterest-p"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <nav class="main-menu clearfix">
            <div class="main-menu-wrapper clearfix">
              <div class="main-menu-wrapper-inner clearfix">
                <div class="main-menu-wrapper__left clearfix">
                  <div class="main-menu-wrapper__logo">
                    <a href="index.html"><img src="assets/images/resources/logo-1.png" alt=""></a>
                  </div>
                  <div class="main-menu-wrapper__main-menu">
                    <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>
                    <ul class="main-menu__list">
                      <li><a href="index.html">Accueil</a></li>
                      <li><a href="about.html">À propos</a></li>
                      <li><a href="services.html">Services</a></li>
                      <li><a href="project.html">Projets</a></li>
                      <li><a href="news.html">Actualités</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div class="main-menu-wrapper__right">
                  <div class="main-menu-wrapper__call">
                    <div class="main-menu-wrapper__call-icon">
                      <img src="assets/images/shapes/phone-icon.png" alt="">
                    </div>
                    <div class="main-menu-wrapper__call-number">
                      <p>Vous avez des questions ?</p>
                      <h5><a href="tel:926668880000">Gratuit : + 92 666 888 0000</a></h5>
                    </div>
                  </div>
                  <div class="main-menu-wrapper__search-box-cart-box">
                    <a href="#" class="main-menu-wrapper__search search-toggler icon-magnifying-glass"></a>
                    <a href="contact.html" class="main-menu-wrapper__cart icon-avatar"></a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      `;
    }
  }

customElements.define('main-header', MainHeader);
