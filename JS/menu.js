
document.body.addEventListener("click",(e) => {
    if (e.target.id != 'elementsC' && e.target.id !=  'elementsA')
    document.getElementById('elementsC').classList.('active');
    document.getElementById('elementsA').classList.remove('active');
    
})

document.getElementById('connexion').addEventListener("click",(e) => {
    e.target.id;
    document.getElementById('elementsC').classList.add('active');
    document.getElementById('elementsC').classList.add('active');
})

/*document.getElementById('connexion').addEventListener("click",(e) => {
    e.target.id;
    document.getElementById('elementsC').classList.add('active');
    document.getElementById('elementsA').classList.remove('active');

})*/
