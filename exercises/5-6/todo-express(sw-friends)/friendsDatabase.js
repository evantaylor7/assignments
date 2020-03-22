const {v4} = require("uuid")

const friends = [
    {
        "name": "Paodok’Draba’Takat Sap’De’Rekti Nik’Linke’Ti’ Ki’Vef’Nik’NeSevef’Li’Kek",
        "description": "Drabatan rebel",
        "imgURL": "https://pbs.twimg.com/media/DhrOHubXkAADJ_g.jpg",
        "alive": true,
        "_id": v4()
    },
    {
        "name": "Ello Asty",
        "description": "valiant Abednedo pilot",
        "imgURL": "https://vignette.wikia.nocookie.net/starwars/images/c/ce/Ello_Asty_AotG.png/revision/latest/top-crop/width/360/height/450?cb=20171206233947",
        "alive": false,
        "_id": v4()
    },
    {
        "name": "Salacious B. Crumb",
        "description": "Jabba the Hutt’s pet Kowakian monkey-lizard",
        "imgURL": "https://lumiere-a.akamaihd.net/v1/images/image_da9047cc.jpeg?region=0%2C48%2C1280%2C641",
        "alive": true,
        "_id": v4()
    },
    {
        "name": "Momaw Nadon",
        "description": "Exile from Ithor, rebel sympathizer",
        "imgURL": "https://media.timeout.com/images/103237827/image.jpg",
        "alive": true,
        "_id": v4()
    }
]

module.exports = friends

// Another Star Wars friend to test post functionality:

// {
// 	"name": "Beezer Fortuna",
// 	"description": "Bib Fortuna's cousin turned rebel",
// 	"imgURL": "https://starwarsblog.starwars.com/wp-content/uploads/2017/05/beezer-fortuna.jpg",
// 	"alive": false
// }