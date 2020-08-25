const ops={
    base:{
        
        demand:true,
        alias:'b'
          },
        limite:{
        alias:'l',
        default: 10
    }  
  }
const argv=require('yargs')
        .command('listar','imprime por consola la tabla de multipicardada.',ops)
            .command('crear','crear por consola la tabla de multipicardada.',ops)
           .help()
           .argv;
           
           module.exports={
            argv
           }