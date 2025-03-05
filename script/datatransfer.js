let data = document.querySelector('#enter-data');
let dataButton = document.querySelector('#sendData');

dataButton.addEventListener('click', () => {
    const inputValue = document.getElementById("enter-data").value;

    let dataObj = {
        data: data.value
    };

    fetch("/data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({data: inputValue})
    })
    .then(response => response.json())
    .then(data => {
        displayData.textContent = `You entered: ${data.message}`;
    })
    .catch(err => {
        console.log("error: ", err);
    })
})