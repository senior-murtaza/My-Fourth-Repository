export default function Cards() {
  return (
    <div className="cards-page">
      <h1>Our Services</h1>
      <p className="subtitle">Choose a service that you need</p>

      <div className="cards-container">

        <div className="card">
          <h2>Web Development</h2>
          <p>Build modern and responsive websites.</p>
          <span>$50</span>
          <button>View More</button>
        </div>

        <div className="card">
          <h2>Graphic Design</h2>
          <p>Create beautiful and creative designs.</p>
          <span>$30</span>
          <button>View More</button>
        </div>

        <div className="card">
          <h2>UI/UX Design</h2>
          <p>Design simple and user-friendly interfaces.</p>
          <span>$40</span>
          <button>View More</button>
        </div>

        <div className="card">
          <h2>Mobile Apps</h2>
          <p>Build applications for mobile devices.</p>
          <span>$70</span>
          <button>View More</button>
        </div>

        <div className="card">
          <h2>SEO</h2>
          <p>Improve your website's search visibility.</p>
          <span>$35</span>
          <button>View More</button>
        </div>

        <div className="card">
          <h2>Digital Marketing</h2>
          <p>Grow your business and reach more people.</p>
          <span>$60</span>
          <button>View More</button>
        </div>

      </div>
    </div>
  );
}