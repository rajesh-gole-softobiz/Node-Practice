const getAllUsers = (req,res)=>{
    res.status(200).json({
        message: "all users",
    })
}

const getOneUser = (req,res)=>{
    res.status(200).json({
        message: "get one user",
    })
}

const createUser = (req,res)=>{
    res.status(201).json({
        message: "user created",
    })
}

const updateUser = (req,res)=>{
    res.status(200).json({
        message: "user updated",
    })
}

const deleteUser = (req,res)=>{
    res.status(200).json({
        message: "user deleted",
    })
}

module.exports = {getAllUsers, getOneUser, createUser,updateUser, deleteUser}