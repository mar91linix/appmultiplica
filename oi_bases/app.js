const argv =require('./config/yargs').argv;
const {crearArchivo,listarTabla}=require('./miltiplicar');
let comando= argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base,argv.limite);
        break;
        case 'crear':
        crearArchivo(argv.base,argv.limite)
        .then(archivo=> console.log(`Archivo creado:${archivo}`))
        .catch(err => console.log(err))
        break;
        default:
        console.log('no es valido ')
        break;
}

// const { alias } = require('yargs');



// //  let argv2=process.argv;
 // console.log('base',argv);
//  console.log('limite',argv.limite);
// //  console.log('PROCCESS',argv2);





// let b =argv[2];
// let base=b.split('=')[1];


// crearArchivo(base)
// .then(archivo=> console.log(`Archivo creado:${archivo}`))
// .catch(err => console.log(err))
