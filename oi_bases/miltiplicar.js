const fs = require('fs'); 
// const { resolve } = require('path');
// const { rejects } = require('assert');
// const { resolve } = require('path');
// const crearArchivo=(base)=>{
//    let contenido =''; 
// }
let listarTabla=(base,limite=10)=>{
    for (let i=1;i<=10;i++){
       console.log(`${base}*${i}=${base * i}`);
    }
      }
let crearArchivo=(base,limite=10)=>{
    return new Promise ((resolve,reject)=>{
let contenido=''; 
            if (!Number(base)){
            reject('lo ingresado no es un numero');
            return
           }
        for (let i=1;i<=10;i++){
            contenido+=`${base}*${i}=${base * i}\n`;
        }
fs.writeFile(`./tabla-${base}.txt`,contenido,(err)=>{
              if (err) reject (err)
              else
              resolve(`tabla del -${base}txt`);
            });
        })
    }
module.exports={
    crearArchivo,
    listarTabla
};
