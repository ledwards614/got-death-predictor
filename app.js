var prediction = [
    'Dead', 
    'Alive',
    'Wight'
]

function newPrediction() {
var randomNumber = Math.floor(Math.random() * prediction.length);
document.querySelector('.predictor').innerHTML = prediction[randomNumber];
}

