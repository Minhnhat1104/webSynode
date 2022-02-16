// function
let handleOrangePage = function() {
    let orangePageItems = document.querySelectorAll('.orange-img__item')
    let orangeIndexItems =document.querySelectorAll('.orange-index-item')
    let orangeItems = document.querySelectorAll('.orange-item')
    Array.from(orangeIndexItems).forEach(function(orangeIndexItem, index) {
        orangeIndexItem.onclick = function () {
            let orangePageActiveItem = document.querySelector('.orange-img__item.active')
            orangePageActiveItem.classList.remove('active')
            orangePageItems[index].classList.add('active')
    
            let orangeIndexActiveItem =document.querySelector('.orange-index-item.active')
            orangeIndexActiveItem.classList.remove('active')
            orangeIndexItems[index].classList.add('active')
    
            let orangeActiveItem = document.querySelector('.orange-item.active')
            orangeActiveItem.classList.remove('active')
            orangeItems[index].classList.add('active')
        }
    })
    
    Array.from(orangeItems).forEach(function(orangeItem, index) {
        orangeItem.onclick = function () {
            let orangePageActiveItem = document.querySelector('.orange-img__item.active')
            orangePageActiveItem.classList.remove('active')
            orangePageItems[index].classList.add('active')
    
            let orangeIndexActiveItem =document.querySelector('.orange-index-item.active')
            orangeIndexActiveItem.classList.remove('active')
            orangeIndexItems[index].classList.add('active')
    
            let orangeActiveItem = document.querySelector('.orange-item.active')
            orangeActiveItem.classList.remove('active')
            orangeItems[index].classList.add('active')
        }
    })
}

let handleFeatureHelp = function() {
    let helpItems = document.querySelectorAll('.help-item')
    let helpItemIconMinus = 
    Array.from(helpItems).forEach(function(helpItem, index) {
        helpItem.onclick = function() {
            let activeItem = document.querySelector('.help-item.active')
            if (activeItem) {
                activeItem.classList.remove('active')
            }
            helpItems[index].classList.add('active')
        }
        let minusIcon = helpItem.querySelector('.help-item-icon-minus')
        minusIcon.onclick = function(e) {
            helpItem.classList.remove('active')
            e.stopPropagation();
        }
    })
}



//execute funcitons
handleOrangePage()
handleFeatureHelp()