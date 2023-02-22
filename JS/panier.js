/*let button = document.getElementById(".fa-cart-shopping")

button.addEventListener(".fa-cart-shopping" , () =>{
  let optionProduct =
  {
    productId : productId ,
    quantity : document.getElementById('quantity').value,
    price : document.getElementById('price').value
  }

  if(productInLocalStorage){
    productInLocalStorage.push(optionProduct)
    localStorage.setItem("product", JSON.stringify(productInLocalStorage))
  }else{
    productInLocalStorage =[]
    productInLocalStorage.push(optionProduct)
    localStorage.setItem("product", JSON.stringify(productInLocalStorage))

  }
})
let Click = document.querySelectorAll('.fa-cart-shopping');
console.log(Click);

function SaveArticle(Article1){
    localStorage.setItem("Article1" , JSON.stringify(Article1));

}

function getArticle(){
  let Article = localStorage.getItem("fa-cart-shopping");
  if (Article == null){
    return [];
  }else{
    return JSON.parse(Article);
  }
}*/

function addArticle(product){
  
    let Article =  getArticle(".fa-cart-shopping");
    let foundProduct = Article.find(p => p.id == product.id);
    if(foundProduct != undefined){
        foundProduct.quantity++;
    }else{
        product.quantity = 1;
        Article.push(product);
    }
    
    SaveArticle(Article);
}

function removeFromArticle(product){
    let Article =  getArticle();
    Article = Article.filter(p => p.id != product.id);
    SaveArticle(Article);
}

function ChangeQuantity(product,  quantity){
    let Article =  getArticle();
    let foundProduct = Article.find(p => p.id == product.id);
    if(foundProduct != undefined){
        foundProduct.quantity += quantity;
}
SaveArticle(Article);
}

function getNumberProduct(){
  let Article =  getArticle();
  let number = 0;
  for(let product of Article){
    number += product.quantity;
  }
  return number;
}

function getPriceProduct(){
  let Article =  getArticle();
  let price = 0;
  for(let product of Article){
    price += product.quantity * product.price;
  }
  return price;
}

document.addEventListener('DOMContentLoaded', ()=>{
  const buttons = document.querySelectorAll('.fa-cart-shopping')
  buttons.forEach(icon => icon.addEventListener('click', (e)=>{
    const parent = e.target.closest('div')
    console.log('parent', parent)
  }))
})