import { causes_accidents } from "../models";

import express, { Request, Response } from 'express';
const router = express.Router();

// select all
router.get('/causes', async (req: Request, res: Response) => {
    let data = await causes_accidents.findAll();
    res.json(data);
})

// select by id
router.get('/causes/:id', async (req: Request, res: Response) => {
    let data = await causes_accidents.findByPk(req.params.id);
    res.json(data);
})

// insert
router.post('/causes', async (req: Request, res: Response) => {
    let data = req.body;
    try {
        if (!data.name) {
            throw 'name is not found';
        }
        causes_accidents.create({
            name: data.name
        });
        res.json({ 'status': true });
    } catch (e) {
        res.json({ 'status': false, 'error': e });
    }
})

// update
router.put('/causes', async (req: Request, res: Response) => {
    let data = req.body;
    try {
        if (!data.id) {
            throw 'id is not found';
        }
        if (!data.name) {
            throw 'name is not found';
        }
        causes_accidents.update({
            name: data.name
        }, {
            where: { id: data.id }
        });
        res.json({ 'status': true });
    } catch (e) {
        res.json({ 'status': false, 'error': e });
    }
})

// delete by id
router.delete('/causes', async (req: Request, res: Response) => {
    let data = req.body;
    try {
        if (!data.id) {
            throw 'id is not found';
        }
        causes_accidents.destroy({ where: { id: data.id } });
        res.json({ 'status': true });
    } catch (e) {
        res.json({ 'status': false, 'error': e });
    }
})

module.exports = router
