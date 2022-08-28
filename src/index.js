const pic = document.getElementById("pic");
const images = document.getElementById("images");

pic.addEventListener("change", (e) => {
  console.log(e.target.value)

  var imgFiles = e.target.files;

  // console.log(imgFiles[0]);

  let array = [];
  for (let i = 0; i < imgFiles.length; i++) {
    const image = document.createElement("img");
    const img = imgFiles[i];
    const name = document.createElement("p");
    name.innerHTML = img.name;
    console.log(name.innerHTML)
    pic.classList.add("remove");
    image.src = URL.createObjectURL(img);
    image.classList.add("img");
    image.addEventListener("click", (e) => {
      if (array[i].classList.value === "clicked" || array[i].classList.value === "img clicked") {
        console.log("click contains")
      }
      if (array[i].classList.contains("clicked")) {
        console.log("yes")
        array[i].classList.remove("clicked")
        array[i].classList.add("img")
        console.log(array[i].classList.value)
      }
      else {
        e.target.classList.remove("img")
        e.target.classList.add("clicked")
        e.target.appendChild(name)
        console.log(array[i].classList.value)
      }
    })
    array.push(image);
    images.appendChild(image);
  }
  console.log(array)

})
