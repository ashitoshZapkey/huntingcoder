import * as fs from 'fs';

// Valid entry : http://localhost:3000/api/getblog?slug=how-to-learn-php
// Invalid entry : http://localhost:3000/api/getblog?slug="test"

export default function handler(req,res){
    fs.readFile(`blogdata/${req.query.slug}.json`,"utf-8",(err,data) =>{
        try {
            if (err == null) {
                res.status(200).json(JSON.parse(data))
            }else{
                res.status(404).json({error:"No Such Blog Found"})
            }
        } catch (error) {
            console.log(error)
        }
    });
}