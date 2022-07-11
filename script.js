const startButton = document.querySelector('.start-button');
const logoSpanOne = document.querySelector('.start-logo span:nth-child(1)');
const logoSpanTwo = document.querySelector('.start-logo span:nth-child(2)');
const logoSpanThree = document.querySelector('.start-logo span:nth-child(3)');
const paperLogo = document.querySelector('.start-image:nth-of-type(1)');
const rockLogo = document.querySelector('.start-image:nth-of-type(2)');
const scissorsLogo = document.querySelector('.start-image:nth-of-type(3)');


function changeStyle(target, property, value) {
    const changeValue = `${property+':'+ value }`;
    target.setAttribute('style', changeValue);   
}

function createStartBoard() {
    changeStyle(logoSpanOne, 'top', '0'); 
    changeStyle(logoSpanTwo, 'left', '0');
    changeStyle(logoSpanThree, 'left', '0');
    changeStyle(startButton, 'bottom', '20%');
    changeStyle(paperLogo, 'transform', 'scale(100%)');
    paperLogo.classList.add('paper-animation');
    rockLogo.classList.add('rock-animation');
    scissorsLogo.classList.add('scissors-animation');
}




//code flow
//start board handle
window.onload = createStartBoard();