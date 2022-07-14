import { Router } from "express";

const router = Router();

router.get('/cmed/api-home/', (req, res) => {
    res.send('CEMED CIE10 API');
});

export default router;
