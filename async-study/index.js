let fs = require('fs');

let readFile = ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('data.json',(error,data)=>{
            if(error) reject(error);
            resolve(data);
        })
    })
}

let doReadFile = async ()=>{
    console.log('start read');

    try {
        var data = await readFile();
    } catch (error) {
        console.log(error);
    }

    console.log(data);
    console.log('end');
}

doReadFile();