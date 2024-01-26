
// crew hero nav arrows
const crewHeroArrows = document.querySelector('.crew-hero-nav')
const leftCrewArrow = crewHeroArrows.querySelector('.left-arrow')
const rightCrewArrow = crewHeroArrows.querySelector('.right-arrow')

//buttons array
const tabButtons = document.querySelectorAll('[role=tab]')
let index = 0

tabs.forEach((tab)=> tab.addEventListener('mousedown', findCurrentIdx))

let currentButton = tabButtons[0]
function findCurrentIdx(){
    currentButton = tabList.querySelector('[aria-selected="true"]')
    for(var i=0; i < tabButtons.length; i++){
        if(tabButtons[i] == currentButton){
            index = i;
        }        
    }
}

// add event listener that will increase and decrease the index
leftCrewArrow.addEventListener('mousedown',(e) => {
    if(index === 0){
        index = 4;
    }
     
    changeTabPanel(tabButtons[--index])
})


rightCrewArrow.addEventListener('mousedown',(e) => {
    if(index === 3){
        index = -1;
    }
     
    changeTabPanel(tabButtons[++index])
})







let initialX;
document.addEventListener('touchstart', (e) => {
  initialX = e.touches[0].clientX;
  console.log(e.touches)
});


document.addEventListener('touchmove', (e) => {
  const currentX = e.touches[100].clientX;
  // Detect the direction of the swipe
  if (currentX < initialX) {
    // Swipe left
    if(index === 0){
        index = 4;
    }

    changeTabPanel(tabButtons[--index])  } 
    
  else if (currentX > initialX) {
    // Swipe right
    if(index === 3){
        index = -1;
    }
    changeTabPanel(tabButtons[++index])  
}

  // Update the initial position for the next touchmove event
//   initialX = currentX;
});