{
  const list = document.querySelector(".list__consigment")
  let counter = 0
  while (counter < 10) {
    counter++

    const div = document.createElement("div")
    const h4 = document.createElement("h4")
    const ul = document.createElement("ul")
    const sender = document.createElement("li")
    const recipient = document.createElement("li")
    const dateIssue = document.createElement("li")

    h4.innerText = `ВЗН №1323${counter}`
    ul.className = "item__consigment__descript"
    div.className = "item__consigment"

    sender.insertAdjacentHTML(
      "afterbegin",
      " Отправитель: <span>Цех 01 / участок Цеха 01</span>"
    )
    recipient.insertAdjacentHTML(
      "beforeend",
      "Получатель: <span>Цех 02 / участок Цеха 02</span>"
    )
    dateIssue.insertAdjacentHTML(
      "beforeend",
      "Дата выдачи: <span>15.06.2024</span>"
    )

    ul.appendChild(sender)
    ul.appendChild(recipient)
    ul.appendChild(dateIssue)
    div.appendChild(h4)
    div.appendChild(ul)
    list.appendChild(div)
  }
}
