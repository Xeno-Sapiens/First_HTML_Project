//console.log(1); //инструкция для вывода инфы в консоль (аналог debug.print в vba)

const knopka = document.querySelector('button'); //объявляем переменную константу 
const output = document.querySelector('.output'); 

//knopka.addEventListener('click',function(){
    ////output.innerHTML = 'Котики милые :)';
    //output.innerHTML = '<button>ТЫК</button>';
    //console.log(output.textContent)
//}); 

knopka.addEventListener('click',function(){
    if (output.textContent = 'ТЫК') {
        output.innerHTML = '<button>Котики милые</button>';
        console.log(output.textContent)
    } else {
        output.innerHTML = '<button>ТЫК</button>';
        console.log(output.textContent)
    }
}); 

knopka.ev

 