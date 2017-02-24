'use strict' // pour avoir un JavaScript bien exécuté

var findParagraph;
var findButton;

// Phase 1 : trouver dans le DOM les éléments concernés 
findParagraph = document.getElementById('paragraphe');
findButton = document.querySelector('.button')

//getElementsByID et querySelector existent déjà dans JavaScript
// https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
// il exite aussi un querySlectorAll ...


//Phase 3 : quelles fonctions exécuter ? Mais on les indique avant la partie 2 pour que le navigateur sache exécuter les fonctions quand il y en aura besoin.

function onMouseOverChangeItalic() {
  findParagraph.classList.add('italic');
}

function onClickRemoveItalic() {
  findParagraph.classList.remove('italic');
}

function onClickChangeBold() {
  findButton.classList.toggle('bold');
}

//Phase 2 : on place les Ecouteurs d'évenements avec addEventListener pour être pret lorsque le cas de figure se présente et/ou est activé
findParagraph.addEventListener('mouseover', onMouseOverChangeItalic);
findParagraph.addEventListener('click', onClickRemoveItalic);

findButton.addEventListener('click',onClickChangeBold);