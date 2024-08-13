import React from "react";

function Homepage(){
    return(
        <>
            <section id="hero">
                <h1>Dopest dang in Utah.</h1>
                <div id="hero-container">
                    <div id="hero-left">
                        <p>Come to the most trusted suppliers of cannabis and complimentary products in Mthatha. We supply to places around town and you may also visit us our store at Madeira Street.</p>
                        <p>From weed buds, hash, oils, vapes, pre-rolls, munchies, etc, we offer you a once-stop shop for the best cannabis products in town. It's a zero-risk sum.</p>
                        <span>Live a crystalline life and get special produce from people who care for your well-being.</span> <br />
                        <button>View products</button>
                    </div>

                    <div id="hero-right">
                        <img src="#" alt="picture of cannabis products" />
                    </div>
                </div>
            </section>

            <section id="favourites-carousel">
                <h2>View by customer favourites</h2>
                <marquee loop="1" scrollamount="12" width="100%">
                    <div>
                        <article>
                            <h3>Fresh Bud</h3>
                            <div>
                                <img src="../public/logo512.png" alt="carousel" width="210px" height="auto" />
                            </div>
                        </article>
                        <article>
                            <h3>Hash</h3>
                            <div>
                                <img src="../public/logo512.png" alt="carousel" width="210px" height="auto" />
                            </div>
                        </article>
                        <article>
                            <h3>Pollen</h3>
                            <div>
                                <img src="../public/logo512.png" alt="carousel" width="210px" height="auto" />
                            </div>
                        </article>
                        <article>
                            <h3>Pre-rolls</h3>
                            <div>
                                <img src="../public/logo512.png" alt="carousel" width="210px" height="auto" />
                            </div>
                        </article>
                        <article>
                            <h3>Space muffins</h3>
                            <div>
                                <img src="../public/logo512.png" alt="carousel" width="210px" height="auto" />
                            </div>
                        </article>
                    </div>
                </marquee>
                <button>View favourites</button>
            </section>

            <section id="specials-banner">
                <h4>Buy <span>Bulk</span></h4>
                <h3>And get special <span>offers</span></h3>
                <h2>At <em>Our Store</em></h2>
                <button>Visit store</button>
            </section>

            <section id="favourites-carousel" className="featured">
                <h2>Featured products</h2>
                <marquee loop="1" scrollamount="12" width="100%">
                    <div>
                        
                        <article>
                            <h3>THC Oil</h3>
                            <div>
                                <img src="../public/logo512.png" alt="carousel" width="210px" height="auto" />
                            </div>
                        </article>
                        <article>
                            <h3>Bong</h3>
                            <div>
                                <img src="../public/logo512.png" alt="carousel" width="210px" height="auto" />
                            </div>
                        </article>
                        <article>
                            <h3>Vapes</h3>
                            <div>
                                <img src="../public/logo512.png" alt="carousel" width="210px" height="auto" />
                            </div>
                        </article>
                        <article>
                            <h3>Crushers</h3>
                            <div>
                                <img src="../public/logo512.png" alt="carousel" width="210px" height="auto" />
                            </div>
                        </article>
                        <article>
                            <h3>Rolling machine</h3>
                            <div>
                                <img src="../public/logo512.png" alt="carousel" width="210px" height="auto" />
                            </div>
                        </article>
                    </div>
                </marquee>
                <button>View products</button>
            </section>
        </>
    );
}

export default Homepage;