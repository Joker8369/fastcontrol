
let bill = {}
const initCart = () => {
  let listArticles = document.getElementById("article")
  if (!listArticles)
  return
  let qty = 0
  const cart = document.querySelectorAll('.card-product-infos .add-to-cart').forEach(item => {
    console.log("avant ajour article " , bill)
    item.addEventListener('click', event => {
      let name = event.currentTarget.dataset.name;
      let q = document.getElementById(`${name}`)
      let price = parseFloat(event.currentTarget.dataset.price);
    const key = Object.keys(bill)
    const last = key[key.length - 1]
      if (key.includes(`${name}`)){
      const qty = prompt("quantité");
      bill[`${name}`] = [price, qty]
      q.innerHTML = qty,
        console.log(bill[`${name}`][1])
      console.log(q)
      }
      else {
      const qty = 1
      bill[`${name}`] = [price, qty]
        listArticles.insertAdjacentHTML("beforeend", `<tr><td >${name}</td><td >${bill[`${name}`][0]}</td><td id=${name}>${bill[`${name}`][1]}</td></tr`)
      };
    });
    return qty
});
  Object.keys(bill).forEach(name => listArticles.insertAdjacentHTML("beforeend", `<tr><td >${name}</td><td >${bill[`${name}`][0]}</td><td id=${name}>${bill[`${name}`][1]}</td></tr`));
};

export default initCart
