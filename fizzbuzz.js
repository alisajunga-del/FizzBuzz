const startValueInput = document.getElementById('startValue');
const endValueInput = document.getElementById('endValue');
const fizzValueInput = document.getElementById('fizzValue');
const buzzValueInput = document.getElementById('buzzValue');
const generateBtn = document.getElementById('generateBtn');
const clearBtn = document.getElementById('clearBtn');
const mainContainer = document.getElementById('mainContainer');

// Function to generate divs based on FizzBuzz logic
function generateDivs() {
    // Get values from inputs
    const startValue = parseInt(startValueInput.value) || 1;
    const endValue = parseInt(endValueInput.value) || 100;
    const fizzValue = parseInt(fizzValueInput.value) || 3;
    const buzzValue = parseInt(buzzValueInput.value) || 5;

    // Validate inputs
    if (startValue > endValue) {
        alert('Starting value must be less than or equal to ending value!');
        return;
    }

    if (fizzValue < 1 || buzzValue < 1) {
        alert('Fizz and Buzz values must be at least 1!');
        return;
    }

    // Clear existing divs
    clearDivs();

    // Generate divs
    for (let i = startValue; i <= endValue; i++) {
        const div = document.createElement('div');
        div.id = `myid${i}`;
        div.classList.add('generated-div');

        // Determine class and innerText based on divisibility
        const divisibleByFizz = i % fizzValue === 0;
        const divisibleByBuzz = i % buzzValue === 0;

        if (divisibleByFizz && divisibleByBuzz) {
            // Divisible by both
            div.classList.add('fizzbuzz');
            div.innerText = 'FizzBuzz';
        } else if (divisibleByFizz) {
            // Divisible by Fizz only
            div.classList.add('fizz');
            div.innerText = 'Fizz';
        } else if (divisibleByBuzz) {
            // Divisible by Buzz only
            div.classList.add('buzz');
            div.innerText = 'Buzz';
        } else {
            // Not divisible by either
            div.classList.add('number');
            div.innerText = i.toString();
        }

        // Add delay for staggered animation
        div.style.animationDelay = `${(i - startValue) * 0.01}s`;

        mainContainer.appendChild(div);
    }
}

// Function to clear all generated divs
function clearDivs() {
    mainContainer.innerHTML = '';
}

// Event listeners
generateBtn.addEventListener('click', generateDivs);
clearBtn.addEventListener('click', clearDivs);

// Generate initial divs on page load
window.addEventListener('DOMContentLoaded', generateDivs);

// Allow Enter key to trigger generation
[startValueInput, endValueInput, fizzValueInput, buzzValueInput].forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateDivs();
        }
    });
});
