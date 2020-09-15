function check(checkbox) {
    if (checkbox.checked) $("#answer-box-" + checkbox.id).addClass("answer-box-checked")
    else $("#answer-box-" + checkbox.id).removeClass("answer-box-checked");
}

// let wordFill = document.getElementsByClassName("word-fill");
// let wordEmpty = document.getElementsByClassName("word-empty");

// for (let i = 0; i < wordFill.length; i++) {
//     wordFill[i].addEventListener("click", function () {
//         for (let i = 0; i < wordEmpty.length; i++) {
//             if (wordEmpty[i].innerText === "") {
//                 wordEmpty[i].innerText = this.innerText;
//                 this.style.display = "none";
//                 wordEmpty[i].setAttribute("id", this.getAttribute("id"));
//                 break;
//             }
//         }
//     });
// }
// for (let i = 0; i < wordEmpty.length; i++) {
//     wordEmpty[i].addEventListener("click", function () {
//         if (this.innerText !== "") {
//             this.innerText = "";
//             wordFill[this.getAttribute("id")].style.display = "inline-block";
//         }
//     });
// }