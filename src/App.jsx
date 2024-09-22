function App() {
  return (
    <div className="container">
      <div className="sidebar">Sidebar</div>
      <header className="header">Header</header>
      <div className="realtors">Top 3 realtors</div>
      <section className="features">
        <div className="feature">
          <svg className="feature__icon">
            <use href="/img/sprite.svg#icon-global"></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            World&apos;s best luxury homes
          </h4>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href="/img/sprite.svg#icon-trophy"></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            Only the best Properties
          </h4>
          <p className="feature__text">
            Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
            rerum sed a eligendi aut quia.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href="/img/sprite.svg#icon-map-pin"></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            All homes in top locations
          </h4>
          <p className="feature__text">
            Tenetur distinctio necessitatibus pariatur voluptatibus quidem
            consequatur harum.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href="/img/sprite.svg#icon-key"></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">New home in one week</h4>
          <p className="feature__text">
            Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href="/img/sprite.svg#icon-presentation"></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
          <p className="feature__text">
            Quidem consequatur harum, voluptatum mollitia quae. Tenetur
            distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href="/img/sprite.svg#icon-lock"></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            Secure payments on nextor
          </h4>
          <p className="feature__text">
            Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
            quae.
          </p>
        </div>
      </section>
      <div className="story__pictures">
        <img
          src="/img/story-1.jpeg"
          alt="Couple with new house"
          className="story__img--1"
        />
        <img
          src="/img/story-2.jpeg"
          alt="Couple with new house"
          className="story__img--2"
        />
      </div>
      <div className="story__content">
        <h3 className="heading-3 mb-sm">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark mb-md">
          &ldquo;The best decision of our life&rdquo;
        </h2>
        <p className="story__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <button className="btn">Find your own world</button>
      </div>
      <section className="homes">Homes</section>
      <section className="gallery">Gallery</section>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
