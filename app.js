const upButton = document.querySelector(".up-button")
const downButton = document.querySelector(".down-button")
const left_sliders = document.querySelector(".left-slider")
const right_sliders = document.querySelector(".right-slider")
const slides_length = right_sliders.querySelectorAll("div").length
const slider_container = document.querySelector('.slider-container')
let activeSlideIndex = 0 

left_sliders.style.top = `-${(slides_length - 1) * 100}vh`

upButton.addEventListener("click", () => changeSlide("up"))
downButton.addEventListener("click",() => changeSlide("down"))

const changeSlide = (direction) => {
    const SliderHeight = slider_container.clientHeight
    if(direction === "up"){
        activeSlideIndex++
        if(activeSlideIndex >= slides_length){
            slides_length = 0
        }
    }else if(direction === "down"){
      activeSlideIndex--
      if(activeSlideIndex < 0){
          activeSlideIndex = slides_length -1
      } 
    }
    right_sliders.style.transform = `translateY(-${activeSlideIndex * SliderHeight}px)`
    left_sliders.style.transform = `translateY(${activeSlideIndex * SliderHeight}px)`
}