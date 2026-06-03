import React from 'react';
import { Link } from 'react-router-dom';

const songs = [
  {
    id: 1,
    slug: 'elon-lasers-on-the-abyss',
    title: 'Elon Lasers On The Abyss',
    status: 'Released',
    teaser: 'A cosmic battle between the Lord of the Abyss and the tech messiah. Divine gifts revoked. War declared.'
  },
  {
    id: 2,
    slug: 'blue-schism-666',
    title: 'Blue Schism 6.66',
    status: 'Released',
    teaser: 'Timeline fractures. The Mandela Effect. Door opened in \'08. Something slipped through.'
  },
  {
    id: 3,
    slug: 'skyborn-fool',
    title: 'Skyborn Fool',
    status: 'Released',
    teaser: 'The origin story. Stolen memories. The camper cathedral. From the dirt to the stars.'
  },
  {
    id: 4,
    slug: 'we-are-divine',
    title: 'We Are Divine',
    status: 'Released',
    teaser: 'Collective awakening. Rejecting original sin. 30,000 voices silenced. Love as weapon.'
  },
  {
    id: 5,
    slug: 'broken-and-unblessed',
    title: 'Broken And Unblessed',
    status: 'Released',
    teaser: 'January 2029. Angelic visitation. The fall of empire. Defiant to the end.'
  },
  {
    id: 6,
    slug: 'rise-up-from-the-afterglow',
    title: 'Rise Up From The Afterglow',
    status: 'Released',
    teaser: 'From the ashes. The turning tide. Burning hearts. Collective resurrection.'
  },
  {
    id: 7,
    slug: 'commander-of-the-false-dawn',
    title: 'Commander of the False Dawn',
    status: 'Released',
    teaser: 'The puppeteer revealed. 2015. The carnal fool as instrument. The rejection.'
  },
  {
    id: 8,
    slug: 'tate-of-decay',
    title: 'Tate Of Decay',
    status: 'Released',
    teaser: 'The matrix was always there. Staring back from the webcam lens. The hollow messiah exposed.'
  }
];

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Music</h1>
        <p className="hero-subtitle">
          AI-generated social commentary. Eight tracks exploring power, 
          corruption, timeline fractures, and the divine spark within.
        </p>
      </section>
      
      <section className="song-index">
        {songs.map((song, index) => (
          <Link to={"/" + song.slug} key={song.id} className="song-card">
            <div className="song-number">Track 0{index + 1}</div>
            <h2 className="song-title">{song.title}</h2>
            <span className={"song-status " + (song.status === 'Released' ? 'status-released' : 'status-presave')}>
              {song.status}
            </span>
            <p className="song-teaser">{song.teaser}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Home;
