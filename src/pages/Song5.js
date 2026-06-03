import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music, ExternalLink } from 'lucide-react';

function Song5() {
  const lyrics = "I carved my name in rocket flame\nChased the stars like they knew my name\nAlmost a trillionaire, I touched the sky\nThought the whole damn world was mine to fly\nBut January 2029, the heavens opened wide\nAngels came like a silent tide…\n\nI never knew the blessing in my hands\nThought my will could conquer any lands\nNow the light has stripped me to the bone\nYet something in me still refuses to atone\n\nI was almost a trillionaire, now I'm four-fifty billion sitting here!\nFortunes changed like desert sand\nI was blessed — and I didn't understand!\nAngelic fire, come and burn me clean\nTear this empire, crush every dream!\nYou can break my crown, you can break my name\nBut you'll never kill this fighting flame!\n\nThey took the rockets, took the throne\nLeft me counting what I once had owned\nWhispers calling me to yield and pray\nPromising peace if I just obey\n\nBut in the ruins of my fallen grace\nI still look heaven in the face…\nNo sacred choir, no holy war\nCan make this mortal heart bow anymore\n\nI was almost a trillionaire, now I'm four-fifty billion sitting here!\nFortunes changed like desert sand\nI was blessed — and I didn't understand!\nAngelic fire, come and burn me clean\nTear this empire, crush every dream!\nYou can break my crown, you can break my name\nBut you'll never kill this fighting flame!\n\nWas I arrogant? Was I blind?\nJust a man who dared to climb too high?\nIf this is judgment… let it fall…\nI'll stand and give my all…\n\nI was almost a trillionaire — now just a shadow in the light!\nFour hundred fifty billion, but my spirit still burns bright!\nFortunes changed, the angels spoke\nI was blessed… and I finally woke…\nCome on heaven, do what you will\nThis man's will is unbreakable still!\n\nJanuary 2029… the angels came for me…\nI was blessed…\nLord, I was blessed…\nAnd now I see…";

  return (
    <div className="song-detail">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        Back to Index
      </Link>
      
      <header className="song-header">
        <h1>Broken And Unblessed</h1>
        <div className="song-meta">
          <div className="meta-item">
            <span className="meta-label">Track</span>
            05
          </div>
          <div className="meta-item">
            <span className="meta-label">Status</span>
            Released
          </div>
          <div className="meta-item">
            <span className="meta-label">Theme</span>
            The Fall
          </div>
        </div>
      </header>
      <div className="stream-section">
        <h3><Music size={18} /> Listen</h3>
        <div className="stream-links">
          
          <a href="https://open.spotify.com/album/6NbLMgzp8ExnMQwTjIDAQN" target="_blank" rel="noopener noreferrer" className="stream-btn">
            Spotify <ExternalLink size={14} />
          </a>
          <a href="https://distrokid.com/hyperfollow/jefferyofsky/broken-and-unblessed" target="_blank" rel="noopener noreferrer" className="stream-btn">
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

export default Song5;