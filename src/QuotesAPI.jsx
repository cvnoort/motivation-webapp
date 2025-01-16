function callAPI(url)
{
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      document.querySelector('#quote').innerHTML = data.text
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function produceQuote()
{
    const url = 'https://thequoteshub.com/api/';
    callAPI(url);

    return(
        <h2 id="quote"></h2>
    );
}

export default produceQuote;