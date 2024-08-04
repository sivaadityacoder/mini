const monthNameE1 = document.getElementById("month-name")
const dayNameE1 = document.getElementById("day-name")
const dayNumE1 = document.getElementById("day-number")
const YearE1 = document.getElementById("year")

const date = new Date();
console.log(date.getMonth);
monthNameE1.innerText = date.toLocaleString("en", {
    month:"long"
})
dayNameE1.innerText = date.toLocaleString("en",{
    weekday: "long"
})
dayNumE1.innerText = date.getDate()

YearE1.innerText = date.getFullYear()

