var bgColors = ['linear-gradient(to left, #2c3e20, #3498db)',' linear-gradient(to right, #009fff, #ec2f4b)','linear-gradient(to right, #654ea3, #eaafc8)','linear-gradient(to right, #ff416c, #ff4b2b)','linear-gradient(to bottom, #8a2387, #e94057, #f27121)','linear-gradient(to top, #a8ff78, #78ffd6)','linear-gradient(to top, #fdc830, #f37335)','linear-gradient(to right, #00b4db, #0083b0)','linear-gradient(to bottom, #4e54c8, #8f94fb)','linear-gradient(to bottom, #4e54c8, #8f94fb)','linear-gradient(to left, #355c7d, #6c5b7b, #c06c84)','linear-gradient(to left, #bc4e9c, #f80759)'];

var container = document.querySelectorAll('.container');

function backgroundPainter(){
  for(i in container){
    container[i].style.background = bgColors[i];
  }
}

backgroundPainter()