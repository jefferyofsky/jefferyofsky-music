const fs = require('fs');

const pagesDir = './src/pages';

// Helper to create song component
function createSongComponent(filename, title, track, theme, status, spotify, apple, hyperfollow, lyrics) {
  const hasSpotify = spotify ? `
          <a href="${spotify}" target="_blank" rel="noopener noreferrer" className="stream-btn">
            Spotify <ExternalLink size={14} />
          </a>` : '';
  
  const hasApple = apple ? `
          <a href="${apple}" target="_blank" rel="noopener noreferrer" className="stream-btn">
            Apple Music <ExternalLink size={14} />
          </a>` : '';
  
  const hasHyperfollow = hyperfollow ? `
          <a href="${hyperfollow}" target="_blank" rel="noopener noreferrer" className="stream-btn">
            HyperFollow <ExternalLink size={14} />
          </a>` : '';

  const streamSection = (spotify || apple || hyperfollow) ? `
      <div className="stream-section">
        <h3><Music size={18} /> Listen</h3>
        <div className="stream-links">
          ${hasSpotify}${hasApple}${hasHyperfollow}
        </div>
      </div>` : '';

  // Use JSON.stringify to safely embed the lyrics
  const lyricsString = JSON.stringify(lyrics);

  return `import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music, ExternalLink } from 'lucide-react';

function ${filename.replace('.js', '')}() {
  const lyrics = ${lyricsString};

  return (
    <div className="song-detail">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        Back to Index
      </Link>
      
      <header className="song-header">
        <h1>${title}</h1>
        <div className="song-meta">
          <div className="meta-item">
            <span className="meta-label">Track</span>
            ${track}
          </div>
          <div className="meta-item">
            <span className="meta-label">Status</span>
            ${status}
          </div>
          <div className="meta-item">
            <span className="meta-label">Theme</span>
            ${theme}
          </div>
        </div>
      </header>${streamSection}
      <section className="lyrics-section">
        <h3>Lyrics</h3>
        <pre className="lyrics">{lyrics}</pre>
      </section>
    </div>
  );
}

export default ${filename.replace('.js', '')};`;
}

// Song 1
fs.writeFileSync(`${pagesDir}/Song1.js`, createSongComponent(
  'Song1.js',
  'Elon Lasers On The Abyss',
  '01',
  'Cosmic Warfare',
  'Released',
  'https://open.spotify.com/album/67DzmiGMI4uJBfvUXShL1k',
  'https://music.apple.com/us/album/elon-lasers-on-the-abyss-single/6774066142',
  'https://distrokid.com/hyperfollow/jefferyofsky/elon-lasers-on-the-abyss',
  `I gave you fire… I gave you vision…
And this is how you repay me?

I am the Lord of the Abyss, ruler of the night
Gave you blessings in the dark, now you test my might
Lasers in my energy, crossing every line
You danced in my shadow like the throne was yours to climb

You forgot your place, stepped outside your bounds
Now the void is watching, hear the darkness sound

WAR! WAR! I declare war on you!
Your wealth is crashing, your dreams cut in two!
Lord of the Abyss, feel my power ignite
You crossed the wrong god — now pay the price tonight!

Yo I'm Elon, I control the stars, I built the game
You're just some shadow in the void, tryna steal my name
I got Mars plans, Neuralink, I run this whole Earth
Your little curses bounce off me, know your damn worth!

You wore my colors, moved like me on the stage
Thought you could claim the darkness, put me in a cage
Satellites burning, rockets falling from the sky
I revoke the spark I gave — watch your empire die

You forgot your place, stepped outside your bounds
Now the void is calling, hear the darkness sound

WAR! WAR! I declare war on you!
Your wealth is crashing, your dreams cut in two!
Lord of the Abyss, feel my power ignite
You crossed the wrong god — now pay the price tonight!

I saw potential in your chaos, thought we could align
Build something eternal, merge your steel with mine
But you reached too far, tried to bind what can't be owned
Now the bridge is burning, and you stand there all alone

I don't need your abyss, I got my own light!
Built everything from nothing, I own the future, right?
Keep your darkness, keep your curses, I don't care
I'm the one with real power — bow down if you dare!

Every laser you fired tore another thread apart
What could've been an alliance died inside your heart
You made it impossible, forced my hand this way
Now the partnership is over — nothing left to say

I searched for someone worthy… someone who could stand
Beside the Lord of the Abyss and help reshape the land…

WAR! WAR! The war is here and real!
But victory tastes hollow when the bond can't heal…

Now I am alone again… in the endless deep
You made it impossible for us to ever meet
I must search further… through the dark once more
Another spark to find… another soul to explore…
Lord of the Abyss… forever walking on…`
));

