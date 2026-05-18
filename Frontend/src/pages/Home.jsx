import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { valueCards, appStats, featuredDestinations, landingStories } from '../data'

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const carouselItem = featuredDestinations[carouselIndex]
  const total = featuredDestinations.length
  const nextSlide = () => setCarouselIndex((index) => (index + 1) % total)
  const prevSlide = () => setCarouselIndex((index) => (index - 1 + total) % total)
  const previewItems = useMemo(() => featuredDestinations.slice(0, 3), [])

  return (
    <main className="page-shell">
      <section className="hero-panel hero-tripadvisor">
        <div className="hero-bg">
          <img className="hero-bg-img md-block" src="https://images.pexels.com/photos/32692905/pexels-photo-32692905.jpeg" alt="hero background" />
          <div className="hero-bg-overlay" />
        </div>

        <div className="hero-copy">
          <span className="eyebrow">Explore Bangladesh</span>
          <h1>Plan Smart. Travel Together. Explore Bangladesh.</h1>
          <p>
            TripoBD helps you discover destinations, compare reviews, find top routes, and book with local confidence.
          </p>

          <div className="hero-search">
            <div className="search-bar">
              <span className="search-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <input className="search-input" placeholder="Where are you going? e.g. Cox's Bazar, Sundarbans" />
              <select className="search-select">
                <option>All</option>
                <option>Beaches</option>
                <option>Hills</option>
                <option>Forests</option>
                <option>City</option>
              </select>
              <button className="search-button button-primary">Search</button>
            </div>
            <div className="search-suggestions">
              <button className="pill">Top picks</button>
              <button className="pill">Budget trips</button>
              <button className="pill">Family friendly</button>
              <button className="pill">Weekend getaways</button>
            </div>
          </div>

          <div className="hero-actions">
            <div className="cta-gradient-group">
              <div className="cta-gradient" />
              <Link to="/discover" className="button button-secondary cta-main">
                Explore Destinations
              </Link>
            </div>
            <Link to="/discover" className="button button-tertiary">
              Join a Group
            </Link>
          </div>
        </div>
      </section>

      <section className="feature-cards categories-row">
        {valueCards.map((card) => (
          <article key={card.title} className="feature-card category-card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <section className="carousel-section">
        <div className="section-intro">
          <span className="eyebrow">Featured destinations</span>
          <h2>Discover Bangladesh’s most loved routes.</h2>
        </div>
        <div className="carousel-card featured-card">
          <div className="carousel-image" style={{ backgroundImage: `url(${carouselItem.hero})` }}>
            <div className="carousel-badge">{carouselItem.region}</div>
            <div className="rating-badge">{carouselItem.rating} ★</div>
          </div>
          <div className="carousel-copy">
            <h3>{carouselItem.name}</h3>
            <p>{carouselItem.summary}</p>
            <div className="destination-meta">
              <div className="meta-left">
                <span className="badge">{carouselItem.category}</span>
                <span className="rating small">{carouselItem.rating} · {carouselItem.reviews || 120} reviews</span>
              </div>
              <Link to={`/destination/${carouselItem.slug}`} className="button button-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-controls">
          <button onClick={prevSlide} className="icon-button">‹</button>
          <span>{carouselIndex + 1} / {total}</span>
          <button onClick={nextSlide} className="icon-button">›</button>
        </div>
        <div className="carousel-preview top-picks">
          {previewItems.map((item) => (
            <div key={item.slug} className="preview-item" onClick={() => setCarouselIndex(featuredDestinations.indexOf(item))}>
              <div className="preview-thumb" style={{ backgroundImage: `url(${item.hero})` }} />
              <div>
                <strong>{item.name}</strong>
                <p>{item.region}</p>
                <div className="rating small">{item.rating} ★</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="steps-section">
        <div className="section-intro">
          <span className="eyebrow">How it works</span>
          <h2>Plan your trip in three easy steps.</h2>
        </div>
        <div className="steps-grid">
          <div className="step-card">
            <strong>01</strong>
            <h3>Discover</h3>
            <p>Search destinations, compare routes and find the right plan.</p>
          </div>
          <div className="step-card">
            <strong>02</strong>
            <h3>Plan with Group</h3>
            <p>Invite friends, assign tasks and coordinate bookings together.</p>
          </div>
          <div className="step-card">
            <strong>03</strong>
            <h3>Book & Explore</h3>
            <p>Reserve guides, accommodations and set off with confidence.</p>
          </div>
        </div>
        
        <section className="top-choices">
          <div className="section-intro">
            <span className="eyebrow">Top choices</span>
            <h2>Traveler favorites and highly rated spots.</h2>
          </div>
          <div className="destination-grid">
            {featuredDestinations.map((d) => (
              <article key={d.slug} className="destination-card">
                <div className="card-image-container">
                  <div className="card-image" style={{ backgroundImage: `url(${d.hero})` }}>
                    <div className="card-rating-badge">{d.rating} ★</div>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">{d.name}</h3>
                    <span className="card-category-badge">{d.category}</span>
                  </div>
                  <div className="card-metadata">
                    <span className="card-region">{d.region}</span>
                  </div>
                  <div className="card-actions-primary">
                    <Link to={`/destination/${d.slug}`} className="button button-primary button-action">View</Link>
                    <button className="button button-secondary button-action">❤ Save</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="stats-section">
        {appStats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <strong>{stat.value.toLocaleString()}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="stories-section">
        <div className="section-intro">
          <span className="eyebrow">Community trip stories</span>
          <h2>Recent journeys shared by travelers.</h2>
        </div>
        <div className="story-grid">
          {landingStories.map((story) => (
            <article key={story.id} className="story-card" style={{ backgroundImage: `url(${story.image})` }}>
              <div className="story-overlay">
                <h3>{story.title}</h3>
                <p>{story.summary}</p>
                <div className="story-meta">
                  <span className="rating small">{story.rating || 4.8} ★</span>
                  <span className="meta-text">{story.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="chat-teaser">
        <div>
          <span className="eyebrow">AI Travel Assistant</span>
          <h2>Get instant recommendations for routes, budget and local tips.</h2>
          <p>Ask the assistant for destination ideas, itinerary suggestions and transport guidance.</p>
        </div>
        <div className="chat-card">
          <div className="chat-message chat-user">What is the best 4-day group route from Dhaka?</div>
          <div className="chat-message chat-bot">
            Try a mix of Dhaka → Sajek → Rangamati with one night in the hills and two nights by the lake. Add a group boat ride and local hill village guide.
          </div>
        </div>
      </section>

      <section className="download-banner">
        <div>
          <span className="eyebrow">Download the App</span>
          <h2>Take your Bangladesh travel plans with you, wherever you go.</h2>
          <p>Available on Google Play and the App Store for easy planning on mobile.</p>
        </div>
        <div className="download-buttons">
          <a href="#" className="button button-secondary">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Google Play
          </a>
          <a href="#" className="button button-secondary">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
            App Store
          </a>
        </div>
      </section>
    </main>
  )
}
