    class MainFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="site-footer site-footer-two">
            <div class="site-footer__top">
                <div class="container">
                    <div class="site-footer__top-inner">
                        <div class="site-footer-map" style="background-image: url(assets/images/shapes/site-footer-mape.png)"></div>
                        <div class="row">
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div class="footer-widget__column footer-widget__about">
                                    <div class="footer-widget__about-logo">
                                        <a href="index.html"><img loading="lazy" decoding="async" src="assets/images/resources/footer-logo.png" alt=""></a>
                                    </div>
                                    <p class="footer-widget__about-text">Nous offrons des solutions IT personnalisées pour améliorer la productivité et la sécurité de votre entreprise.</p>
                                    <div class="footer-widget__about-social">
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-facebook"></i></a>
                                        <a href="#"><i class="fab fa-linkedin"></i></a>
                                        <a href="#"><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div class="footer-widget__column footer-widget__links clearfix">
                                    <h3 class="footer-widget__title">Liens</h3>
                                    <ul class="footer-widget__links-list list-unstyled clearfix">
                                        <li><a href="about.html">À propos</a></li>
                                        <li><a href="team.html">Notre équipe</a></li>
                                        <li><a href="projects.html">Nos projets</a></li>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div class="footer-widget__column footer-widget__contact">
                                    <h3 class="footer-widget__title">Contact</h3>
                                    <p class="footer-widget__contact-text">Casablanca, Maroc</p>
                                    <ul class="list-unstyled footer-widget__contact-list">
                                        <li>
                                            <div class="icon">
                                                <span class="icon-email"></span>
                                            </div>
                                            <div class="text">
                                                <p><a href="mailto:support@izeetak.com">support@izeetak.com</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <span class="icon-telephone"></span>
                                            </div>
                                            <div class="text">
                                                <p><a href="tel:+212657840974">+212 6 57840974</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div class="footer-widget__column footer-widget__newsletter">
                                    <h3 class="footer-widget__title">Newsletter</h3>
                                    <p class="footer-widget__newsletter-text">Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et mises à jour.</p>
                                    <form class="footer-widget__newsletter-form mc-form">
                                        <div class="footer-widget__newsletter-input-box">
                                            <input type="email" placeholder="Adresse email" name="email">
                                            <button type="submit" class="footer-widget__newsletter-btn">Envoyer</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-footer__bottom">
                <div class="site-footer__bottom-container">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="site-footer__bottom-inner">
                                    <div class="site-footer__bottom-left">
                                        <p class="site-footer__bottom-text">© Tous droits réservés. <span class="dynamic-year"></span> par <a href="#">Izeetak</a></p>
                                    </div>
                                    <div class="site-footer__bottom-right">
                                        <ul class="list-unstyled site-footer__bottom-menu">
                                            <li><a href="terms.html">Termes & Conditions</a></li>
                                            <li><span>/</span></li>
                                            <li><a href="privacy.html">Politique de confidentialité</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      `;
    }
  }

customElements.define('main-footer', MainFooter);
