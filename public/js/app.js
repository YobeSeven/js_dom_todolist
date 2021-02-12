// INPUT DEBUT
let toDo = document.querySelector(`.toDo`)
let inputDebut = document.getElementsByTagName(`input`)[0]

// BOUTON POUR INPUT DEBUT
let saveToDo = document.querySelector(`.saveToDo`)

// INPUT TACHE A FAIRE
let inputTransition = document.querySelector(`.tacheTransition`)
let liAcopier = document.querySelector(`.li-a-copier`)

// BOUTON CATEGORIE TOUS
let bouton = document.querySelectorAll(`.bouton`)

// BOUTON CATEGORIE UN A UN
let aFaire = document.querySelector(`.aFaire`)
let enCours = document.querySelector(`.enCours`)
let terminer = document.querySelector(`.terminer`)

// BOUTON MODIFICATION
let modifier = document.querySelector(`.modifier`)
let supprimer = document.querySelector(`.supprimer`)

// TOUTES COLONNES 
let touteListe = document.querySelectorAll(`.liste`)

// COLONNES
let leTouT = document.querySelector(`.leTouT`)
let listeTout = document.querySelector(`.liste-tout`)

let aFairE = document.querySelector(`.aFairE`)
let listeAfaire = document.querySelector(`.liste-a-faire`)

let enCourS = document.querySelector(`.enCourS`)
let listeEnCours = document.querySelector(`.liste-en-cours`)

let termineR = document.querySelector(`.termineR`)
let listeTerminer = document.querySelector(`.liste-terminer`)

// TOUT SUPPRIMER
let toutSupprimer = document.querySelector(`.toutSupprimer`)

// ----------------------------------------------------------------------------------------------//

// SAUVEGARDE SOURIS
let sauvegarderInput = () => {
    if (inputDebut.value == ``) {
        alert(`Ecrivez quelques choses`)
    } else {
        inputTransition.value += inputDebut.value
        inputDebut.value = ``
    } 
}
saveToDo.addEventListener(`click` , sauvegarderInput )

// SAUVEGARDE ENTER

inputDebut.addEventListener("keyup" , (event) => {
    if(event.keyCode === 13){ 
        inputTransition.value += inputDebut.value
        inputDebut.value = ``
    }
})


// ----------------------------------------------------------------------------------------------//

// MODIFICATION
let modificationInput = () => {
    inputDebut.value += inputTransition.value
    inputTransition.value = ``
}
modifier.addEventListener(`click`,modificationInput)

// ----------------------------------------------------------------------------------------------//

// SUPPRIMER UN ELEMENT 
let supprimerInputSolo = () => {
    inputTransition.value = ``
}
supprimer.addEventListener(`click`,supprimerInputSolo)

// ----------------------------------------------------------------------------------------------//

// TOUT SUPPRIMER 
let supprimerEverything = () => {

    touteListe.forEach(element => {
        element.innerHTML = ``
    })
}
toutSupprimer.addEventListener(`click`,supprimerEverything)
// ----------------------------------------------------------------------------------------------//

// METTRE DANS A FAIRE
function conmp() {
    
}
let categorieAfaire = () => {

    if (inputTransition.value == ``) {
        alert(`Ecrivez quelques choses et sauvegardez-la`)
    } else {
        // Création li
        let liste = document.createElement(`li`)
        let liste2 = document.createElement(`li`)

        liste.setAttribute(`class` , `list-unstyled`)
        liste2.setAttribute(`class` , `list-unstyled`)
        // --------------------------------------------------------//
        // Création de la tache
        let inputCopie = document.createElement(`input`)
        let inputCopie2 = document.createElement(`input`)

        liste.appendChild(inputCopie)
        liste2.appendChild(inputCopie2)

        inputCopie.setAttribute(`disabled`,true)
        inputCopie2.setAttribute(`disabled`,true)

        inputCopie.value += inputTransition.value
        inputCopie2.value += inputTransition.value

        inputTransition.value = ``

        // --------------------------------------------------------//
        // Création du boutton
        let boutonReglage = document.createElement(`button`)
        let boutonReglage2 = document.createElement(`button`)

        liste.appendChild(boutonReglage)
        liste2.appendChild(boutonReglage2)

        boutonReglage.setAttribute(`class` , `bouton-reglage`)
        boutonReglage2.setAttribute(`class`,`bouton-reglage`)

        boutonReglage.innerText = `Reglage`
        boutonReglage2.innerText = `Reglage`

        let reglage = () => {
            inputTransition.value += inputCopie.value
            liste.remove()
            liste2.remove()

        }

        boutonReglage.addEventListener( `click` , reglage )
        boutonReglage2.addEventListener(`click`,reglage )

        listeAfaire.appendChild(liste)
        listeTout.appendChild(liste2)

    }

}
aFaire.addEventListener( `click`, categorieAfaire )

