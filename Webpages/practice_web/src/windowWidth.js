// const bodytag = document.querySelector("body");
// const Title = document.querySelector("h2");

// Title.style.color = "#fff"
// bodytag.style.backgroundColor = "#C678D1"

// const handleResize = () => {
//     const windowWidth = window.innerWidth;
//     if (windowWidth > 1000) {
//         bodytag.style.backgroundColor = "#f0e12c"
//     }else if(windowWidth >=800 && windowWidth <= 1000){
//         bodytag.style.backgroundColor = "#C678D1"
//     }else{
//         bodytag.style.backgroundColor = "#05AEE0"
//     }
// };


// window.addEventListener("resize", handleResize);

document.getElementsByTagName
const bodytag = document.querySelector("body");

const handleResize = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth > 1000) {
    bodytag.className = "yellow";
  } else if (windowWidth >= 800 && windowWidth <= 1000) {
    bodytag.className = "purple";
  } else {
    bodytag.className = "blue";
  }
};

window.addEventListener("resize", handleResize);
