import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music, ExternalLink } from 'lucide-react';

function Song8() {
  const lyrics = "Built my church on the lost and the broke\nPhD in pimping, it's all just a joke\nChristian values when the camera's on\nBible in my hand till the camera's gone\n\nResist the matrix! Unplug! Be free!\nFunny how the matrix looks just like me\nSelling revolution with a monthly fee\nTruth delivered via my affiliate spree\n\nI'm the liar with the messiah complex\nSaint on the surface, sinner's reflex\nUngovernable! I am the free!\nTen passports ready so I can flee\nSplit tongue, double mind\nLeft the truth ten exits behind\nPreach responsibility, sell the lie\nBlame the matrix when the signal dies\n\nTop G who can't stand alone\nNeeds his brother just to answer the phone\nIndependent! Dependent man!\nCompulsive liar with a master plan\n\nMoney's not real, it's all just fraud\nThen I flex the Bugatti like a secular god\nHappiness is weak, don't chase the high\nThen I blow 25K just to feel alive\n\nWomen are equal! Lock 'em in the villa!\nEducation's a scam! Buy my Hustler's U!\nI own nothing! Twenty-eight cars!\nThe poorest rich man! The loneliest star!\n\nI'm the king of the screen, the lord of the lie\nCan't breathe without the algorithm's supply\nFeed me the likes! Feed me the clout!\nWithout the attention, I'm nothing—washed out\nVerified checkmark, hollow inside\nThe fame is the drug and I need it to hide\nTop G! Top G! Screaming my name\nA prisoner of pixels and digital fame\n\nMost followed man who's completely alone\nTop G crying by the phone\nCan't function without the likes and the views\nAddicted to the screen like the rest of the fools\n\nThe disconnect is the diagnosis\nThe contradiction is the neurosis\nThe loudest voice in the room\nIs always the most terrified\n\nI'm the liar with the messiah complex\nI'm the king of the screen, the lord of the lie\nSaint on the surface, sinner's reflex\nCan't breathe without the algorithm's supply\nI'm the empire built on sand and spite\nFeed me the likes! Feed me the clout!\nI'm the guru who's afraid of the night\n\nThe matrix was always there...\nStaring back from the webcam lens.\nStaring back... from the webcam lens...";

  return (
    <div className="song-detail">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        Back to Index
      </Link>
      
      <header className="song-header">
        <h1>Tate Of Decay</h1>
        <div className="song-meta">
          <div className="meta-item">
            <span className="meta-label">Track</span>
            08
          </div>
          <div className="meta-item">
            <span className="meta-label">Status</span>
            Coming Soon
          </div>
          <div className="meta-item">
            <span className="meta-label">Theme</span>
            The Hollow Messiah
          </div>
        </div>
      </header>
      <div className="stream-section">
        <h3><Music size={18} /> Listen</h3>
        <div className="stream-links">
          
          <a href="https://distrokid.com/hyperfollow/jefferyofsky/tate-of-decay" target="_blank" rel="noopener noreferrer" className="stream-btn">
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

export default Song8;