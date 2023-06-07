document.addEventListener("DOMContentLoaded", function () {

    const FullName = document.getElementById('nameinput');
    const email = document.getElementById('emailinput')
    const password = document.getElementById('passwordinput')
    const confirm = document.getElementById('ConfirmInput')
    const Button = document.getElementById('signinbtn')

    console.log(FullName.value);

    FullName.addEventListener("input", function () {
        const namevalue = FullName.value;
        console.log("NAME VALUE : " , namevalue);

        const errorSpan = document.getElementById('name-error');

        if (errorSpan) {
            errorSpan.remove(); // Remove the existing error message if it exists
        }

        for (let i = 0; i < namevalue.length; i++) {
            if (isNaN(namevalue[i]) === false || !/^[a-zA-Z]+$/.test(namevalue[i])) {
                const errorMessage = "Do not enter numbers or special characters in the name!";
                const span = document.createElement('span');
                span.id = 'name-error';
                span.style.color = 'red';
                span.textContent = errorMessage;
                FullName.parentNode.appendChild(span);
                break;
            }
        }
    });
})



// function ClickButton(){
//     console.log("button clicked");
// }
