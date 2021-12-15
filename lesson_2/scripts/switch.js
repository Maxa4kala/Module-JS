import {clearParagraph, calcHTML, timerHTML} from "./output.js"
import {handleForm, diff} from "./calcDateDiff.js";
import listener from "./timer.js"
import bundlerPic from "../3.png"
// import "../output-css/style.css"
import "../styles/style.sass"

const pic = document.createElement('img');
pic.src = bundlerPic;
pic.onload = () => {
    document.body.appendChild(pic);
}

document.querySelectorAll('.switchBtn').forEach(btn => {
    const outputBlock = document.querySelector('.service');
    btn.addEventListener('click', (event) => {
        if (event.target.dataset.id === '1') {
            outputBlock.innerHTML = `${calcHTML}`;
            handleForm();
            diff();
        }
        if (event.target.dataset.id === '2') {
            clearParagraph();
            outputBlock.innerHTML = `${timerHTML}`;
            listener();
        }
    });
});