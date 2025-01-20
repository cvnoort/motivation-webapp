import background1 from './images/background-1.jpg';
import background2 from './images/background-2.jpg';
import background3 from './images/background-3.jpg';
import background4 from './images/background-4.jpg';
import background5 from './images/background-5.jpg';
import background6 from './images/background-6.jpg';
import background7 from './images/background-7.jpg';
import background8 from './images/background-8.jpg';
import background9 from './images/background-9.jpg';
import background10 from './images/background-10.jpg';
import background11 from './images/background-11.jpg';
import background12 from './images/background-12.jpg';
import background13 from './images/background-13.jpg';
import background14 from './images/background-14.jpg';
import background15 from './images/background-15.jpg';

function BGImg() {
    // Get a random quote to display
    const images = [ 
        background1, 
        background2, 
        background3, 
        background4, 
        background5, 
        background6, 
        background7, 
        background8, 
        background9,
        background10, 
        background11, 
        background12, 
        background13, 
        background14, 
        background15, 
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    return randomImage;
  }

  export default BGImg;