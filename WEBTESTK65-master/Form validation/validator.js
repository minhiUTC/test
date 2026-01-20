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
const emailInput = document.querySelector("#input__email");
const passwordInput = document.querySelector("#input__password");
const passwordConfirmInput = document.querySelector("#input__password-again");
const provinceInput = document.querySelector("#province");
const genderInputs = document.querySelectorAll('input[name="gender"]');

const fields = [nameInput, emailInput, passwordInput, passwordConfirmInput, provinceInput];

fields.forEach(input => {
    input.oninput = () => {
        toggleMessage(true, input);
    }
});

[emailInput, passwordInput, passwordConfirmInput, provinceInput].forEach(input => {
    input.onblur = () => {
        checkEmpty(input.value, input);
    }
});

document.addEventListener('click', (e) => {
    [emailInput, passwordInput, passwordConfirmInput, provinceInput].forEach(input => {
        checkEmpty(input.value, input);
    });

    let genderCheck = Array.from(genderInputs).some(radio => radio.checked);
    let containerGender = document.querySelector('input[name="gender"]').closest('.input-form');
    
    if ( genderCheck) {
        containerGender.classList.add("invalid");
        containerGender.querySelector('.form-message').textContent = "Vui lòng chọn giới tính!";
    } else {
        containerGender.classList.remove("invalid");
        containerGender.querySelector('.form-message').textContent = "";
    }
});

genderInputs.forEach(radio => {
    radio.onchange = () => {
        const containerGender = radio.closest('.input-form');
        containerGender.classList.remove("invalid");
    }
});