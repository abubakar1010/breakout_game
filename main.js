const container = document.getElementById('container')
// const block = document.getElementById('block'h

const blockHeight = 20;
const blockWidth = 100;
const userStart = [230, 10]
// make blocks class

class Block{

    constructor(xAxis,yAxis){
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.bottomLeft = [xAxis, yAxis]
        
    }
}

// all blocks 

const blocks = [
        new Block(10, 270),
        new Block(120, 270),
        new Block(230, 270),
        new Block(340, 270),
        new Block(450, 270),
        new Block(10, 230),
        new Block(120, 230),
        new Block(230, 230),
        new Block(340, 230),
        new Block(450, 230),
        new Block(10, 190),
        new Block(120, 190),
        new Block(230, 190),
        new Block(340, 190),
        new Block(450, 190),
    ]

console.log(blocks[0]);

function addBlock(){

    blocks.forEach( function(element){
    const block = document.createElement('div')

        block.classList.add('block')

        block.style.left = element.bottomLeft[0] + 'px'
        block.style.bottom =  element.bottomLeft[1] + 'px'

        console.log(element.bottomLeft[0]);
        container.appendChild(block)

    })
}

addBlock()


const user = document.createElement('div')

        user.classList.add('user')

        user.style.left = userStart[0] + 'px'
        user.style.bottom =  userStart[1] + 'px'

        // console.log(element.bottomLeft[0]);
        container.appendChild(user)