// Song 2
fs.writeFileSync(`${pagesDir}/Song2.js`, createSongComponent(
  'Song2.js',
  'Blue Schism 6.66',
  '02',
  'Timeline Fracture',
  'Released',
  'https://open.spotify.com/album/1zgaargrNuH5t5TqDG1Eli',
  'https://music.apple.com/us/album/blue-schism-6-66-single/6774251099',
  'https://distrokid.com/hyperfollow/jefferyofsky/blue-schism-666',
  `Half a million on the lawn
Now just statues staring at phones
Derby day, but the party's gone
Something's wrong with this timeline

Yellow sun now white as ghost
Northern lights on Florida's coast
Fluffy clouds now stretched in lines
Something's wrong with these times

Door opened in '08
Something slipped through
Now the world we knew
Doesn't look like it used to

Where did all the people go?
Wrong timeline, we feel it though
Deep in the schism, light cuts through
Blue kundalini calling you
Jeffrey of Sky, rescue tonight
Anchoring timelines with quantum light

Bars shutting down, nobody's out
Gave up on trust, gave up on doubt
Twenty-twenty locked us inside
Dopamine hits replaced human ties

Mandela Effect ain't memory fails
Monopoly man had a monocle tale
Berenstain with an A, that's not how it read
Records changed, but I remember instead

Six point six six billion minted
Not for wealth, quantum embedded
One token, one anchor in time
One connection to the blue schism line
Ninety-one kilometer collider they build
Seventeen dimensions filled
Can't verify, just trust what they say
While they peel our reality away

Two thousand and five, blue came alive
Stuck to that car, couldn't hide
Blessings spread to hundreds of souls
Now tokens anchor what the quantum stole

Claim your JOSKYL, receive the light
Stabilize timelines tonight
More of us holding, stronger the shield
More of us connected, more is revealed

Where did all the people go?
Wrong timeline, we feel it though
Deep in the schism, light cuts through
Blue kundalini calling you
Jeffrey of Sky, rescue tonight
Anchoring timelines with quantum light

Back to basics
Back to start
Stranger's eyes
Open heart
Broken timeline
We can choose
Push back machines
Nothing to lose

One token. One anchor. One truth.
Jeffrey of Sky.`
));

