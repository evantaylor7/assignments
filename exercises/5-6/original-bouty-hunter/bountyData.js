const {v4} = require("uuid")

const bounties = [
    {firstName: "Morty", lastName: "Smith", living: false, bountyAmount: 20, type: "Jedi", _id: v4()},
    {firstName: "Rick", lastName: "Sanchez", living: true, bountyAmount: 999, type: "Sith", _id: v4()},
    {firstName: "Beth", lastName: "Smith", living: true, bountyAmount: 50, type: "Sith", _id: v4()},
    {firstName: "Jerry", lastName: "Smith", living: true, bountyAmount: 10, type: "Jedi", _id: v4()}
]

module.exports = bounties

// ^ NOT USED AFTER IMPLEMENTING MONGOOSE