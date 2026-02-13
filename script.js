const btn = document.getElementById("convert-btn")
const resetBtn = document.getElementById("reset-btn")
const valueInput = document.getElementById("value-input")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")

btn.addEventListener("click", function() {
    renderResult(valueInput.value)
})

valueInput.addEventListener("keydown", function (e) {
   if (e.key === "Enter") {
    e.preventDefault();
    renderResult(valueInput.value);
    }
})

resetBtn.addEventListener("click", function() {
    valueInput.value = ""
    lengthResult.innerHTML = "0 meters = 0 feet | 0 feet = 0 meters"
    volumeResult.innerHTML = "0 liters = 0 gallons | 0 gallons = 0 liters"
    massResult.innerHTML = "0 kilograms = 0 pounds | 0 pounds = 0 kilograms"
})

function renderResult(valueInput) {

    if (valueInput === "") {
        alert("Please enter a value to convert.")
        lengthResult.textContent = "0 meters = 0 feet | 0 feet = 0 meters"
        volumeResult.textContent = "0 liters = 0 gallons | 0 gallons = 0 liters"
        massResult.textContent = "0 kilograms = 0 pounds | 0 pounds = 0 kilograms"
        return
    }

    const num = Number(valueInput)
    if (isNaN(num)) {
        alert("Please enter a valid number.")
        return
    }

    const lengthFeet = num * 3.281
    const volumeGallons = num * 0.264
    const massPounds = num * 2.204
    const lengthMeters = num / 3.281
    const volumeLiters = num / 0.264
    const massKilograms = num / 2.204
    lengthResult.innerHTML = `${num} meters = ${lengthFeet.toFixed(3)} feet | ${num} feet = ${lengthMeters.toFixed(3)} meters`
    volumeResult.innerHTML = `${num} liters = ${volumeGallons.toFixed(3)} gallons | ${num} gallons = ${volumeLiters.toFixed(3)} liters`
    massResult.innerHTML = `${num} kilograms = ${massPounds.toFixed(3)} pounds | ${num} pounds = ${massKilograms.toFixed(3)} kilograms`
}

