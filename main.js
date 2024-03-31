let btn = document.getElementById('btn');
let ing = document.getElementById('ing');
let ans = document.getElementById('ans');

btn.addEventListener('click',function(){
   
if(ing.value === "pork"){
    ans.innerText = "Pork ginger";
} else if(ing.value === "yellowtail"){
    ans.innerText = "YT";
} else{
    ans.innerText = "NTM";
}

},false);

 // ans.innerText = ing.value

// function butClick(){
//     ans.innerText = ing.value;
// }


// let ing = document.getElementById('ing');

// {
//     console.log('Hello');
// }
// {   

//     const price = 3000;
//     console.log(price);
// }



{
    const h ="type";
    document.getElementById('ins').textContent = `${h}.in`;
}
