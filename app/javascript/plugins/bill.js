
let bill = {}
const initCart = () => {
  let listArticles = document.getElementById("article")
  if (!listArticles)
  return
  const cart = document.querySelectorAll('.card-product-infos .add-to-cart').forEach(item => {
    console.log("avant ajour article " , bill)
    item.addEventListener('click', event => {
      let name = event.currentTarget.dataset.name;
      let price = parseFloat(event.currentTarget.dataset.price);
      let q = document.getElementById(`${name}`)
      let subsum = document.getElementById(`int${name}`)
      let intTotal = document.getElementsByClassName(`totalCol`)
      const key = Object.keys(bill)
      const last = key[key.length - 1]
      if (key.includes(`${name}`)){
        const qty = prompt("quantité");
        bill[`${name}`] = [price, qty]
        q.innerHTML = qty,
        subsum.innerHTML = qty * price
      }
      else {
        const qty = 1
        bill[`${name}`] = [price, qty]
        listArticles.insertAdjacentHTML("beforeend", `<tr><td >${name}</td><td >${bill[`${name}`][0]}</td><td id=${name}>${bill[`${name}`][1]}</td><td id = int${name} class="totalCol">${bill[`${name}`][1] * bill[`${name}`][0]}</td></tr`)
      };
    });
  });
  let subtotal = []
  Object.keys(bill).forEach(name => {
    let sum = bill[`${name}`][1] * bill[`${name}`][0]
    listArticles.insertAdjacentHTML("beforeend", `<tr><td >${name}</td><td >${bill[`${name}`][0]}</td><td id=${name}>${bill[`${name}`][1]}</td><td id = int${name} class="totalCol">${sum}</td></tr`)
    subtotal.push(sum)
  });
  console.log(subtotal)
  let result = 0
  const total = document.querySelector(".total")
  console.log (total)
  if ((subtotal.length === 0)){
    console.log('la')
    return total.innerText = result
    } else {
    console.log("je suis la ", subtotal)
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    let result = subtotal.reduce(reducer)
    total.innerText = result
  }
};

export default initCart
