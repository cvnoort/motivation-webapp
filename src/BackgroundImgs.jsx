import React, { useState, useEffect } from 'react';

function BGImg() {
    const randomImage = "/motivation-webapp/images/background-" + (Math.floor(Math.random() * 15) + 1).toString() + ".jpg";
    return randomImage;
  }

export default BGImg;