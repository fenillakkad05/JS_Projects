# Project 1.  Color Change Project

There are four colored boxes. Clicking on any box changes the background color of the page to the same color as that box.

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach( (button)=> {                                  // Lambda fun. for each button iteration
    button.addEventListener('click', (e)=> {                   // In 2nd Argu. Lambda fun. 
         switch(e.target.id)
         {
             case 'grey':
                 body.style.backgroundColor=e.target.id
                 break;
             case 'white':
                 body.style.backgroundColor=e.target.id
                 break;
             case 'blue':
                 body.style.backgroundColor=e.target.id
                 break;
             case 'yellow':
                 body.style.backgroundColor=e.target.id
                 break;
         }
    })
})

```
