import { road_safeties } from "../models";

import express, { Request, Response } from 'express';
const router = express.Router();

// select all
router.get('/road_safeties', async (req: Request, res: Response) => {
    let data = await road_safeties.findAll();
    res.json(data);
})

// select by id
router.get('/road_safeties/:id', async (req: Request, res: Response) => {
    let data = await road_safeties.findByPk(req.params.id);
    res.json(data);
})

// insert
router.post('/road_safeties', async (req: Request, res: Response) => {
    let data = req.body;
    try {
        if (!data.name) {
            throw 'name is not found';
        }
        road_safeties.create({
            name: data.name,
            usId: data.usId,
            forYears: data.forYears,
            introdution: data.introdution,
            objective: data.objective,
            detail: data.detail
        });
        res.json({ 'status': true });
    } catch (e) {
        res.json({ 'status': false, 'error': e });
    }
})

// update
router.put('/road_safeties', async (req: Request, res: Response) => {
    let data = req.body;
    try {
        if (!data.id) {
            throw 'id is not found';
        }
        if (!data.name) {
            throw 'name is not found';
        }
        road_safeties.update({
            name: data.name,
            usId: data.usId,
            forYears: data.forYears,
            introdution: data.introdution,
            objective: data.objective,
            detail: data.detail
        }, {
            where: { id: data.id }
        });
        res.json({ 'status': true });
    } catch (e) {
        res.json({ 'status': false, 'error': e });
    }
})

// delete by id
router.delete('/road_safeties', async (req: Request, res: Response) => {
    let data = req.body;
    try {
        if (!data.id) {
            throw 'id is not found';
        }
        road_safeties.destroy({ where: { id: data.id } });
        res.json({ 'status': true });
    } catch (e) {
        res.json({ 'status': false, 'error': e });
    }
})

module.exports = router
