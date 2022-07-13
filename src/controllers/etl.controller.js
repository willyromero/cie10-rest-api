import Cie10 from "../models/cie10.models";
import { readFileSync } from 'fs';

export const eltDataCie10 = async (req, res) => {
    const { load } = req.body;
    if (load === true) {
        let data, cie10, added = 0;
        try {
            data = readFileSync('../cie10data/cie10_data.json', { encoding: 'utf-8' });
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