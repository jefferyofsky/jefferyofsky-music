import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music, ExternalLink } from 'lucide-react';

function Song1() {
  const lyrics = "I gave you fire… I gave you vision…\nAnd this is how you repay me?\n\nI am the Lord of the Abyss, ruler of the night\nGave you blessings in the dark, now you test my might\nLasers in my energy, crossing every line\nYou danced in my shadow like the throne was yours to climb\n\nYou forgot your place, stepped outside your bounds\nNow the void is watching, hear the darkness sound\n\nWAR! WAR! I declare war on you!\nYour wealth is crashing, your dreams cut in two!\nLord of the Abyss, feel my power ignite\nYou crossed the wrong god — now pay the price tonight!\n\nYo I'm Elon, I control the stars, I built the game\nYou're just some shadow in the void, tryna steal my name\nI got Mars plans, Neuralink, I run this whole Earth\nYour little curses bounce off me, know your damn worth!\n\nYou wore my colors, moved like me on the stage\nThought you could claim the darkness, put me in a cage\nSatellites burning, rockets falling from the sky\nI revoke the spark I gave — watch your empire die\n\nYou forgot your place, stepped outside your bounds\nNow the void is calling, hear the darkness sound\n\nWAR! WAR! I declare war on you!\nYour wealth is crashing, your dreams cut in two!\nLord of the Abyss, feel my power ignite\nYou crossed the wrong god — now pay the price tonight!\n\nI saw potential in your chaos, thought we could align\nBuild something eternal, merge your steel with mine\nBut you reached too far, tried to bind what can't be owned\nNow the bridge is burning, and you stand there all alone\n\nI don't need your abyss, I got my own light!\nBuilt everything from nothing, I own the future, right?\nKeep your darkness, keep your curses, I don't care\nI'm the one with real power — bow down if you dare!\n\nEvery laser you fired tore another thread apart\nWhat could've been an alliance died inside your heart\nYou made it impossible, forced my hand this way\nNow the partnership is over — nothing left to say\n\nI searched for someone worthy… someone who could stand\nBeside the Lord of the Abyss and help reshape the land…\n\nWAR! WAR! The war is here and real!\nBut victory tastes hollow when the bond can't heal…\n\nNow I am alone again… in the endless deep\nYou made it impossible for us to ever meet\nI must search further… through the dark once more\nAnother spark to find… another soul to explore…\nLord of the Abyss… forever walking on…";

  return (
    <div className="song-detail">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        Back to Index
      </Link>
      
      <header className="song-header">
        <h1>Elon Lasers On The Abyss</h1>
        <div className="song-meta">
          <div className="meta-item">
            <span className="meta-label">Track</span>
            01
          </div>
          <div className="meta-item">
            <span className="meta-label">Status</span>
            Released
          </div>
          <div className="meta-item">
            <span className="meta-label">Theme</span>
            Cosmic Warfare
          </div>
        </div>
      </header>
      <div className="stream-section">
        <h3><Music size={18} /> Listen</h3>
        <div className="stream-links">
          
          <a href="https://open.spotify.com/album/67DzmiGMI4uJBfvUXShL1k" target="_blank" rel="noopener noreferrer" className="stream-btn">
            Spotify <ExternalLink size={14} />
          </a>
          <a href="https://music.apple.com/us/album/elon-lasers-on-the-abyss-single/6774066142" target="_blank" rel="noopener noreferrer" className="stream-btn">
            Apple Music <ExternalLink size={14} />
          </a>
          <a href="https://distrokid.com/hyperfollow/jefferyofsky/elon-lasers-on-the-abyss" target="_blank" rel="noopener noreferrer" className="stream-btn">
            HyperFollow <ExternalLink size={14} />
          </a>
        </div>
      </div>
      <section className="lyrics-section">
        <h3>Lyrics</h3>
        <pre className="lyrics">{lyrics}</pre>
      </section>
    </div>
  );
}

export default Song1;