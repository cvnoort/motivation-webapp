function Message() {

  // Get a random background color from selection
  const colors = ["#9FAC9D", "#DFD8C5", "#ECE4D7",
                  "#DDC8B7", "#CDACA1", "#89999A",
                  "#E0EDEE", "#A4B4BE", "#EAE1D0", 
                  "#DCC8BC"];
  const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

  // Get a random quote to display
  const quotes = [
    "You can do it!",
    "Good things take time."
  ];
  const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="message" style={{backgroundColor:randomColor()}}>
      <h1>Remember:</h1>
      <h2>{randomQuote()}</h2>
    </div>
  );
}

export default Message;
