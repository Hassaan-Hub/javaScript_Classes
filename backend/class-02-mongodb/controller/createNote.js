const createNote = (req, res) => {

    res.status(200).json({
        message: "Welcome to the Express server!",
        // users: users
    })
}

const createNote1 = (req, res) => {
    res.status(201).json({
        message: "Welcome to the Express server!",
    })
}


module.exports={
    createNote,
    createNote1
}