// METTRE DANS EN COURS
let categorieEnCours = () => {
    if (inputTransition.value == ``) {
        alert(`Ecrivez quelques choses et sauvegardez-la`)
    } else {
        // Création li
        let liste = document.createElement(`li`)
        let liste2 = document.createElement(`li`)

        liste.setAttribute(`class` , `list-unstyled`)
        liste2.setAttribute(`class` , `list-unstyled`)

        // --------------------------------------------------------//
        // Création de la tache
        let inputCopie = document.createElement(`input`)
        let inputCopie2 = document.createElement(`input`)

        liste.appendChild(inputCopie)
        liste2.appendChild(inputCopie2)

        inputCopie.setAttribute(`disabled`,true)
        inputCopie2.setAttribute(`disabled`,true)

        inputCopie.value += inputTransition.value
        inputCopie2.value += inputTransition.value

        inputTransition.value = ``

        // --------------------------------------------------------//
        // Création du boutton
        let boutonReglage = document.createElement(`button`)
        let boutonReglage2 = document.createElement(`button`)

        liste.appendChild(boutonReglage)
        liste2.appendChild(boutonReglage2)

        boutonReglage.setAttribute(`class` , `bouton-reglage`)
        boutonReglage2.setAttribute(`class` , `bouton-reglage`)

        boutonReglage.innerText = `Reglage`
        boutonReglage2.innerText = `Reglage`

        let reglage = () => {
            inputTransition.value += inputCopie.value
            liste.remove()
            liste2.remove()

        }

        boutonReglage.addEventListener( `click` , reglage )
        boutonReglage2.addEventListener(`click`,reglage )

        listeEnCours.appendChild(liste)
        listeTout.appendChild(liste2)

    }
}
enCours.addEventListener(`click`,categorieEnCours)

// METTRE DANS TERMINER
let categorieTerminer = () => {
    if (inputTransition.value == ``) {
        alert(`Ecrivez quelques choses et sauvegardez-la`)
    } else {
        // Création li
        let liste = document.createElement(`li`)
        let liste2 = document.createElement(`li`)

        liste.setAttribute(`class` , `list-unstyled`)
        liste2.setAttribute(`class` , `list-unstyled`)

        // --------------------------------------------------------//
        // Création de la tache
        let inputCopie = document.createElement(`input`)
        let inputCopie2 = document.createElement(`input`)

        liste.appendChild(inputCopie)
        liste2.appendChild(inputCopie2)

        inputCopie.setAttribute(`disabled`,true )
        inputCopie2.setAttribute(`disabled` , true )

        inputCopie.value += inputTransition.value
        inputCopie2.value += inputTransition.value

        inputTransition.value = ``
    
        // --------------------------------------------------------//
        // Création du boutton
        let boutonReglage = document.createElement(`button`)
        let boutonReglage2 = document.createElement(`button`)

        liste.appendChild(boutonReglage)
        liste2.appendChild(boutonReglage2)

        boutonReglage.setAttribute(`class` , `bouton-reglage`)
        boutonReglage2.setAttribute(`class` , `bouton-reglage`)

        boutonReglage.innerText = `Reglage`
        boutonReglage2.innerText = `Reglage`
    
        let reglage = () => {
            inputTransition.value += inputCopie.value
            liste.remove()
            liste2.remove()
    
        }

        boutonReglage.addEventListener( `click` , reglage )
        boutonReglage2.addEventListener(`click` , reglage )

        listeTerminer.appendChild(liste)
        listeTout.appendChild(liste2)
        
    }
}
terminer.addEventListener(`click`,categorieTerminer)

// ----------------------------------------------------------------------------------------------//