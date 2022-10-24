const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
]

const weekdays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
]

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4')

/*
console.log(items) nesse ponto retorna uma NodeList
NodeList(4) [h4.days, h4.hours, h4.mins, h4.secs]
*/

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

let futureDate = new Date(tempYear, tempMonth, tempDay + 7, 22, 30, 0);

//let futureDate = new Date(2024, 5, 10, 11, 30, 0);
//console.log(futureDate)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month]

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
//console.log(weekday)


giveaway.textContent = `A contagem termina na ${weekday}, ${date} de ${month}, ${year}, ${hours}:${mins}pm`
 if(weekday == 'Domingo' || weekday == 'Sábado'){
    giveaway.textContent = `A contagem termina no ${weekday}, ${date} de ${month}, ${year}, ${hours}:${mins}pm`
 }


// future time in ms
const futureTime = futureDate.getTime();


function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    // 1s = 1000ms
    // 1min = 60s
    // 1hr = 60min
    // 1d = 24hr

    //values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    //calculate all values
    let days = Math.floor(t / oneDay)
    //console.log(days)

    let hours = Math.floor((t % oneDay) / oneHour)
    console.log(hours)

    let mins = Math.floor((t % oneHour) / oneMinute)
    //console.log(mins)

    let secs = Math.floor((t % oneMinute) / 1000)
    //console.log(secs)

    // set values array
    const values = [days, hours, mins, secs];

    const format = (item) => {
        if (item < 10){
            return item = `0 ${item}`
        }
        return item;
    }
    

    items.forEach(function(item, index){
        item.innerHTML = values[index]
    })

    if ( t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4>Congrats, meu bem, cê chegou nessa caralha!</h4>`
    }
}

// countdown 
let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime();