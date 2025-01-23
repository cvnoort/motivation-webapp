import BGImg from './BackgroundImgs'; 

function TextQuotes() {
    // Get a random quote to display
    const quotes = [
      "You can do it!",
      "Good things take time.",
      "Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill",
      "Strive not to be a success, but rather to be of value. –Albert Einstein",
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  –Robert Frost",
      "The most difficult thing is the decision to act, the rest is merely tenacity. –Amelia Earhart",
      "You miss 100% of the shots you don’t take. –Wayne Gretzky",
      "Every strike brings me closer to the next home run. –Babe Ruth",
      "Life is what happens to you while you’re busy making other plans. –John Lennon",
      "We become what we think about. –Earl Nightingale",
      "The best time to plant a tree was 20 years ago. The second best time is now. –Chinese Proverb",
      "I am not a product of my circumstances. I am a product of my decisions. –Stephen Covey",
      "Go confidently in the direction of your dreams.  Live the life you have imagined. –Henry David Thoreau",
      "Fall seven times and stand up eight.",
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    let selectedBG = BGImg();

    let sectionStyle = {
      backgroundImage: `linear-gradient(0deg, rgb(95, 0, 55), rgba(208, 0, 121, 0.20)), url(${selectedBG})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };

    return (
      <div className="quotes-section" style={sectionStyle}>
        <h2>{randomQuote}</h2>
      </div>
    );
  }

  export default TextQuotes;