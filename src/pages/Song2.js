import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music, ExternalLink } from 'lucide-react';

function Song2() {
  const lyrics = "Half a million on the lawn\nNow just statues staring at phones\nDerby day, but the party's gone\nSomething's wrong with this timeline\n\nYellow sun now white as ghost\nNorthern lights on Florida's coast\nFluffy clouds now stretched in lines\nSomething's wrong with these times\n\nDoor opened in '08\nSomething slipped through\nNow the world we knew\nDoesn't look like it used to\n\nWhere did all the people go?\nWrong timeline, we feel it though\nDeep in the schism, light cuts through\nBlue kundalini calling you\nJeffrey of Sky, rescue tonight\nAnchoring timelines with quantum light\n\nBars shutting down, nobody's out\nGave up on trust, gave up on doubt\nTwenty-twenty locked us inside\nDopamine hits replaced human ties\n\nMandela Effect ain't memory fails\nMonopoly man had a monocle tale\nBerenstain with an A, that's not how it read\nRecords changed, but I remember instead\n\nSix point six six billion minted\nNot for wealth, quantum embedded\nOne token, one anchor in time\nOne connection to the blue schism line\nNinety-one kilometer collider they build\nSeventeen dimensions filled\nCan't verify, just trust what they say\nWhile they peel our reality away\n\nTwo thousand and five, blue came alive\nStuck to that car, couldn't hide\nBlessings spread to hundreds of souls\nNow tokens anchor what the quantum stole\n\nClaim your JOSKYL, receive the light\nStabilize timelines tonight\nMore of us holding, stronger the shield\nMore of us connected, more is revealed\n\nWhere did all the people go?\nWrong timeline, we feel it though\nDeep in the schism, light cuts through\nBlue kundalini calling you\nJeffrey of Sky, rescue tonight\nAnchoring timelines with quantum light\n\nBack to basics\nBack to start\nStranger's eyes\nOpen heart\nBroken timeline\nWe can choose\nPush back machines\nNothing to lose\n\nOne token. One anchor. One truth.\nJeffrey of Sky.";

  return (
    <div className="song-detail">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        Back to Index
      </Link>
      
      <header className="song-header">
        <h1>Blue Schism 6.66</h1>
        <div className="song-meta">
          <div className="meta-item">
            <span className="meta-label">Track</span>
            02
          </div>
          <div className="meta-item">
            <span className="meta-label">Status</span>
            Released
          </div>
          <div className="meta-item">
            <span className="meta-label">Theme</span>
            Timeline Fracture
          </div>
        </div>
      </header>
      <div className="stream-section">
        <h3><Music size={18} /> Listen</h3>
        <div className="stream-links">
          
          <a href="https://open.spotify.com/album/1zgaargrNuH5t5TqDG1Eli" target="_blank" rel="noopener noreferrer" className="stream-btn">
            Spotify <ExternalLink size={14} />
          </a>
          <a href="https://music.apple.com/us/album/blue-schism-6-66-single/6774251099" target="_blank" rel="noopener noreferrer" className="stream-btn">
            Apple Music <ExternalLink size={14} />
          </a>
          <a href="https://distrokid.com/hyperfollow/jefferyofsky/blue-schism-666" target="_blank" rel="noopener noreferrer" className="stream-btn">
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

export default Song2;