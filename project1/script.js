const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach( (button)=> {                                  // lambda fun. for each button iteration
    button.addEventListener('click', (e)=> {                   // 2nd argu. ma lambda function 6
        // switch(e.target.id)
        // {
        //     case 'grey':
        //         body.style.backgroundColor=e.target.id
        //         break;
        //     case 'white':
        //         body.style.backgroundColor=e.target.id
        //         break;
        //     case 'blue':
        //         body.style.backgroundColor=e.target.id
        //         break;
        //     case 'yellow':
        //         body.style.backgroundColor=e.target.id
        //         break;
        // }
        body.style.backgroundColor=e.target.id
    })
})
