const num = document.getElementById('numInput');
const numInputBtn = document.getElementById('count');
const resultDiv = document.getElementById('countResult');
const clearBtn = document.getElementById('clearCount');


numInputBtn.addEventListener('click', () => {
    const n = Number(num.value);
    if (isNaN(n) || n < 1) {
        resultDiv.textContent = 'Please enter a valid positive number.';
        resultDiv.style.color = 'crimson';
        console.error('Please enter a valid positive number.');
        // ageResult.textContent = 'Please enter a valid number for number.';
        // ageResult.style.color = 'crimson';
        return;
    }

    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
    // resultDiv.innerHTML = output.trim();
    resultDiv.textContent = output.trim();
    resultDiv.style.color = 'black';
    
});
 clearBtn.addEventListener('click', () => {
    num.value = ""; 
    resultDiv.textContent = "";
    resultDiv.removeAttribute('style');

});