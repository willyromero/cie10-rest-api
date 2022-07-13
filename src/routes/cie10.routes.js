import { Router } from "express";
import *as cie10Controller from "../controllers/cie10.controller.js";

const router = Router();

router.get('/cmed/api-cie10/', cie10Controller.findAllCie10);
router.get('/cmed/api-cie10/match/:match', cie10Controller.findCie10ByMatch);
router.post('/cmed/api-cie10/load', cie10Controller.eltDataCie10);
router.get('/cmed/api-cie10/:chapter', cie10Controller.findCie10ByChapter);
router.get('/cmed/api-cie10/:chapter/:cod_cie10_3', cie10Controller.findCie10ByChapterAndCie103);
router.get('/cmed/api-cie10/:chapter/:cod_cie10_3/:cod_cie10_4', cie10Controller.findCie10ByChapterAndCie103AndCie104);

export default router;
