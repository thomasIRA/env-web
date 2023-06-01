window.addEventListener('DOMContentLoaded', function() {

    let css = 'color: black; font-size: 14px; font-weight: bold; padding: 15px 0;'


    /**
     * Exercice 1
     * Sur chaque élément identifié par l’attribut [data-js-game], injectez la structure HTML ci-dessous - donnée en commentaire - sur son état hover.
     * Le nom du jeu à injecter est dynamique, vous devez récupérer cette valeur du dataset de son attribut [data-js-game].
     * Notez que tous les styles sont déjà définis.
     */
    
    console.log('%cExercice 1', css);

/*---------VERSION 2-------------*/

    let elGrid = document.querySelector('main>div:first-of-type');
    
    elGrid.addEventListener('mouseover', function(e){

        if(e.target.parentNode.dataset.jsGame){

            let elImgBox = e.target.parentNode,
                gameNameText = elImgBox.dataset.jsGame;
            
            elImgBox.insertAdjacentHTML('afterbegin',

                `<div class="video-game__name">
                    <h3>${gameNameText}</h3>
                </div>`
            )
            let elGameName = elImgBox.firstChild;

            elImgBox.addEventListener('mouseout', function(e){

                if(elGameName) elGameName.remove();
            })
        }
    })


/*  ----VERSION 1----------------


let elsGame = document.querySelectorAll('[data-js-game]');


        
     for (let i = 0; i < elsGame.length; i++) {

        let gameNameText = elsGame[i].dataset.jsGame;

        elsGame[i].addEventListener('mouseover', function(e){

            elsGame[i].insertAdjacentHTML('beforeend', 

                `<div class="video-game__name">
                    <h3>${gameNameText}</h3>
                </div>`
            )
        })

        elsGame[i].addEventListener('mouseout', function(e){

            let elGameName = elsGame[i].querySelector('div')
            elGameName.remove();
        }) 
    }*/
////////////////////////////////////////////////////////////

    /*
        <div class="video-game__name">
            <h3>${gameNameText}</h3>
        </div>
    */



    /**
     * Exercice 2
     * Sur chaque élément [data-js-game], supprimez la structure HTML précédente lorsque la souris de l’usager passe 
     * d’une position au-dessus de cet élément (état hover) à une position en-dehors de cet élément.
     */

    console.log('%cExercice 2', css);

    /**
     * Exercice 3
     * Suite au clic de chaque élément [data-js-game], injectez le nom du jeu ainsi que son synopsis dans l’élément [data-js-game-resume].
     * Ici encore, vous devez récupérer dynamiquement ces valeurs du dataset de ses attributs [data-js-game] et [data-js-game-synopsis].
     * Notez que, à chaque clic, le nouveau résumé à injecter remplace le précédent.
     */
    
    console.log('%cExercice 3', css);


    elGrid.addEventListener('click', function(e){

        if(e.target.parentNode.dataset.jsGame){

            let elImgBox = e.target.parentNode,
                gameNameText = elImgBox.dataset.jsGame,
                gameSynopsis = elImgBox.dataset.jsGameSynopsis,
                elGameSynopsis = elImgBox.parentNode.nextElementSibling;

            elGameSynopsis.innerHTML = 
                
                `<h2>${gameNameText}</h2>
                <p>${gameSynopsis}</p>`;
        }
    })
});