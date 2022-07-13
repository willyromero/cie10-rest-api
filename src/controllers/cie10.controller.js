import Cie10 from "../models/cie10.models";
import { readFileSync } from 'fs';

export const findAllCie10 = async (req, res) => {
    const cie10 = await Cie10.find();
    res.json(cie10);
}

export const findCie10ByChapter = async (req, res) => {
    const { chapter } = req.params;
    const cie10 = await Cie10.find({ chapter: chapter });
    res.json(cie10);
}

export const findCie10ByChapterAndCie103 = async (req, res) => {
    const { chapter, cod_cie10_3 } = req.params;
    const cie10 = await Cie10.find({ chapter: chapter, cod_cie10_3: cod_cie10_3 });
    res.json(cie10);
}

export const findCie10ByChapterAndCie103AndCie104 = async (req, res) => {
    const { chapter, cod_cie10_3, cod_cie10_4 } = req.params;
    const cie10 = await Cie10.find({ chapter: chapter, cod_cie10_3: cod_cie10_3, cod_cie10_4: cod_cie10_4 });
    res.json(cie10);
}

export const findCie10ByMatch = async (req, res) => {
    const { match } = req.params;
    try {
        const cie10 = await Cie10.find({ $or: [{ chapter: match }, { cod_cie10_3: match }, { cod_cie10_4: match }] });
        res.json(cie10);
    } catch (error) {
        res.status(500).send(`Cannot macth nothing with: ${match}`);
    }
}

export const eltDataCie10 = async (req, res) => {
    const { load } = req.body;
    if (load === true) {
        let data, cie10, added = 0;
        try {
            data = readFileSync('./src/cie10data/cie10_datos.json', { encoding: 'utf-8' });
            cie10 = JSON.parse(data);
            try {
                await cie10.forEach(element => {
                    const newCie10 = new Cie10({
                        chapter: element.capitulo,
                        chapter_name: element.nom_capitulo,
                        cod_cie10_3: element.cod_cie10_3,
                        des_cie10_3: element.descrip_cie10_3,
                        cod_cie10_4: element.cod_cie10_4,
                        des_cie10_4: element.descrip_cie10_4,
                    });
                    newCie10.save();
                    added++;
                });
                res.status(200).send(`Cie 10 data, Load succesfully, total = ${added}`);
            } catch (error) {
                console.log('Error loading .json file', error);
            }
        } catch {
            res.status(500).send('Cannot load cie10 data, .json file not exists');
        }
    } else {
        res.status(200).send('Cie10 data was not loaded');
    }
}
