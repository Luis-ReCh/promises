const pizza={
    levaduraFresca:false,
    agregarAceite:false,
    agregarHarina:false,
    amasarBien:false,
    darleForma:false,
    espolvorearHarinaEnLaMesa:false,
    precalentarELHorno:false,
    hornear:false


  }

  const levadura=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            pizza.levaduraFresca=true;
            if(!pizza.levaduraFresca){
                reject("No se encontro levadura")
            }
            resolve(pizza)
        },1000)
    })
  }

  const agregamosAceite=(aceite)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            aceite.agregarAceite=true;
            if(!aceite.agregarAceite){
                reject("no se agrego aceite")
            }
            resolve(aceite)
        },2000)
    })
  }

  const agregamosHarina =(harina)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            harina.agregarHarina=true;
            if(!harina.agregarHarina){
                reject("No se ha agregado harina")
            }
            resolve(harina)
        },3000)
    })
  }

  const amasarLaMasa=(amasar)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            amasar.amasarBien = true;
            if(!amasar.amasarBien){
                reject("No se ha amasado la masa")
            }
            resolve(amasar)
        },4000)
    })
  }

  const darFormaALaMasa=(forma)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            forma.darleForma=true;
            if(!forma.darleForma){
                reject("No se le ha dado forma a la masa")
            }
            resolve(forma)
        },5000)
    })
  }

  const espolvorearHarina =(espolvorear)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            espolvorear.espolvorearHarinaEnLaMesa = true;
            if(!espolvorear.espolvorearHarinaEnLaMesa){
                reject("No se a espolvoreado la Harina")
            }
            resolve(espolvorear)
        },6000)
    })
  }

  const precalentarHorno =(precalentar)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            precalentar.precalentarELHorno = true;
            if(!precalentar.precalentarELHorno){
                reject("El horno no se ha precalentado")
            }
            resolve(precalentar)
        },7000)
    })
  }

  const pizzaHorneada =(hordeando)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            hordeando.hornear=true;
            if(!hordeando.hornear){
                reject("La pizza no se ha horneado")
            }
            resolve(hordeando)
        },8000)
    })
  }

  levadura(pizza)
  .then((levadFresca)=>{
    console.log("pizza",levadFresca)
    agregamosAceite(levadFresca)
    .then((aceiteAgregado)=>{
        console.log("pizza",aceiteAgregado)
        agregamosHarina(aceiteAgregado)
        .then((HarinaAgregada)=>{
            console.log("pizza", HarinaAgregada)
            amasarLaMasa(HarinaAgregada)
            .then((masaAmasada)=>{
                console.log("pizza",masaAmasada)
                darFormaALaMasa(masaAmasada)
                .then((masaFormada)=>{
                    console.log("pizza",masaFormada)
                    espolvorearHarina(masaFormada)
                    .then((harinaEspolvoreada)=>{
                        console.log("pizza",harinaEspolvoreada)
                        precalentarHorno(harinaEspolvoreada)
                        .then((hornoPrecalentado)=>{
                            console.log("pizza",hornoPrecalentado)
                            pizzaHorneada(hornoPrecalentado)
                            .then((pizzaHornd)=>{
                                console.log("pizza",pizzaHornd)
                                console.log("pastel listo para comerse")
                            })
                            .catch((error)=>{
                                console.log(error)
                            })
                        })
                        .catch((error)=>{
                            console.log("error", error)
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
    })
    .catch((error)=>{
        console.log("error",error)
    })
  })
  .catch((error)=>{
    console.log("error",error)
  })