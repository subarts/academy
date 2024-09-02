const form = document.querySelector("form")
const submit = document.querySelector(".search")
const numberVZN = document.querySelector(".numberVZN")
const senderForm = document.querySelector(".sender__form")
const recipientForm = document.querySelector(".recipient__form")
const dateForm = document.querySelector(".date__form")
const firstDate = document.querySelector(".firstDate")
const secondDate = document.querySelector(".secondDate")
const invoice = document.querySelector("#invoice")
const sender = document.querySelector("#sender")
const recipient = document.querySelector("#recipient")

submit.addEventListener("click", () => {
  const valid = isValiidInvoice(invoice.value)
  const validSender = isValidSender(sender.value)
  const validRec = isValidRec(recipient.value)
  const validPeriod = isValidPeriod(firstDate.value, secondDate.value)

  if (!valid || !validSender || !validRec || !validPeriod) {
    console.log("lose")
    return
  }
  form.submit()
  alert("Успешно отправленно")
})

invoice.oninput = function (event) {
  event.target.setCustomValidity("")
}
sender.oninput = function (event) {
  event.target.setCustomValidity("")
}
recipient.oninput = function (event) {
  event.target.setCustomValidity("")
}
firstDate.oninput = function (event) {
  event.target.setCustomValidity("")
}
secondDate.oninput = function (event) {
  event.target.setCustomValidity("")
}
function isValiidInvoice(inv) {
  if (inv <= 0) {
    invoice.setCustomValidity("Номер ВНЗ должен быть положительным числом")
    numberVZN.classList = "invalid"
    return false
  } else if (inv.toString().length > 20) {
    invoice.setCustomValidity("Номер ВНЗ должен быть не больше 20 знаков")
    numberVZN.className = "invalid"
    return false
  }
  numberVZN.className = "valid"
  return true
}
function isValidSender(send) {
  if (send.toString().length === 0) {
    sender.setCustomValidity("Отправитель не должен быть пустой строкой")
    senderForm.className = "invalid"
    return false
  }
  if (send.toString().length > 50) {
    sender.setCustomValidity("Отправитель должен быть не больше 50 знаков")
    senderForm.className = "invalid"
    return false
  }
  senderForm.className = "valid"
  return true
}

function isValidRec(recp) {
  if (recp.toString().length === 0) {
    recipient.setCustomValidity("Получатель не должен быть пустой строкой")
    recipientForm.className = "invalid"
    return false
  }
  if (recp.toString().length > 50) {
    recipient.setCustomValidity("Получатель должен быть не больше 50 знаков")
    recipientForm.className = "invalid"
    return false
  }
  recipientForm.className = "valid"
  return true
}
function isValidPeriod(frt, scd) {
  if (frt.length === 0) {
    dateForm.className = "invalid"
    firstDate.setCustomValidity("Введите начальную дату")
    return
  } else if (scd.length === 0) {
    dateForm.className = "invalid"
    secondDate.setCustomValidity("Введите конечную дату")
    return
  }
  const first = Number(frt.split("-").join(""))
  const second = Number(scd.split("-").join(""))
  if (first < second) {
    dateForm.className = "valid"
    return true
  } else {
    dateForm.className = "invalid"
    firstDate.setCustomValidity("Начальная дата не может быть больше конечной")
    return false
  }
}
