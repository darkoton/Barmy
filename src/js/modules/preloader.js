document.addEventListener("DOMContentLoaded", () => {

  const mediaFiles = Array.from(document.querySelectorAll("img, video"))
  let i = 0
  const preloader = document.querySelector(".preloader")
  const percent = document.querySelector(".preloader .percent > span")
  mediaFiles.forEach(file => {
    if (!file.complete) {
      file.onload = () => {
        i++
        if (i == mediaFiles.length) {
          percent.textContent = '100'
          preloader.classList.add("preloader--hide")
        } else {
          percent.textContent = ((i * 100) / mediaFiles.length).toFixed()
        }
      }
    } else {
      i++
      if (i == mediaFiles.length) {
        percent.textContent = '100'
        preloader.classList.add("preloader--hide")
      } else {
        percent.textContent = ((i * 100) / mediaFiles.length).toFixed()
      }
    }

  });
})