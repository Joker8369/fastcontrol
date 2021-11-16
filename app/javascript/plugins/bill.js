
let temp = {}
const initCart = () => {
  let listArticles = document.getElementById("article")
  if (!listArticles)
  return
  const cart = document.querySelectorAll('.card-product-infos .add-to-cart').forEach(item => {
    item.addEventListener('click', event => {
    let name = event.currentTarget.dataset.name;
    let price = parseFloat(event.currentTarget.dataset.price);
    temp[`${name}`]= price
    const key = Object.keys(temp)
    const last = key[key.length - 1]
    listArticles.insertAdjacentHTML("beforeend", `<tr><td >${last}</td><td >${temp[last]}</td></tr></tr`);
  })
})
Object.keys(temp).forEach(name => listArticles.insertAdjacentHTML("beforeend", `<tr><td >${name}</td><td >${temp[name]}</td></tr></tr`));
}

export default initCart
