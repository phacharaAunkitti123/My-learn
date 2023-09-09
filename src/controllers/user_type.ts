import { user_types } from "../models";

import express, { Request, Response } from 'express';
const router = express.Router();

// select all
router.get('/user_types', async (req: Request, res: Response) => {
    let data = await user_types.findAll();
    res.json(data);
})

// select by id
router.get('/user_types/:id', async (req: Request, res: Response) => {
    let data = await user_types.findByPk(req.params.id);
    res.json(data);
})

// insert
router.post('/user_types', async (req: Request, res: Response) => {
    let data = req.body;
    try {
        if (!data.name) {
            throw 'name is not found';
        }
        user_types.create({
            name: data.name,
            isGroup: data.isGroup
        });
        res.json({ 'status': true });
    } catch (e) {
        res.json({ 'status': false, 'error': e });
    }
})

// update
router.put('/user_types', async (req: Request, res: Response) => {
    let data = req.body;
    try {
        if (!data.id) {
            throw 'id is not found';
        }
        if (!data.name) {
            throw 'name is not found';
        }
        user_types.update({
            name: data.name,
            isGroup: data.isGroup
        }, {
            where: { id: data.id }
        });
        res.json({ 'status': true });
    } catch (e) {
        res.json({ 'status': false, 'error': e });
    }
})

// delete by id
router.delete('/user_types', async (req: Request, res: Response) => {
    let data = req.body;
    try {
        if (!data.id) {
            throw 'id is not found';
        }
        user_types.destroy({ where: { id: data.id } });
        res.json({ 'status': true });
    } catch (e) {
        res.json({ 'status': false, 'error': e });
    }
})

module.exports = router
