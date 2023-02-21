


function SaveArticle(Article1){
    localStorage.setItem("Article1" , JSON.stringify(Article1));

}

function getArticle(){
  let Article = localStorage.getItem("Article1");
  if (Article == null){
    return [];
  }else{
    return JSON.parse(Article);
  }
}

function addArticle(product){
  
    let Article =  getArticle();
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