const container = document.getElementById('container')
// const block = document.getElementById('block')

function addBlock(){

    const block = document.createElement('div')

    block.classList.add('block')

    block.style.left = '100px'
    block.style.bottom = '50px'

    container.appendChild(block)
}

addBlock()