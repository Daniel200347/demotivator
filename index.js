const inputFile = document.querySelector("[data-input-file]")
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const $setDemotivatorText = document.querySelector('.b-upload')
const $clearCanvas = document.querySelector('.b-clear')
const $downloadDemotivator = document.querySelector('.b-download')
const form = document.querySelector("form")
const inpit = document.querySelector("input")
drawDemotivatorTemplate();

inputFile.addEventListener('input', (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
        const image = new Image();
        image.src = reader.result
        image.onload = function () {
            ctx.drawImage(image, 54, 54, 392, 392);
        }
    };
    reader.readAsDataURL(e.target.files[0]);
})

$setDemotivatorText.addEventListener('click', userText);

function userText() {
    clearText();
    const demotivatorText = document.querySelector('.i-1').value;
    ctx.font = "20px Arial";
    ctx.textAlign = "center"
    ctx.fillStyle = "black";
    ctx.fillText(demotivatorText, 250, 484);
    document.querySelector('.i-1').value = "";
    ctx.fillStyle = "white";
}

function clearText () {
    ctx.fillRect(0, 450, 500, 500 );
}

$clearCanvas.addEventListener('click', drawDemotivatorTemplate)

$downloadDemotivator.addEventListener('click', downloadImg)

function downloadImg() {
    const downloadImg = (canvas.toDataURL());

    const link = document.createElement('a');

    link.setAttribute('href', downloadImg);

    link.setAttribute('download', "Результат");

    link.setAttribute('target', '_blank');

    link.style.display = 'none';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}

function drawDemotivatorTemplate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#E3E7ED";
    ctx.fillRect(50, 50, 400, 400);

    ctx.fillStyle = "white";
    ctx.fillRect(52, 52, 396, 396);
}
