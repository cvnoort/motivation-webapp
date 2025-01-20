import {useState} from 'react'

function RandBGImg() {
    let imageObj = {
        link: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg"
    }

    // Please add your api key which you can get from pixabay.com  
    const pixabayAPIkey='48273163-614895c31bc7419a8cf807deb'

    // sending request to the API
    fetch(
      `https://pixabay.com/api/?key=${pixabayAPIkey}&orientation=horizontal&safesearch=true&per_page=100`
      )
    .then((data) => {
      return data.json();
    })
    .then((pics) => {
        console.log(pics)
        // creating a random number for index to pick one of the images from 100 we will get
        let randomImage = pics.hits[Math.floor(Math.random() * 100)].largeImageURL;
        // set this random image to tbe the current background

        imageObj.link = randomImage;
        console.log(imageObj.link)

      })
    .catch((err) => {
      console.log(err);
    })

    console.log(imageObj.link)
    return imageObj.link;
  }

  export default RandBGImg;