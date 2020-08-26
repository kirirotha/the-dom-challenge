
let counterPoint = document.getElementById('counter').innerHTML


function incrementSeconds() {
    counterPoint = Number(counterPoint) + 1;
    document.getElementById('counter').innerHTML = counterPoint;
}

function decrementSeconds() {
    counterPoint = Number(counterPoint) - 1;
    document.getElementById('counter').innerHTML = counterPoint;
}

let counter = setInterval(incrementSeconds, 1000);

document.getElementById('+').addEventListener('click', function() {
    incrementSeconds();
});
document.getElementById('-').addEventListener('click', function() {
    decrementSeconds();
});
let counterLikes = {}
let likeCounter = function(counter){
    if (counterLikes[counter]){
        counterLikes[counter] += 1
    } else {
        counterLikes[counter] = 1
    }
}

document.getElementById('<3').addEventListener('click', function() {
    likeCounter(document.getElementById('counter').innerHTML)
    let time = function(){
    if (counterLikes[document.getElementById('counter').innerHTML] === 1){
        return 'time'
    } else {
        return 'times'
    }
    }
    let result = `${document.getElementById('counter').innerHTML} has been liked ${counterLikes[document.getElementById('counter').innerHTML]} ${time()}`
    let li = document.createElement('li');
    document.querySelector('.likes').appendChild(li).innerHTML = result
});
let enable = false
function pause(a) {
    enable = !enable
        document.getElementById('-').disabled = enable;
        document.getElementById('+').disabled = enable;
        document.getElementById('<3').disabled = enable;
    if (enable){
        clearInterval(counter);
        document.getElementById('pause').innerHTML = 'resume'
    }else{
        counter = setInterval(incrementSeconds, 1000);
        document.getElementById('pause').innerHTML = 'pause'
    }
}

document.getElementById('pause').addEventListener('click', pause);



document.getElementById('submit').addEventListener('click', function(a) {
    a.preventDefault();
    let p = document.createElement('p');
    document.getElementById('list').appendChild(p).innerHTML = document.getElementById('comment').value
    
});


