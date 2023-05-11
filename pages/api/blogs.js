import * as fs from 'fs';

// Valid entry : http://localhost:3000/api/getBlogs?slug=how-to-learn-php
// Invalid entry : http://localhost:3000/api/getBlogs?slug="test"

export default function handler(req,res){
    fs.readdir(`blogdata`,(err,data) =>{
            res.status(200).json(data);
    });
}