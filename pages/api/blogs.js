import * as fs from 'fs';

// Valid entry : http://localhost:3000/api/getBlogs?slug=how-to-learn-php
// Invalid entry : http://localhost:3000/api/getBlogs?slug="test"

export default async function handler(req,res){
    let data = await fs.promises.readdir('blogdata');
    let myfile;
    let allblogs = [];
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        myfile = await fs.promises.readFile(('blogdata/' + element),'utf-8')
        allblogs.push(JSON.parse(myfile));
    }
    res.status(200).json(allblogs)
}