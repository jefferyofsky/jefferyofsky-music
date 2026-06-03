import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music, ExternalLink } from 'lucide-react';

function Song6() {
  const lyrics = "The silence screams a twisted name,\nA hollow in the pouring rain.\nI felt the walls begin to cave,\nA ghost inside a tidal wave.\n\nBut every shadow holds a spark,\nA single point of light in the dark.\n\nWe rise up from the afterglow,\nLet go of all the seeds we've sown in sorrow!\nThis is the turning of the tide,\nWith burning hearts and nowhere left to hide!\n\nWe walked a mile on broken glass,\nKnowing every breath would not be the last.\nBut in the echo of the fall,\nWe heard a whisper through it all.\n\nYeah, every scar begins to fade,\nFrom every error that we made.\n\nWe rise up from the afterglow,\nLet go of all the seeds we've sown in sorrow!\nThis is the turning of the tide,\nWith burning hearts and nowhere left to hide!\n\nThe morning breaks on open sky,\nThe weight of years has finally dried.\nI stand where the water used to be,\nThe tide went out and returned me to me.\n\nNow every shadow holds a spark,\nWe found the light there in the dark.\n\nWe rise up from the afterglow,\nLet go of all the seeds we've sown in sorrow!\nThis is the turning of the tide,\nWith burning hearts and nowhere left to hide!\n\nAnd we won't break,\nAnd we won't bend,\nThis is not the end...\n\nSo let the thunder roll,\nLet the night grow old,\nWe're diamonds in the coal,\nWe're finally whole...\nFinally whole!\n\nWe rise... we rise...\nWe rise up from the afterglow!\n\nWe rise up from the afterglow,\nNo more seeds of sorrow left to sow!\nThe tide has turned, we're finally free,\nWith burning hearts — this is victory!\n\nWith burning hearts — we are alive!\nWe are alive!\nWe are alive!";

  return (
    <div className="song-detail">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        Back to Index
      </Link>
      
      <header className="song-header">
        <h1>Rise Up From The Afterglow</h1>
        <div className="song-meta">
          <div className="meta-item">
            <span className="meta-label">Track</span>
            06
          </div>
          <div className="meta-item">
            <span className="meta-label">Status</span>
            Released
          </div>
          <div className="meta-item">
            <span className="meta-label">Theme</span>
            Resurrection
          </div>
        </div>
      </header>
      <div className="stream-section">
        <h3><Music size={18} /> Listen</h3>
        <div className="stream-links">
          
          <a href="https://open.spotify.com/album/20NESqmoMV9pswioShMMqf" target="_blank" rel="noopener noreferrer" className="stream-btn">
            Spotify <ExternalLink size={14} />
          </a>
          <a href="https://distrokid.com/hyperfollow/jefferyofsky/rise-up-from-the-afterglow" target="_blank" rel="noopener noreferrer" className="stream-btn">
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

export default Song6;