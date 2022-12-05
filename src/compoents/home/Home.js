import React from 'react';

const Home = () => {
    return (
        <div>
            <div>
                {/* ======= Header ======= */}
                <header id="header" className="fixed-top d-flex align-items-center">
                    <div className="container d-flex align-items-center">
                        <h1 className="logo me-auto"><a href="index.html">Sailor</a></h1>
                        {/* Uncomment below if you prefer to use an image logo */}
                        {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                        <nav id="navbar" className="navbar">
                            <ul>
                                <li><a href="index.html" className="active">Home</a></li>
                                <li className="dropdown"><a href="#"><span>About</span> <i className="bi bi-chevron-down" /></a>
                                    <ul>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="team.html">Team</a></li>
                                        <li><a href="testimonials.html">Testimonials</a></li>
                                        <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                                            <ul>
                                                <li><a href="#">Deep Drop Down 1</a></li>
                                                <li><a href="#">Deep Drop Down 2</a></li>
                                                <li><a href="#">Deep Drop Down 3</a></li>
                                                <li><a href="#">Deep Drop Down 4</a></li>
                                                <li><a href="#">Deep Drop Down 5</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="portfolio.html">Portfolio</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="index.html" className="getstarted">Login</a></li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle" />
                        </nav>{/* .navbar */}
                    </div>
                </header>{/* End Header */}
                {/* ======= Hero Section ======= */}
                <section id="hero">
                    <div id="heroCarousel" data-bs-interval={5000} className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <ol className="carousel-indicators" id="hero-carousel-indicators" />
                        <div className="carousel-inner" role="listbox">
                            {/* Slide 1 */}
                            <div className="carousel-item active" style={{ backgroundImage: 'url(assets/img/slide/slide-1.jpg)' }}>
                                <div className="carousel-container">
                                    <div className="container">
                                        <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Sailor</span></h2>
                                        <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                        <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 2 */}
                            <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/slide/slide-2.jpg)' }}>
                                <div className="carousel-container">
                                    <div className="container">
                                        <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                                        <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                        <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 3 */}
                            <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/slide/slide-3.jpg)' }}>
                                <div className="carousel-container">
                                    <div className="container">
                                        <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                                        <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                        <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
                        </a>
                        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
                        </a>
                    </div>
                </section>{/* End Hero */}
                <main id="main">
                    {/* ======= About Section ======= */}
                    <section id="about" className="about">
                        <div className="container">
                            <div className="row content">
                                <div className="col-lg-6">
                                    <h2>Eum ipsam laborum deleniti velitena</h2>
                                    <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0">
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <ul>
                                        <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
                                        <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                                        <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
                                    </ul>
                                    <p className="fst-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>{/* End About Section */}
                    {/* ======= Clients Section ======= */}
                    <section id="clients" className="clients section-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>{/* End Clients Section */}
                    {/* ======= Services Section ======= */}
                    <section id="services" className="services">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="icon-box">
                                        <i className="bi bi-briefcase" />
                                        <h4><a href="#">Lorem Ipsum</a></h4>
                                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4 mt-md-0">
                                    <div className="icon-box">
                                        <i className="bi bi-card-checklist" />
                                        <h4><a href="#">Dolor Sitema</a></h4>
                                        <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4 mt-md-0">
                                    <div className="icon-box">
                                        <i className="bi bi-bar-chart" />
                                        <h4><a href="#">Sed ut perspiciatis</a></h4>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4 mt-md-0">
                                    <div className="icon-box">
                                        <i className="bi bi-binoculars" />
                                        <h4><a href="#">Nemo Enim</a></h4>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4 mt-md-0">
                                    <div className="icon-box">
                                        <i className="bi bi-brightness-high" />
                                        <h4><a href="#">Magni Dolore</a></h4>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4 mt-md-0">
                                    <div className="icon-box">
                                        <i className="bi bi-calendar4-week" />
                                        <h4><a href="#">Eiusmod Tempor</a></h4>
                                        <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Services Section */}
                    {/* ======= Portfolio Section ======= */}
                    <section id="portfolio" className="portfolio">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <ul id="portfolio-flters">
                                        <li data-filter="*" className="filter-active">All</li>
                                        <li data-filter=".filter-app">App</li>
                                        <li data-filter=".filter-card">Card</li>
                                        <li data-filter=".filter-web">Web</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row portfolio-container">
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>App 1</h4>
                                            <p>App</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus" /></a>
                                                <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Web 3</h4>
                                            <p>Web</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                                                <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>App 2</h4>
                                            <p>App</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus" /></a>
                                                <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Card 2</h4>
                                            <p>Card</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus" /></a>
                                                <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Web 2</h4>
                                            <p>Web</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus" /></a>
                                                <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>App 3</h4>
                                            <p>App</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus" /></a>
                                                <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Card 1</h4>
                                            <p>Card</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus" /></a>
                                                <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Card 3</h4>
                                            <p>Card</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus" /></a>
                                                <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Web 3</h4>
                                            <p>Web</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                                                <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Portfolio Section */}
                </main>{/* End #main */}
                {/* ======= Footer ======= */}
                <footer id="footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="footer-info">
                                        <h3>Sailor</h3>
                                        <p>
                                            A108 Adam Street <br />
                                            NY 535022, USA<br /><br />
                                            <strong>Phone:</strong> +1 5589 55488 55<br />
                                            <strong>Email:</strong> info@example.com<br />
                                        </p>
                                        <div className="social-links mt-3">
                                            <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                                            <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                                            <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                                            <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                                            <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 footer-links">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 footer-links">
                                    <h4>Our Services</h4>
                                    <ul>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-6 footer-newsletter">
                                    <h4>Our Newsletter</h4>
                                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                    <form action method="post">
                                        <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="copyright">
                            © Copyright <strong><span>Sailor</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            {/* All the links in the footer should remain intact. */}
                            {/* You can delete the links only if you purchased the pro version. */}
                            {/* Licensing information: https://bootstrapmade.com/license/ */}
                            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/sailor-free-bootstrap-theme/ */}
                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                </footer>{/* End Footer */}
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
            </div>
        </div>
    );
};

export default Home;