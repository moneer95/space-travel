
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
    console.log(index)
})


rightCrewArrow.addEventListener('mousedown',(e) => {
    if(index === 3){
        index = -1;
    }
     
    changeTabPanel(tabButtons[++index])
    console.log(index)
})