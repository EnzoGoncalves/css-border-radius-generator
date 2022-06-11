const inputs = document.querySelectorAll('form input')
const box = document.querySelector('.box')
const unit = document.querySelector('select')
const clip = document.querySelector('div:nth-child(3) div')
const spans = document.querySelectorAll('div:nth-child(3) span')

inputs.forEach(element => {
    element.addEventListener('keyup', () => {
        borderRadius(unit.value)
        getStyle()
    })
});

unit.addEventListener('change', () => {
    borderRadius(unit.value)
    getStyle()
})

function borderRadius(unit) {
    changeBorderRadius(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value), Number(inputs[3].value), unit)
}

function changeBorderRadius(one, two, three, four, unit) {
    box.style.borderRadius = `${one + unit} ${two + unit} ${four + unit} ${three + unit}`
}

function copy() {
    navigator.clipboard.writeText(clip.textContent)
}

function getStyle() {
    spans.forEach(span => {
        span.textContent = "border-radius: "
        span.textContent += box.style.borderRadius + ";";
    })
}

getStyle()

