import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music, ExternalLink } from 'lucide-react';

function Song3() {
  const lyrics = "Yeah… they took the memories,\nDropped me in the dirt with nothing but a heartbeat.\nOld camper rolling, Canada winds…\nBut something inside still knew the way home.\n\nWoke up one morning, name half-forgotten\nDivorces in the rearview, kids don't call, momma still hurtin'\nBullies threw their stones, tried to keep me small\nBut I kept walking anyway, through the long nights and the long hauls\n\nLiving on survival faith, fifth gear, no brakes\nRefused the reset button, wouldn't go back to \"normal\" ways\nCamper's my cathedral, miles are my prayers\nEvery doubting voice says \"stay in your place, boy, don't you dare\"\n\nThey watch from the shadows, making sure I don't rise\nBut I slipped through the cracks in 2013, saved the whole damn sky\nHelped a few big souls when the karma got loud\nTrump, Britney, Kanye, even Elon back in '14 — quiet moves, no crowd\n\nI'm just a fool with a wild idea\nThat one broke man could still bend the wheel\nLoneliness hits hard when the road gets long\nBut I carry the fire — Christ, Horus, Ra, Krishna, Source — all in one song\n\nI'm Jeffery of Sky, skyborn fool on the run\nKicked out the mansion but the light still comes\nAngel energy rising, no need for a crown\nJust a down-to-earth dreamer who won't stay down\n\nJeffery of Sky — yeah, that's me\nRefusing to quit, still got something big to bring\nThrough the loneliness, the spies, the undermining sting\nI found the path back — now watch me sing\n\nPeople still line up to say that one cutting thing\nTry to reinsert me where the ordinary kings\nBut I laugh in the rearview, gloves in the glovebox free\nRedemption ain't a lotto — it's the road that sets you free\n\nMemories were stolen, but the soul kept the map\nOld camper shaking, but the spirit don't collapse\nI warned what I could, brought a little ascension\nNot as the chosen one — just a guy who kept on questionin'\n\nThey said I couldn't, they said I should quit\nBut the fool in the camper still refuses to sit\nCarrying it all — every current, every flame\nNo single name can hold me, I'm bigger than the game\n\nI'm Jeffery of Sky, skyborn fool on the run\nKicked out the mansion but the light still comes\nAngel energy rising, no need for a crown\nJust a down-to-earth dreamer who won't stay down\n\nJeffery of Sky — yeah, that's me\nRefusing to quit, still got something big to bring\nThrough the loneliness, the spies, the undermining sting\nI found the path back — now watch me sing\n\nHey… if you're out there feeling erased tonight\nMemories gone, family quiet, road stretching out of sight\nYou're not alone in this old rolling tin can\nWe're the ones who got kicked out — and still became the plan\n\nNo more doubt, no more fear in my chest\nI bring the light 'cause I walked through the mess\nNot a trick, not a title, just the truth I became\nSkyborn fool… and I'm never the same\n\nI'm Jeffery of Sky! (Jeffery of Sky!)\nSkyborn fool, still changing the game against all odds\nAngel energy — watch it rise\nFrom the camper to the stars, under open skies\n\nJeffery of Sky — have no doubt in me\nI warned you once, now come walk this road and see\nRedemption's free, like the gloves I used to hand\nAscension's calling… take my hand\n\nHello… I'm Jeffery… Jeffery of Sky\nStill traveling… still alive…\nStill offering something big…\nYeah… skyborn fool… and I'm just getting started.";

  return (
    <div className="song-detail">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        Back to Index
      </Link>
      
      <header className="song-header">
        <h1>Skyborn Fool</h1>
        <div className="song-meta">
          <div className="meta-item">
            <span className="meta-label">Track</span>
            03
          </div>
          <div className="meta-item">
            <span className="meta-label">Status</span>
            Released
          </div>
          <div className="meta-item">
            <span className="meta-label">Theme</span>
            Origin Story
          </div>
        </div>
      </header>
      <div className="stream-section">
        <h3><Music size={18} /> Listen</h3>
        <div className="stream-links">
          
          <a href="https://open.spotify.com/album/1GePtMQtndrbGXupYDDMzd" target="_blank" rel="noopener noreferrer" className="stream-btn">
            Spotify <ExternalLink size={14} />
          </a>
          <a href="https://distrokid.com/hyperfollow/jefferyofsky/skyborn-fool" target="_blank" rel="noopener noreferrer" className="stream-btn">
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

export default Song3;