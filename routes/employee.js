// All the CRUD Operations
const express = require('express');
const app = express();
const router = express.Router();

const Employee = require('../models/employee');

router.get("/", async (req, res) => {
    const userData = await Employee.find({});
    return res.status(200).json({
        success: true,
        userData
    });
});

router.post("/", async (req, res) => {
    const user =  new Employee({
        name : req.body.name,
        designation : req.body.designation,
    })

    try {
        const emp = await user.save();
        return res.status(200).json({
            success: true,
            emp
        })
    }
    catch (error) {
        console.log(error);
    }
});

router.patch("/update/:id", async (req, res) => {
    
    try {
        const _id = req.params.id;
        const student = await Employee.findByIdAndUpdate(
            {_id}, req.body, {new:true}
        )

        return res.status(200).json({
            success: true,
            student
        })
        
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
        })
    }
})

router.delete("/delete/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteUser = await Employee.findByIdAndDelete(_id);

        return res.status(200).json({
            success: true,
            deleteUser
        })
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
        })
    }
})

module.exports = router;