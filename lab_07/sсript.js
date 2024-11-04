let balance = 100;
const num = 5;
const tries = 3;

function guessNum(){
    const randomNum = Math.floor(Math.random() * num) + 1;
    for (let i = 0; i < tries; i++){
        const guess = parseInt(prompt('Choose a number from 1 to 5'));
        
        if (guess === randomNum){
            let reward = 0;

            if(i === 0){
                reward += 40;
            } else if (i === 1){
                reward += 20;
            }
            else if (i === 2){
                reward += 10;
            }

            balance += reward;
            alert(`You guessed the number ${randomNum}! Your balance is ${balance}`);
        }
        else {
            balance -= 20;
            alert(`You didn't guess. Your balance is ${balance}`);
        }
    }

    
    if (balance <= 0){
        alert(`You lose. Your balance is ${balance}`);
    } else {
        alert('Game over! You have no balance left.');
    }
}

guessNum();