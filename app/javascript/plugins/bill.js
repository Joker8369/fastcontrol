
let temp = {}
const initCart = () => {
  let listArticles = document.getElementById("article")
  if (!listArticles)
  return
  const cart = document.querySelectorAll('.card-product-infos .add-to-cart').forEach(item => {
    item.addEventListener('click', event => {
    let name = event.currentTarget.dataset.name;
    let price = parseFloat(event.currentTarget.dataset.price);
    const key = Object.keys(temp)
    const last = key[key.length - 1]
    temp[`${name}`]= price
    console.log(last)
    if (key.includes(name))
      console.log( "article exist")
    else
      listArticles.insertAdjacentHTML("beforeend", `<tr><td >${name}</td><td >${temp[name]}</td><td >1</td></tr`);
  })
})
Object.keys(temp).forEach(name => listArticles.insertAdjacentHTML("beforeend", `<tr><td >${name}</td><td >${temp[name]}</td></tr></tr`));
}

export default initCart
