/* eslint-disable react/prop-types */
let HomeCards = [
  {
    src: "img/house-1.jpeg",
    alt: "Home 1",
    HomeName: "Beautiful Family House",
    countryName: "USA",
    className: "home__img",
    rooms: "5 rooms",
    meters: "325 m²",
    price: "$100,000",
  },
  {
    src: "img/house-2.jpeg",
    alt: "Home 2",
    HomeName: "Modern Glass Villa",
    countryName: "Canada",
    className: "home__img",
    rooms: "6 rooms",
    meters: "450 m²",
    price: "$2,750,000",
  },
  {
    src: "img/house-3.jpeg",
    alt: "Home 3",
    HomeName: "Cozy Country House",
    countryName: "UK",
    className: "home__img",
    rooms: "4 rooms",
    meters: "250 m²",
    price: "$8,50,000",
  },
  {
    src: "img/house-4.jpeg",
    alt: "Home 4",
    HomeName: "Large Rustical Villa",
    countryName: "Portugal",
    className: "home__img",
    rooms: "6 rooms",
    meters: "400 m²",
    price: "$1,950,000",
  },
  {
    src: "img/house-5.jpeg",
    alt: "Home 5",
    HomeName: "Majestic Palace House",
    countryName: "Germany",
    className: "home__img",
    rooms: "18 rooms",
    meters: "4230 m²",
    price: "$9,500,000",
  },
  {
    src: "img/house-6.jpeg",
    alt: "Home 6",
    HomeName: "MOdern Famuily Apartment",
    countryName: "Italy",
    className: "home__img",
    rooms: "3 rooms",
    meters: "180 m²",
    price: "$600,000",
  },
];

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
      <section className="homes">
        {HomeCards.map((homeCard, index) => {
          return (
            <Homes
              key={index}
              src={homeCard.src}
              alt={homeCard.alt}
              HomeName={homeCard.HomeName}
              countryName={homeCard.countryName}
              rooms={homeCard.rooms}
              meters={homeCard.meters}
              price={homeCard.price}
            />
          );
        })}
      </section>
      <section className="gallery">Gallery</section>
      <footer className="footer">Footer</footer>
    </div>
  );
}

function Homes({ src, alt, HomeName, countryName, rooms, meters, price }) {
  return (
    <div className="home">
      <img src={src} alt={alt} className="home__img" />
      <svg className="home__like">
        <use href="/img/sprite.svg#icon-heart-full"></use>{" "}
      </svg>
      <h5 className="home__name">{HomeName}</h5>
      <div className="home__location">
        <svg>
          <use href="/img/sprite.svg#icon-map-pin"></use>
        </svg>
        <p>{countryName}</p>
      </div>
      <div className="home__rooms">
        <svg>
          <use href="/img/sprite.svg#icon-profile-male"></use>
        </svg>
        <p>{rooms}</p>
      </div>
      <div className="home__area">
        <svg>
          <use href="/img/sprite.svg#icon-expand"></use>
        </svg>
        <p>{meters}</p>
      </div>
      <div className="home__price">
        <svg>
          <use href="/img/sprite.svg#icon-key"></use>
        </svg>
        <p>{price}</p>
      </div>
      <button className="btn home__btn">Contact realtor</button>
    </div>
  );
}

export default App;
