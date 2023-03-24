function generateSeries() {
    let numbers = [];
    let startingNumber = document.getElementById("numStart").value
    let EndingNumber = document.getElementById("numEnd").value
    let spacing = document.getElementById("gap").value


    for (let i = Number(startingNumber); i < Number(EndingNumber); i += Number(spacing)) {
        numbers += `${i} ,`
    }
    
    document.getElementById("result").innerHTML = numbers
}

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);