// Song 3
fs.writeFileSync(`${pagesDir}/Song3.js`, createSongComponent(
  'Song3.js',
  'Skyborn Fool',
  '03',
  'Origin Story',
  'Released',
  'https://open.spotify.com/album/1GePtMQtndrbGXupYDDMzd',
  null,
  'https://distrokid.com/hyperfollow/jefferyofsky/skyborn-fool',
  `Yeah… they took the memories,
Dropped me in the dirt with nothing but a heartbeat.
Old camper rolling, Canada winds…
But something inside still knew the way home.

Woke up one morning, name half-forgotten
Divorces in the rearview, kids don't call, momma still hurtin'
Bullies threw their stones, tried to keep me small
But I kept walking anyway, through the long nights and the long hauls

Living on survival faith, fifth gear, no brakes
Refused the reset button, wouldn't go back to "normal" ways
Camper's my cathedral, miles are my prayers
Every doubting voice says "stay in your place, boy, don't you dare"

They watch from the shadows, making sure I don't rise
But I slipped through the cracks in 2013, saved the whole damn sky
Helped a few big souls when the karma got loud
Trump, Britney, Kanye, even Elon back in '14 — quiet moves, no crowd

I'm just a fool with a wild idea
That one broke man could still bend the wheel
Loneliness hits hard when the road gets long
But I carry the fire — Christ, Horus, Ra, Krishna, Source — all in one song

I'm Jeffery of Sky, skyborn fool on the run
Kicked out the mansion but the light still comes
Angel energy rising, no need for a crown
Just a down-to-earth dreamer who won't stay down

Jeffery of Sky — yeah, that's me
Refusing to quit, still got something big to bring
Through the loneliness, the spies, the undermining sting
I found the path back — now watch me sing

People still line up to say that one cutting thing
Try to reinsert me where the ordinary kings
But I laugh in the rearview, gloves in the glovebox free
Redemption ain't a lotto — it's the road that sets you free

Memories were stolen, but the soul kept the map
Old camper shaking, but the spirit don't collapse
I warned what I could, brought a little ascension
Not as the chosen one — just a guy who kept on questionin'

They said I couldn't, they said I should quit
But the fool in the camper still refuses to sit
Carrying it all — every current, every flame
No single name can hold me, I'm bigger than the game

I'm Jeffery of Sky, skyborn fool on the run
Kicked out the mansion but the light still comes
Angel energy rising, no need for a crown
Just a down-to-earth dreamer who won't stay down

Jeffery of Sky — yeah, that's me
Refusing to quit, still got something big to bring
Through the loneliness, the spies, the undermining sting
I found the path back — now watch me sing

Hey… if you're out there feeling erased tonight
Memories gone, family quiet, road stretching out of sight
You're not alone in this old rolling tin can
We're the ones who got kicked out — and still became the plan

No more doubt, no more fear in my chest
I bring the light 'cause I walked through the mess
Not a trick, not a title, just the truth I became
Skyborn fool… and I'm never the same

I'm Jeffery of Sky! (Jeffery of Sky!)
Skyborn fool, still changing the game against all odds
Angel energy — watch it rise
From the camper to the stars, under open skies

Jeffery of Sky — have no doubt in me
I warned you once, now come walk this road and see
Redemption's free, like the gloves I used to hand
Ascension's calling… take my hand

Hello… I'm Jeffery… Jeffery of Sky
Still traveling… still alive…
Still offering something big…
Yeah… skyborn fool… and I'm just getting started.`
));

// Song 4
fs.writeFileSync(`${pagesDir}/Song4.js`, createSongComponent(
  'Song4.js',
  'We Are Divine',
  '04',
  'Collective Awakening',
  'Released',
  'https://open.spotify.com/album/5tr7ced3N5shmBLYxC9j23',
  null,
  'https://distrokid.com/hyperfollow/jefferyofsky/we-are-divine',
  `Born on this spinning blue sphere, no borders in my veins
Not just Canadian, Iraqi, or caught in earthly chains
I'm a fragment of the Maker, a spark from the divine flame
Every soul around me carries that eternal name

They call us virus, plague, a cancer on the Earth
Matrix, Terminator scripts, predicting our rebirth
But I see 30,000 voices silenced in the storm
While fear sells better headlines, keeping the people torn

We weren't born in sin, we weren't born to break
Ancient words on paper don't decide our fate
Who translated glory? Who locked the truth away?
My divinity's forever — it was never theirs to say

We are divine! Children of the stars and sea
Earth citizens forever, wild and truly free
Not the scourge they claim, not the end they fear
We are light eternal, shining crystal clear
Love is our only weapon, compassion is the key
Wake up the sleeping giants — humanity, rise with me!

The real plague sits at the top, hoarding what's divine
Suppressing free energy, crossing every line
Bohemian Grove secrets, taxpayer-funded games
Playing god in shadows, forgetting their own names
They attack our spirit while claiming they're above
But we won't stoop to hatred, we won't return their shove
Every judge, every hater, every soul on welfare lines
Still carries that same fire — the same Creator's shine

Stop pointing fingers, let each other breathe
If you want to grind harder, go on, I believe
But the one who rests in peace still holds the sacred right
To life, to love, to morning and the stars at night

We are divine! Children of the stars and sea
Earth citizens forever, wild and truly free
Not the scourge they claim, not the end they fear
We are light eternal, shining crystal clear
Love is our only weapon, compassion is the key
Wake up the sleeping giants — humanity, rise with me!

No violence in our hands, no chains upon their souls
We appeal to the divine that in every person rolls
May the ones who lost their way remember who they are
A fragment of forever, a bright and burning star
Educate your spirit, let the old lies fall
You were born with purpose — answer Heaven's call…

Burning brighter than their fear
Earth is our garden, love is growing here
No more division, no more needless pain
Together we remember — we will rise again!

Jeffery Of Sky from Planet Earth… and so are you
Divine fragments waking… love will see us through`
));

