backgroundCount = 0;
currentFrame = 1;

function restartTimer() {
  timePrompt = setTimeout(function() {
    changeImage();

  }, 6000);
}

function changeImage() {
    const imgSrc = ['img2.webp','img2.jpeg']
  backgroundCount++;
  if(backgroundCount%2 == 0){
    imageUrl = "url(\'" + imgSrc[0] + "\')";
  }else{
    imageUrl = "url(\'" + imgSrc[1] + "\')";
  }


  if (currentFrame == 1) {
    currentName = "backgroundImage1";
    hideName = "backgroundImage2";
    currentFrame = 2;
  } else {
    currentName = "backgroundImage2";
    hideName = "backgroundImage1";
    currentFrame = 1;
  }
  document.getElementById(currentName).style.backgroundImage = imageUrl;
  document.getElementById(hideName).className = 'hide';
  document.getElementById(currentName).className = 'show';

  restartTimer();
}
restartTimer();