

const donateBtns = document.querySelectorAll(".donate-btn");


const updateNavberBlance = (amountblance) =>{
    const navberBlance = parseFloat(document.getElementById('total-Amount').innerText);
    const remainingBalance = navberBlance - amountblance;
    document.getElementById('total-Amount').innerText = remainingBalance.toFixed(2);
}


const addToDonationHistory = (amountblance, cardTitle) => {
    const historyContainer = document.getElementById('donation-history');
    const historyEntry = document.createElement('div');
    console.log(historyEntry)
    historyEntry.classList.add('border','p-4','rounded-lg', 'shadow-sm');
    historyEntry.innerHTML = `
    <h3 class="font-semibold"> Title : ${cardTitle} </h3>
    <p>Donation Amount : ${amountblance} </p>
    <p>Date : ${new Date().toLocaleString()} </p>
    `;
    historyContainer.appendChild(historyEntry);
};


const handleDonate = (button) =>{
    const cardElement = button.closest('.section-body')
    const navBarBlance = parseFloat(document.getElementById('total-Amount').innerText);
    const amountblance = parseFloat(cardElement.querySelector('.input-class').value);
    if(isNaN(amountblance) || amountblance <= 0 || amountblance > navBarBlance){
        alert('Please input valid value')
        return;
    }
    updateNavberBlance(amountblance);

    const cardBlance = parseFloat(cardElement.querySelector('.card-blance').innerText);
    const newCardBlance = cardBlance + amountblance;
    cardElement.querySelector('.card-blance').innerText = newCardBlance.toFixed(2);
    const cardTitle = cardElement.querySelector('.text-2xl').innerText;
    
    addToDonationHistory(amountblance, cardTitle);
    cardElement.querySelector('.input-class').value = '';
    document.getElementById('my_modal_1').showModal();

}


donateBtns.forEach((btn)=>{
    btn.addEventListener('click',function(e){
        handleDonate(e.target);
    }) 
});

document.getElementById('history-btn').addEventListener('click',() =>{
    document.getElementById('donation-btn').classList.remove('active');
    document.getElementById('history-btn').classList.add('active');
    document.getElementById('main-section').classList.add('hidden');
    document.getElementById('donation-history').classList.remove('hidden');
})
document.getElementById('donation-btn').addEventListener('click',() =>{
    document.getElementById('donation-btn').classList.add('active');
    document.getElementById('history-btn').classList.remove('active');
    document.getElementById('main-section').classList.remove('hidden');
    document.getElementById('donation-history').classList.add('hidden');
})