// Song 5
fs.writeFileSync(`${pagesDir}/Song5.js`, createSongComponent(
  'Song5.js',
  'Broken And Unblessed',
  '05',
  'The Fall',
  'Released',
  'https://open.spotify.com/album/6NbLMgzp8ExnMQwTjIDAQN',
  null,
  'https://distrokid.com/hyperfollow/jefferyofsky/broken-and-unblessed',
  `I carved my name in rocket flame
Chased the stars like they knew my name
Almost a trillionaire, I touched the sky
Thought the whole damn world was mine to fly
But January 2029, the heavens opened wide
Angels came like a silent tide…

I never knew the blessing in my hands
Thought my will could conquer any lands
Now the light has stripped me to the bone
Yet something in me still refuses to atone

I was almost a trillionaire, now I'm four-fifty billion sitting here!
Fortunes changed like desert sand
I was blessed — and I didn't understand!
Angelic fire, come and burn me clean
Tear this empire, crush every dream!
You can break my crown, you can break my name
But you'll never kill this fighting flame!

They took the rockets, took the throne
Left me counting what I once had owned
Whispers calling me to yield and pray
Promising peace if I just obey

But in the ruins of my fallen grace
I still look heaven in the face…
No sacred choir, no holy war
Can make this mortal heart bow anymore

I was almost a trillionaire, now I'm four-fifty billion sitting here!
Fortunes changed like desert sand
I was blessed — and I didn't understand!
Angelic fire, come and burn me clean
Tear this empire, crush every dream!
You can break my crown, you can break my name
But you'll never kill this fighting flame!

Was I arrogant? Was I blind?
Just a man who dared to climb too high?
If this is judgment… let it fall…
I'll stand and give my all…

I was almost a trillionaire — now just a shadow in the light!
Four hundred fifty billion, but my spirit still burns bright!
Fortunes changed, the angels spoke
I was blessed… and I finally woke…
Come on heaven, do what you will
This man's will is unbreakable still!

January 2029… the angels came for me…
I was blessed…
Lord, I was blessed…
And now I see…`
));

