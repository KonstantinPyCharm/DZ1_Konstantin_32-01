// GMAIL CHECKER

const gmail_input = document.querySelector('#gmail_input')
const gmail_button = document.querySelector('#gmail_button')
const gmail_result = document.querySelector('#gmail_result')

const regExp = /[a-z0-9]{6}@gmail.com$/gi

gmail_button.onclick = () => {
    if (regExp.test(gmail_input.value)) {
        gmail_result.innerHTML = 'OK'
        gmail_result.style.color = 'green'
    } else {
        gmail_result.innerHTML = 'NOT OK'
        gmail_result.style.color = 'red'
    }
}

//

const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

function moveRight(position) {
      if (position <= parentBlock.clientWidth - childBlock.clientWidth) {
        childBlock.style.left = position + 'px';
        setTimeout(() => moveRight(position + 1), 10);
      }
    }

    moveRight(0);