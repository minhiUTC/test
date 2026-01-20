const nameInput = document.querySelector("#input__name")
const submitBtn = document.querySelector(".form-submit")

submitBtn.onclick = (e) => {
    e.preventDefault()
    checkEmpty(nameInput.value, nameInput)
}

function getMessage(msg, elm) {
    const msgElm = elm.nextElementSibling
    msgElm.textContent = msg
}

function toggleMessage(isValid, elm) {
    if (isValid) {
        elm.parentElement.classList.remove("invalid")
        getMessage("", elm)
    } else {
        elm.parentElement.classList.add("invalid")
    }
}

nameInput.onchange = (e) => {
    checkEmpty(e.target.value, nameInput)
}

function checkEmpty(val, elm) {
    if (val.trim().length <= 0) {
        toggleMessage(false, elm)
        getMessage("Vui lòng không để trống!", elm)
    } else {
        toggleMessage(true, elm)
    }
}
/* Không chỉnh sửa bất kì đoạn code nào ở trên */
/* Code từ đây */
