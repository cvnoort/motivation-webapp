function BGImg() {
    const randomImage = "/src/images/background-" + Math.floor(Math.random() * 15).toString() + ".jpg";
    return randomImage;
  }

  export default BGImg;