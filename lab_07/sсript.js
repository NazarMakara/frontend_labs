let balance = 100;  
const num = 5;      
const tries = 3;    

function guessNum() {
    while (balance > 0) {  
        const randomNum = Math.floor(Math.random() * num) + 1; 

        let reward = 0;
        for (let i = 0; i < tries; i++) {
            const guess = parseInt(prompt(`Choose a number from 1 to ${num}`), 10);

            if (guess === randomNum) {
                if (i === 0) {
                    reward = 40;
                } else if (i === 1) {
                    reward = 20;
                } else if (i === 2) {
                    reward = 10;
                }

                balance += reward;
                alert(`You guessed! You earn +${reward}. Your balance is ${balance}`);
                break;
            } else {
                alert(`Wrong guess. Try again!`);
            }
        }

        if (reward === 0) {
            balance -= 20;  
            alert(`You didn't guess. You lose 20. Your balance is ${balance}`);
        }
    }

    alert(`Game over! You lose. Your balance is ${balance}`);
}

guessNum();
