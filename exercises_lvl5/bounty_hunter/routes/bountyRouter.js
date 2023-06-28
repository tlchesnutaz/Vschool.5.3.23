const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require("uuid")


const bounties = [
    { 
        firstName: "darth",
        lastName: "maul",
        bounty_flan: 50000,
        type: "sith",
        living: "deceased",
        _id: uuidv4()
    },
    { 
        firstName: "quinlan",
        lastName: "vos",
        bounty_flan: 60000,
        type: "jedi",
        living: "alive",
        _id: uuidv4()
    },
    { 
        firstName: "darth",
        lastName: "traya",
        bounty_flan: 40000,
        type: "sith",
        living: "alive",
        _id: uuidv4()
    },
    { 
        firstName: "even",
        lastName: "piell",
        bounty_flan: 30000,
        type: "jedi",
        living: "deceased",
        _id: uuidv4()
    },
    { 
        firstName: "zinn",
        lastName: "toa",
        bounty_flan: 65000,
        type: "jedi",
        living: "unknown",
        _id: uuidv4()
    },
    { 
        firstName: "thongla",
        lastName: "jur",
        bounty_flan: 90000,
        type: "unknown",
        living: "alive",
        _id: uuidv4()
    }
]

//bountyRouter.route("/") 

bountyRouter.get("/", (req, res) => { 
        res.send(bounties)
    })

bountyRouter.post("/", (req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(newBounty)
        //res.send( `Successfully added ${newBounty.firstName} to the db` )
    })

bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    // const data = req.body ???
    // console.log(data) ???
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
    })

bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Bounty sucessfully deleted!")
    })

module.exports = bountyRouter