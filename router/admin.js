import express from "express"
import jwt from 'jsonwebtoken'
import { AdminModel } from "../model/Admin.js";

const router = express.Router()

router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const user = await AdminModel.findOne({ username });

    if (user) {
        return res.json({ message: "Admin Already exist" });
    }

    try {

        const newAdmin = new AdminModel({ username, password });
        await newAdmin.save()
        res.json({ message: "Admin Register Successfully!" });
    } 
    catch (error) {
        res.status(400).send({ message: "Unable to register!" });
    }


});
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await AdminModel.findOne({ username });
    if (!user) {
        return res.json({ message: "User Not found" });
    }
    if (password != user.password) {
        return res.json({ message: "User password is Incorrect!" });
    }

    const token = jwt.sign({ id: user._id }, "secret");
    res.json({ token, userID: user._id });

});

export { router as adminRouter }; 
