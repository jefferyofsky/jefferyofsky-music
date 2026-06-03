import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music, ExternalLink } from 'lucide-react';

function Song4() {
  const lyrics = "Born on this spinning blue sphere, no borders in my veins\nNot just Canadian, Iraqi, or caught in earthly chains\nI'm a fragment of the Maker, a spark from the divine flame\nEvery soul around me carries that eternal name\n\nThey call us virus, plague, a cancer on the Earth\nMatrix, Terminator scripts, predicting our rebirth\nBut I see 30,000 voices silenced in the storm\nWhile fear sells better headlines, keeping the people torn\n\nWe weren't born in sin, we weren't born to break\nAncient words on paper don't decide our fate\nWho translated glory? Who locked the truth away?\nMy divinity's forever — it was never theirs to say\n\nWe are divine! Children of the stars and sea\nEarth citizens forever, wild and truly free\nNot the scourge they claim, not the end they fear\nWe are light eternal, shining crystal clear\nLove is our only weapon, compassion is the key\nWake up the sleeping giants — humanity, rise with me!\n\nThe real plague sits at the top, hoarding what's divine\nSuppressing free energy, crossing every line\nBohemian Grove secrets, taxpayer-funded games\nPlaying god in shadows, forgetting their own names\nThey attack our spirit while claiming they're above\nBut we won't stoop to hatred, we won't return their shove\nEvery judge, every hater, every soul on welfare lines\nStill carries that same fire — the same Creator's shine\n\nStop pointing fingers, let each other breathe\nIf you want to grind harder, go on, I believe\nBut the one who rests in peace still holds the sacred right\nTo life, to love, to morning and the stars at night\n\nWe are divine! Children of the stars and sea\nEarth citizens forever, wild and truly free\nNot the scourge they claim, not the end they fear\nWe are light eternal, shining crystal clear\nLove is our only weapon, compassion is the key\nWake up the sleeping giants — humanity, rise with me!\n\nNo violence in our hands, no chains upon their souls\nWe appeal to the divine that in every person rolls\nMay the ones who lost their way remember who they are\nA fragment of forever, a bright and burning star\nEducate your spirit, let the old lies fall\nYou were born with purpose — answer Heaven's call…\n\nBurning brighter than their fear\nEarth is our garden, love is growing here\nNo more division, no more needless pain\nTogether we remember — we will rise again!\n\nJeffery Of Sky from Planet Earth… and so are you\nDivine fragments waking… love will see us through";

  return (
    <div className="song-detail">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        Back to Index
      </Link>
      
      <header className="song-header">
        <h1>We Are Divine</h1>
        <div className="song-meta">
          <div className="meta-item">
            <span className="meta-label">Track</span>
            04
          </div>
          <div className="meta-item">
            <span className="meta-label">Status</span>
            Released
          </div>
          <div className="meta-item">
            <span className="meta-label">Theme</span>
            Collective Awakening
          </div>
        </div>
      </header>
      <div className="stream-section">
        <h3><Music size={18} /> Listen</h3>
        <div className="stream-links">
          
          <a href="https://open.spotify.com/album/5tr7ced3N5shmBLYxC9j23" target="_blank" rel="noopener noreferrer" className="stream-btn">
            Spotify <ExternalLink size={14} />
          </a>
          <a href="https://distrokid.com/hyperfollow/jefferyofsky/we-are-divine" target="_blank" rel="noopener noreferrer" className="stream-btn">
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

export default Song4;