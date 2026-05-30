const form = document.querySelector('form')

// const h= parseInt(document.querySelector('.#height').value)            
// This give u empty value

form.addEventListener('submit' , (e) => {
    e.preventDefault()

    const h= parseInt(document.querySelector('#height').value)
    const w= parseInt(document.querySelector('#weight').value)
    const results= document.querySelector('#results')

    if(h === '' || h<0 || isNaN(h))
    {
        results.innerHTML = "please give valid height"
    }
    else if(w === '' || w<0 || isNaN(w))
    {
        results.innerHTML = "please give valid weight"
    }
    else
    {
        results.innerHTML = `<span>Ans :- ${h+w}</span>`
    }
    

})
