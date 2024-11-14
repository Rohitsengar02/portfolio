const tr = gsap.timeline();
gsap.from("nav div",{
  opacity:0,
  duration:1,
  y:-200,
  delay:2,
})
gsap.from("#animate #div1 h1",{
  opacity:0,
  duration:0.5,
  x:20,
  stagger:-0.15,
  delay:1.8
})
gsap.from("#animate #div2 h1",{
  opacity:0,
  duration:0.5,
  x:-20,
  stagger:0.15,
  delay:1.8
})
tr.from("#header .content h4",{
  opacity:0,
  duration:1,
  y:10,
  delay:3
})
gsap.from("#header .content .rr",{
  opacity:0,
  duration:1,
  delay:3,
  y:-10
})
gsap.from("#social",{
  opacity:0,
  duration:1,
  delay:2.3,
  y:10
})
gsap.from("#text",{
  opacity:0,
  duration:1,
  delay:2.3,
  y:10
})


var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 4000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()