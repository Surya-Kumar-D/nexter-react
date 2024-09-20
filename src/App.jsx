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
          <h4 className="heading-4">World's best luxury homes</h4>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href="/img/sprite.svg#icon-trophy"></use>
          </svg>
          <h4 className="heading-4">Only the best Properties</h4>
          <p className="feature__text">
            Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
            rerum sed a eligendi aut quia.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href="/img/sprite.svg#icon-map-pin"></use>
          </svg>
          <h4 className="heading-4">All homes in top locations</h4>
          <p className="feature__text">
            Tenetur distinctio necessitatibus pariatur voluptatibus quidem
            consequatur harum.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href="/img/sprite.svg#icon-key"></use>
          </svg>
          <h4 className="heading-4">New home in one week</h4>
          <p className="feature__text">
            Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href="/img/sprite.svg#icon-presentation"></use>
          </svg>
          <h4 className="heading-4">Top 1% realtors</h4>
          <p className="feature__text">
            Quidem consequatur harum, voluptatum mollitia quae. Tenetur
            distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href="/img/sprite.svg#icon-lock"></use>
          </svg>
          <h4 className="heading-4">Secure payments on nextor</h4>
          <p className="feature__text">
            Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
            quae.
          </p>
        </div>
      </section>
      <div className="story__pictures">Story pictures</div>
      <div className="story__content">Story content</div>
      <section className="homes">Homes</section>
      <section className="gallery">Gallery</section>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
