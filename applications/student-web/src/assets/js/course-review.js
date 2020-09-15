
function check(checkbox) {
    if (checkbox.checked) $("#answer-box-"+ checkbox.id).addClass("answer-box-checked")
    else $("#answer-box-"+ checkbox.id).removeClass("answer-box-checked");
}