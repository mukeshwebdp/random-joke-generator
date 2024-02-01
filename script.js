const text = document.getElementById('joke');
const btn  = document.getElementById('btn');
const url = ' https://hindi-jokes-api.onrender.com/jokes?api_key=078a738bcb9bf36766b7b1f24088 ';

let getJoke = ()=>{
    text.classList.remove('fade')
    fetch(url)
    .then((data)=> data.json())
    .then((item)=> {
        text.innerText = `${item.jokeContent}`;
        text.classList.add('fade')
    });
    
}

btn.addEventListener('click',getJoke)