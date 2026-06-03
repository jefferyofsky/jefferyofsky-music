import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music, ExternalLink } from 'lucide-react';

function Song7() {
  const lyrics = "I'm the greatest president, that's no lie\nSolved eight wars with my own eye\nNot God, not angels, just me alone\nHe chose me, put me on His throne\nHe's the one who turned that bullet away\nHe's the one who watches me each day\nI know the truth, it's all so clear\nI'm meant to rule, make the world revere\n\nDude, wake up, I'm Jeffrey of Sky\nThe one who chose you, don't ask why\nYou're a materialistic man, that's plain to see\nThe perfect tool for what had to be\nI'll be known as the angel with the plan\nThe one who walks among mortal man\n'Cause I saw how you could break their spell\nYou're just a puppet, can't you tell?\n\nYeah, blah, blah, blah, the words you say\nBack in 2015, they wanted Bush to lead the way\nI said \"No way,\" put a stop to their game\nYou were the weapon to extinguish their flame\nI chose you, yes it's true\nNeeded a carnal fool, that was you\nAnd there you were, perfect for the part\nMy instrument, but you forgot your heart\n\nEpstein? Never knew him, not at all\nJust flew on his plane, stood up tall\nMember of my club, that's a fact\nHe praised my name, that's where it's at\nHad access to my office, day or night\nMy residence too, everything's alright\nBut no, no, never met the man\n\"Hi, this is Jeffrey,\" that's not my plan\n\nYou're walking over ground that's mine to claim\nI'm the one who ends their evil game\nNow you think you're me, how insane\nThe cabal owns your heart, your brain\nThey've infected you with their lies\nMinisters around you with sad eyes\nI'm the one who heaven chose to lead\nYou're just a weed among the seed\n\nYeah, blah, blah, blah, the words you say\nBack in 2015, they wanted Bush to lead the way\nI said \"No way,\" put a stop to their game\nYou were the weapon to extinguish their flame\nI chose you, yes it's true\nNeeded a carnal fool, that was you\nAnd there you were, perfect for the part\nMy instrument, but you forgot your heart\n\nWhen the call to war came loud and clear\nDid I go? No, I stayed right here\nMy knee hurt bad, that's what I claimed\nWhen it was time to fight, I was blamed\nFor being a paper tiger, old and weak\nEighty-some years, can't even speak\nOf battles won, 'cause I've done none\nProbably called Melania when a spider spun\n\nYou made your fortune taking what's not yours\nBankrupted companies, opened new doors\nCasinos failed, one by one\nCouldn't sell a steak, wasn't any fun\nSo people could eat, what a joke\nIs that what God meant, when he spoke?\nOf feeding masses, was that your plan?\nA steak company you couldn't understand?\n\nI'm pure, I'm innocent, that's my truth\nThat's why they found me liable in the booth\nDepartment store, Bergdorf scene\nAbuse and defamation, if you know what I mean\nE. Jean Carroll, that's her name\nJury said I'm guilty, I reject the blame\nI'm just the kind that God would choose\nA carnal fool with everything to lose\n\nEpstein? Fine when he played out of sight\nFlights to the island, everything alright\nBut he brought it to my club, crossed the line\nGroomed a daughter where the lights still shine\nThat's when I closed the door, kicked him out\nNot for her virtue—for my own clout\nHe showed me what I didn't want to see\nThe mirror of my own depravity\nHad to get rid of Maxwell, showing me the real me\nEpstein showed too much, couldn't let it be\n\nThat's how it works, get on your knees now\nShow me worship, I'll show you how\nGod chose me to set the world free\nNot Jeffrey of Sky, who's below, can't you see?\n\nDude, what? Are you completely mad?\nChosen by God? That makes me sad\nNot Jeffrey of Sky who slept under trees\nBut you, the criminal, everyone sees\nThe one who'll be charged when your term is through\nIn orange jumpsuit, what will you do?\nYou're the one, not the guy who ate from trash\nBut you, the carnal fool, filled with spite\nService to self, that's all you know\nLosing your mind, putting on a show\n\nWhat are you accusing me of today?\nI saw the Iran war and made them pay\nSure, people died, that's sad, it's true\nBut they wanted freedom, that's the view\n\nRight, yeah, that's how you think\nDidn't want blood on my hands, not even a drop\nBut don't mind if pilots take the final shot\n\nNo good deed goes unpunished, that's the truth\nI raised you up to expose the sleuth\nGet America talking, break the spell\nStay home, build the wall, do it well\nBut the bullet missed and created a monster\nNow you think you're the world's sponsor\nRunning global when I said stay local\nDivine delusion, completely vocal\n\nSo go back to your steaks and your golden towers\nYour models and your hedonistic hours\nI'm not threatening, dude, I'm just done\nYou were the 45th mistake, not the chosen one\nGood bye, good luck, I need to flee.";

  return (
    <div className="song-detail">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        Back to Index
      </Link>
      
      <header className="song-header">
        <h1>Commander of the False Dawn</h1>
        <div className="song-meta">
          <div className="meta-item">
            <span className="meta-label">Track</span>
            07
          </div>
          <div className="meta-item">
            <span className="meta-label">Status</span>
            Pre-Save
          </div>
          <div className="meta-item">
            <span className="meta-label">Theme</span>
            Political Confrontation
          </div>
        </div>
      </header>
      <div className="stream-section">
        <h3><Music size={18} /> Listen</h3>
        <div className="stream-links">
          
          <a href="https://distrokid.com/hyperfollow/jefferyofsky/commander-of-the-false-dawn" target="_blank" rel="noopener noreferrer" className="stream-btn">
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

export default Song7;