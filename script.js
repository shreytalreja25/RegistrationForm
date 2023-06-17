document.addEventListener("DOMContentLoaded", function () {

    const FullName = document.getElementById('nameinput');
    const LastName = document.getElementById('lastnameinput');
    const Email = document.getElementById('emailinput')
    const Password = document.getElementById('passwordinput')
    const confirmPassword  = document.getElementById('ConfirmInput')
    const Button = document.getElementById('signinbtn')

    Email.addEventListener("input",function(){
        const emailvalue = Email.value;
        const errorSpan = document.getElementById('email-error');

        if (errorSpan) {
            errorSpan.remove(); // Remove the existing error message if it exists
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailvalue)) {
            const errorMessage = "Please enter a valid email address!";
            const span = document.createElement('span');
            span.id = 'email-error';
            span.style.color = 'red';
            span.textContent = errorMessage;
            Email.parentNode.appendChild(span);
        }
    })

    Password.addEventListener("input", function() {
        const passwordValue = Password.value;
        const errorSpan = document.getElementById('password-error');
    
        if (errorSpan) {
            errorSpan.remove(); // Remove the existing error message if it exists
        }
    
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(passwordValue)) {
            const errorMessage = "Password must be at least 8 characters long and contain at least 1 special character and 1 number.";
            const span = document.createElement('span');
            span.id = 'password-error';
            span.style.color = 'red';
            span.textContent = errorMessage;
            Password.parentNode.appendChild(span);
        }
    });
    
    confirmPassword.addEventListener("input", function() {
        const passwordValue = Password.value;
        const confirmPasswordValue = confirmPassword.value;
        const errorSpan = document.getElementById('confirm-error');
    
        if (errorSpan) {
            errorSpan.remove(); // Remove the existing error message if it exists
        }
    
        if (passwordValue !== confirmPasswordValue) {
            const errorMessage = "Please enter the same password as above.";
            const span = document.createElement('span');
            span.id = 'confirm-error';
            span.style.color = 'red';
            span.textContent = errorMessage;
            confirmPassword.parentNode.appendChild(span);
        }
    });
    

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

    LastName.addEventListener("input", function () {
        const namevalue = LastName.value;
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
                LastName.parentNode.appendChild(span);
                break;
            }
        }
    });

})


