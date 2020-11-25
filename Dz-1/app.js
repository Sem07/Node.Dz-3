const fs = require('fs');
const path = require('path');

let pathToFolder1800 = path.join(process.cwd(), '1800');
let pathToFolder2000 = path.join(process.cwd(), '2000');

// Переміщення файлів з папки в папку
// fs.readdir(pathToFolder1800, (err, files) => {
//     if(err) {
//         console.log(err)
//     } else {

//        files.forEach(file => {
//            fs.rename((path.join(pathToFolder1800, `${file}`)), (path.join(pathToFolder2000, `${file}`)), err => err && console.log(err))
//        })
//     }
// });


// fs.readdir(pathToFolder2000, (err, files) => {
//     if (err) {
//         console.log(err)
//     } else {
//         files.forEach(file => {
//             fs.rename((path.join(pathToFolder2000, `${file}`)), (path.join(pathToFolder1800, `${file}`)) , err => err && console.log(err));
//         })
//     }
// });


// Переміщення файлів з папки в папку через одного
fs.readdir(pathToFolder1800, (err, files) => {
    if(err) {
        console.log(err)
    } else {
        for (let i = 0; i < files.length; i = i + 2){
            fs.rename((path.join(pathToFolder1800, `${files[i]}`)), (path.join(pathToFolder2000, `${files[i]}`)), err => err && console.log(err))
        }
       
    }
});

fs.readdir(pathToFolder2000, (err, files) => {
        if (err) {
            console.log(err)
        } else {
            for (let i = 0; i < files.length; i = i + 2) {
                fs.rename((path.join(pathToFolder2000, `${files[i]}`)), (path.join(pathToFolder1800, `${files[i]}`)) , err => err && console.log(err));
            }
        }
    });
