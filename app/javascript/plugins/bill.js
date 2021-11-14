const element = document.querySelector("#cards")
element.addEventListener("click", event => console.log(event.path[1].innerText));
