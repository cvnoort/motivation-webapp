function BGImg() {
    const randomImage = "/images/background-" + (Math.floor(Math.random() * 15) + 1).toString() + ".jpg";
    return randomImage;
  }

  export default BGImg;