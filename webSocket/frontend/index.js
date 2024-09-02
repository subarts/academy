const ws = new WebSocket("ws://localhost:8080")

/* регистрация */
function registerUser(username, password) {
  const registerData = {
    type: "register",
    username,
    password,
  }
  ws.send(JSON.stringify(registerData))
}

document.querySelector(".register__button").addEventListener("click", () => {
  const username = document.querySelector(".user").value
  const password = document.querySelector(".password").value
  registerUser(username, password)
})
/* закрытие */
document.querySelector(".disconnect__button").addEventListener("click", () => {
  document.querySelector(".message__button").disabled = true
  console.log("соединение с сервером отключено")
  ws.close()
})
/* отправка */
const send = document.querySelector(".message__button")
send.addEventListener("click", () => {
  const message = document.querySelector("#message")
  const messageData = {
    type: "message",
    message: message.value,
  }
  message.value = ""
  ws.send(JSON.stringify(messageData))
})
/* прием*/
ws.onmessage = function message(message) {
  const data = JSON.parse(message.data)
  switch (data.type) {
    case "register":
      data.success
        ? console.log("регистрация прошла успешно")
        : console.log("Ошибка регистрации, такое имя уже занято")
      break
    case "auth":
      switch (data.success) {
        case true:
          console.log("Авторизация прошла успешно")
          document.querySelector(".message__button").disabled = false
          break
        case false:
          console.log("Ошибка авторизации")
          document.querySelector(".message__button").disabled = true
          break
        default:
          break
      }
      break
    case "message":
      let p = document.createElement("p")
      p.innerText = `отправитель: ${data.sender}\n сообщение: ${data.message}`
      document.querySelector(".receipt").prepend(p)
    default:
      break
  }
}
/* авторизация */
const login = document.querySelector(".login__button")
login.addEventListener("click", () => {
  const username = document.querySelector(".login").value
  const password = document.querySelector(".pass").value
  const authData = {
    type: "auth",
    username,
    password,
  }
  ws.send(JSON.stringify(authData))
})
