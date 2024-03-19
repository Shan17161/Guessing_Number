let random = Math.random()*100
random = Math.ceil(random)
console.log(Math.ceil(random))
let tries = 0;
document.querySelector('.tri_count').innerHTML = tries;
document.querySelector('.btn-1').addEventListener('click',()=>{
    let value = parseInt(document.querySelector('.number').value)
    tries = tries + 1 
    document.querySelector('.tri_count').innerHTML = tries;
    if(value===random){
        document.querySelector('.greet').innerHTML = document.querySelector('.greet').innerHTML + tries +" no.of tries"
        document.querySelector('.greet').style.display = 'block'
        document.querySelector('.lower').style.display = 'none'
        document.querySelector('.higher').style.display = 'none'
    }
    else if (value < random)
    {
        document.querySelector('.greet').style.display = 'none'
        document.querySelector('.lower').style.display = 'none'
        document.querySelector('.higher').style.display = 'block'
    }
    else if (value > random){
        document.querySelector('.greet').style.display = 'none'
        document.querySelector('.higher').style.display = 'none'
        document.querySelector('.lower').style.display = 'block'
    }
})
document.querySelector('.btn-2').addEventListener('click',(event)=>{
    window.location.reload()
})