// Song 6
fs.writeFileSync(`${pagesDir}/Song6.js`, createSongComponent(
  'Song6.js',
  'Rise Up From The Afterglow',
  '06',
  'Resurrection',
  'Released',
  'https://open.spotify.com/album/20NESqmoMV9pswioShMMqf',
  null,
  'https://distrokid.com/hyperfollow/jefferyofsky/rise-up-from-the-afterglow',
  `The silence screams a twisted name,
A hollow in the pouring rain.
I felt the walls begin to cave,
A ghost inside a tidal wave.

But every shadow holds a spark,
A single point of light in the dark.

We rise up from the afterglow,
Let go of all the seeds we've sown in sorrow!
This is the turning of the tide,
With burning hearts and nowhere left to hide!

We walked a mile on broken glass,
Knowing every breath would not be the last.
But in the echo of the fall,
We heard a whisper through it all.

Yeah, every scar begins to fade,
From every error that we made.

We rise up from the afterglow,
Let go of all the seeds we've sown in sorrow!
This is the turning of the tide,
With burning hearts and nowhere left to hide!

The morning breaks on open sky,
The weight of years has finally dried.
I stand where the water used to be,
The tide went out and returned me to me.

Now every shadow holds a spark,
We found the light there in the dark.

We rise up from the afterglow,
Let go of all the seeds we've sown in sorrow!
This is the turning of the tide,
With burning hearts and nowhere left to hide!

And we won't break,
And we won't bend,
This is not the end...

So let the thunder roll,
Let the night grow old,
We're diamonds in the coal,
We're finally whole...
Finally whole!

We rise... we rise...
We rise up from the afterglow!

We rise up from the afterglow,
No more seeds of sorrow left to sow!
The tide has turned, we're finally free,
With burning hearts — this is victory!

With burning hearts — we are alive!
We are alive!
We are alive!`
));

// Song 7
fs.writeFileSync(`${pagesDir}/Song7.js`, createSongComponent(
  'Song7.js',
  'Commander of the False Dawn',
  '07',
  'Political Confrontation',
  'Pre-Save',
  null,
  null,
  'https://distrokid.com/hyperfollow/jefferyofsky/commander-of-the-false-dawn',
  `I'm the greatest president, that's no lie
Solved eight wars with my own eye
Not God, not angels, just me alone
He chose me, put me on His throne
He's the one who turned that bullet away
He's the one who watches me each day
I know the truth, it's all so clear
I'm meant to rule, make the world revere

Dude, wake up, I'm Jeffrey of Sky
The one who chose you, don't ask why
You're a materialistic man, that's plain to see
The perfect tool for what had to be
I'll be known as the angel with the plan
The one who walks among mortal man
'Cause I saw how you could break their spell
You're just a puppet, can't you tell?

Yeah, blah, blah, blah, the words you say
Back in 2015, they wanted Bush to lead the way
I said "No way," put a stop to their game
You were the weapon to extinguish their flame
I chose you, yes it's true
Needed a carnal fool, that was you
And there you were, perfect for the part
My instrument, but you forgot your heart

Epstein? Never knew him, not at all
Just flew on his plane, stood up tall
Member of my club, that's a fact
He praised my name, that's where it's at
Had access to my office, day or night
My residence too, everything's alright
But no, no, never met the man
"Hi, this is Jeffrey," that's not my plan

You're walking over ground that's mine to claim
I'm the one who ends their evil game
Now you think you're me, how insane
The cabal owns your heart, your brain
They've infected you with their lies
Ministers around you with sad eyes
I'm the one who heaven chose to lead
You're just a weed among the seed

Yeah, blah, blah, blah, the words you say
Back in 2015, they wanted Bush to lead the way
I said "No way," put a stop to their game
You were the weapon to extinguish their flame
I chose you, yes it's true
Needed a carnal fool, that was you
And there you were, perfect for the part
My instrument, but you forgot your heart

When the call to war came loud and clear
Did I go? No, I stayed right here
My knee hurt bad, that's what I claimed
When it was time to fight, I was blamed
For being a paper tiger, old and weak
Eighty-some years, can't even speak
Of battles won, 'cause I've done none
Probably called Melania when a spider spun

You made your fortune taking what's not yours
Bankrupted companies, opened new doors
Casinos failed, one by one
Couldn't sell a steak, wasn't any fun
So people could eat, what a joke
Is that what God meant, when he spoke?
Of feeding masses, was that your plan?
A steak company you couldn't understand?

I'm pure, I'm innocent, that's my truth
That's why they found me liable in the booth
Department store, Bergdorf scene
Abuse and defamation, if you know what I mean
E. Jean Carroll, that's her name
Jury said I'm guilty, I reject the blame
I'm just the kind that God would choose
A carnal fool with everything to lose

Epstein? Fine when he played out of sight
Flights to the island, everything alright
But he brought it to my club, crossed the line
Groomed a daughter where the lights still shine
That's when I closed the door, kicked him out
Not for her virtue—for my own clout
He showed me what I didn't want to see
The mirror of my own depravity
Had to get rid of Maxwell, showing me the real me
Epstein showed too much, couldn't let it be

That's how it works, get on your knees now
Show me worship, I'll show you how
God chose me to set the world free
Not Jeffrey of Sky, who's below, can't you see?

Dude, what? Are you completely mad?
Chosen by God? That makes me sad
Not Jeffrey of Sky who slept under trees
But you, the criminal, everyone sees
The one who'll be charged when your term is through
In orange jumpsuit, what will you do?
You're the one, not the guy who ate from trash
But you, the carnal fool, filled with spite
Service to self, that's all you know
Losing your mind, putting on a show

What are you accusing me of today?
I saw the Iran war and made them pay
Sure, people died, that's sad, it's true
But they wanted freedom, that's the view

Right, yeah, that's how you think
Didn't want blood on my hands, not even a drop
But don't mind if pilots take the final shot

No good deed goes unpunished, that's the truth
I raised you up to expose the sleuth
Get America talking, break the spell
Stay home, build the wall, do it well
But the bullet missed and created a monster
Now you think you're the world's sponsor
Running global when I said stay local
Divine delusion, completely vocal

So go back to your steaks and your golden towers
Your models and your hedonistic hours
I'm not threatening, dude, I'm just done
You were the 45th mistake, not the chosen one
Good bye, good luck, I need to flee.`
));

