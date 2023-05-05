import express from 'express'
import { CardModel } from '../model/Card.js'
import { HomeModel } from '../model/Home.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await CardModel.find();
        res.json(data);
    }
    catch (err) {
        console.log(err)
    }
})
router.get('/:id', async (req, res) => {
    try {
        const data = await CardModel.findById(req.params.id);
        res.json(data);
    }
    catch (err) {
        console.log(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const homedata = await HomeModel.findById("64540888d0a8d182ffa30e5a");
        const newCard = new CardModel(req.body);
        await newCard.save();
        homedata.card.push(newCard);
        await homedata.save();
        res.json({ homedata, newCard });
    }
    catch (err) {
        console.log(err)
    }
})

router.put("/:cardId", async (req, res) => {

    try {
        const card = await CardModel.findByIdAndUpdate(req.params.cardId, { $set: req.body },{ new: true });
        res.json(card);
    } catch (err) {
        res.json(err);
    }
});


router.delete("/:cardId", async (req, res) => {
    await CardModel.findByIdAndDelete(req.params.cardId);
    try {
        await HomeModel.findOneAndUpdate("64540888d0a8d182ffa30e5a", { $pull: { card: req.params.cardId } },)
        res.json("Card has been Deleted !!");
    } catch (err) {
        res.json(err);
    }
});

export { router as cardRouter }




