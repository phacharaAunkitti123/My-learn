import { users } from "../models";

import express, { Request, Response } from 'express';
const router = express.Router();

// select all
router.get('/users', async (req: Request, res: Response) => {
    let data = await users.findAll();
    res.json(data);
})

// select by id
router.get('/users/:id', async (req: Request, res: Response) => {
    let data = await users.findByPk(req.params.id);
    res.json(data);
})

// insert
router.post('/users', async (req: Request, res: Response) => {
    let data = req.body;
    try {
        if (!data.name) {
            throw 'name is not found';
        }
        users.create({
            name: data.name,
            utId: data.utId,
            bcId: data.bcId,
            detail: data.detail,
            regisDate: data.regisDate
        });
        res.json({ 'status': true });
    } catch (e) {
        res.json({ 'status': false, 'error': e });
    }
})

// update
router.put('/users', async (req: Request, res: Response) => {
    let data = req.body;
    try {
        if (!data.id) {
            throw 'id is not found';
        }
        if (!data.name) {
            throw 'name is not found';
        }
        users.update({
            name: data.name,
            utId: data.utId,
            bcId: data.bcId,
            detail: data.detail,
            regisDate: data.regisDate
        }, {
            where: { id: data.id }
        });
        res.json({ 'status': true });
    } catch (e) {
        res.json({ 'status': false, 'error': e });
    }
})

// delete by id
router.delete('/users', async (req: Request, res: Response) => {
    let data = req.body;
    try {
        if (!data.id) {
            throw 'id is not found';
        }
        users.destroy({ where: { id: data.id } });
        res.json({ 'status': true });
    } catch (e) {
        res.json({ 'status': false, 'error': e });
    }
})

module.exports = router