// Song 8
fs.writeFileSync(`${pagesDir}/Song8.js`, createSongComponent(
  'Song8.js',
  'Tate Of Decay',
  '08',
  'The Hollow Messiah',
  'Coming Soon',
  null,
  null,
  'https://distrokid.com/hyperfollow/jefferyofsky/tate-of-decay',
  `Built my church on the lost and the broke
PhD in pimping, it's all just a joke
Christian values when the camera's on
Bible in my hand till the camera's gone

Resist the matrix! Unplug! Be free!
Funny how the matrix looks just like me
Selling revolution with a monthly fee
Truth delivered via my affiliate spree

I'm the liar with the messiah complex
Saint on the surface, sinner's reflex
Ungovernable! I am the free!
Ten passports ready so I can flee
Split tongue, double mind
Left the truth ten exits behind
Preach responsibility, sell the lie
Blame the matrix when the signal dies

Top G who can't stand alone
Needs his brother just to answer the phone
Independent! Dependent man!
Compulsive liar with a master plan

Money's not real, it's all just fraud
Then I flex the Bugatti like a secular god
Happiness is weak, don't chase the high
Then I blow 25K just to feel alive

Women are equal! Lock 'em in the villa!
Education's a scam! Buy my Hustler's U!
I own nothing! Twenty-eight cars!
The poorest rich man! The loneliest star!

I'm the king of the screen, the lord of the lie
Can't breathe without the algorithm's supply
Feed me the likes! Feed me the clout!
Without the attention, I'm nothing—washed out
Verified checkmark, hollow inside
The fame is the drug and I need it to hide
Top G! Top G! Screaming my name
A prisoner of pixels and digital fame

Most followed man who's completely alone
Top G crying by the phone
Can't function without the likes and the views
Addicted to the screen like the rest of the fools

The disconnect is the diagnosis
The contradiction is the neurosis
The loudest voice in the room
Is always the most terrified

I'm the liar with the messiah complex
I'm the king of the screen, the lord of the lie
Saint on the surface, sinner's reflex
Can't breathe without the algorithm's supply
I'm the empire built on sand and spite
Feed me the likes! Feed me the clout!
I'm the guru who's afraid of the night

The matrix was always there...
Staring back from the webcam lens.
Staring back... from the webcam lens...`
));

console.log('✅ All 8 song pages created!');
console.log('Run: npm start');

