function doCopy() {
    let toCopy = "play.noskillworld.fr";

    navigator.clipboard.writeText(toCopy).then(() => {
        alert("IP copiée avec succès !")
    }, () => {
        alert("Une erreur est survenue.")
    })
}