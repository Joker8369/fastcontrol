// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"


Rails.start()
Turbolinks.start()
ActiveStorage.start()

import initCart from "../plugins/bill";
document.addEventListener('turbolinks:load', () => {
  initCart();
});

// const temp = {}
//   const list_articles = document.getElementById("article")
//   const cart = {
//     names: [],
//     prices: []
//   }

// document.querySelectorAll('button').forEach(item => {
  //   item.addEventListener('click', event => {
//     const name = event.target.dataset.name;
//     const price = parseFloat(event.target.dataset.price);
//     cart.names.push(name), cart.prices.push(price)
//     temp[`${name}`] = price
//     cart.names.forEach(name => list_articles.insertAdjacentHTML("beforeend", `<tr><td >${name}</td><td >${temp[name]}</td></tr></tr`));
//   })

// })
// cart.names.forEach(name =>
//   list_articles.insertAdjacentHTML("beforeend", `<tr><td >${name}</td><td >${temp[name]}</td></tr></tr`));
