import React from 'react';

const HeroSection = () => {
    return (
        <div>
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
            </section>
        </div>
    );
};

export default HeroSection;