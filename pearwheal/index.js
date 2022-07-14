
let submitBtn = document.getElementById('submit')
let mess = document.getElementById('passwordmes')
// let passwordMessage = document.getElementById('passwordmes').innerText('Your Password must be more than 6 characters')

submitBtn.onclick = function() { 
    let usernameIpt = document.getElementById('username')
    let passwordIpt = document.getElementById('password')
    let username = usernameIpt.value
    let password = passwordIpt.value

    if (username === '') {
        alert('Please enter a valid username')
        return
    } else if (password.length < 6 || password === ' ') {
        mess.innerHTML = 'Your password must be at list 6 characters'
        // alert('Your password must be at list 6 characters')
        return
    }
    
    alert('Finish')
}
