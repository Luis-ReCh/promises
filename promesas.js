/*

1- pending.- la promesa no se a resuelto estado inicial
2.- Acepted: la promesa se resolvio
3.- rejected: la promesa fue rechazada

*/
const pastel={
    leerReceta: false,
    conIngredientes: false,
    masaPrepa:false,
    horPastel: false,
    decoPastel: false
  }

  const leerReceta =()=>{
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            pastel.leerReceta = true;
            //si no se resuelve
            if(!pastel.leerReceta){
                reject("tienes que leer la receta")
            }
            resolve(pastel)
        },1000)
    })
  }

  const conseguirIngredientes=(pastelLeido)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            pastelLeido.conIngredientes = true;
            //si no se resuelve
            if(!pastelLeido.conIngredientes){
                reject("No conseguimos los ingredientes del pastel")
            }
            resolve(pastelLeido)
        },2000)
    })
  }

  const masaPreparada=(pastelConIngredientes)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            pastelConIngredientes.masaPrepa = true;
            //si no se resuelve
            if(!pastelConIngredientes.masaPrepa){
                reject("No conseguimos los ingredientes del pastel")
            }
            resolve(pastelConIngredientes)
        },3000)
    })
  }

const hornearPastel =(hornearPast)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        hornearPast.horPastel=true;
        if(!hornearPast.horPastel){
            reject("No se horneron los pasteles")
        }
        resolve(hornearPast)
      },4000)
    })
}

const decorarPastel =(decorPastel)=>{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        decorPastel.decoPastel= true;
        if(!decorPastel.decoPastel){
            reject("No se ha decorado el pastel")
        }
        resolve(decorPastel)
    },4000)
})
}

  const promesa = leerReceta(pastel)

 // console.log(promesa)

  promesa.then((pastelLeido)=>{
    console.log("pastel", pastelLeido)
    conseguirIngredientes(pastelLeido).then((pastelconIngredientes)=>{
        console.log("pastelConIngredientes", pastelconIngredientes)
        masaPreparada(pastelconIngredientes)
        .then((pastelconIngredientes)=>{
            console.log("pastel",pastelconIngredientes)
            hornearPastel(pastelconIngredientes)
            .then((hornPastel)=>{
                console.log("pastel",hornPastel)
                decorarPastel(hornPastel)
                .then((pastHorneado)=>{
                    console.log("pastel", pastHorneado)
                    console.log("Pastel listo para comer")
                })
                .catch((error)=>{
                    console.log("error",error)
                })
            })
            .catch((error)=>{
                console.log("error",error)
        })
        })
        .catch((error)=>{
            console.log("error",error)
        })
        })
    .catch((error)=>{
        console.log("error",error)
    })
   
 })
.catch((error)=>{
console.log("error",error)
})

  /*
   masaPreparada(pastelConIngredientes).then((pastelConIngredientes)=>{
            console.log("pastelConIngredientes", pastelConIngredientes)

        })
  
  */