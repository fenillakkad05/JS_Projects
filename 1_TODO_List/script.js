const inp=document.getElementById('input-box')
const con =document.getElementById('list-container')

function addTask()
{
    if(inp.value === '')
        alert('you must enter something.')
    else
    {
        let li=document.createElement('li')
        li.innerHTML = inp.value;
        con.appendChild(li);

        let span =document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span);
    }
    inp.value =''
    saveData()
}

con.addEventListener('click' , (e)=>{
    if(e.target.tagName === 'LI')
    {
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName === 'SPAN')
    {
        e.target.parentElement.remove();
        saveData()
    }
} , false);

function saveData()
{
    localStorage.setItem('data',con.innerHTML)
}

function showTask()
{
    con.innerHTML=localStorage.getItem('data');
}
showTask()
