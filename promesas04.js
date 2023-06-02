
const viaje ={
    fijaPresupuesto: false,
    eligeDestino: false,
    escojeMedioDeTransporte: false,
    preparaDocumentacion:false,
    todoSobreElDestino: false,
    planificaRuta:false,
    eligeHospedaje: false,
    organizaDesplasamiento: false,
    planificaTuEquipaje: false
}

const presupuesto = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            viaje.fijaPresupuesto=true;
            if(!viaje.fijaPresupuesto){
                reject("Has tu presupuesto")
            }
            resolve(viaje)
        },1000)
    })
}

const destino = (eligeDest)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            eligeDest.eligeDestino=true;
            if(!eligeDest.eligeDestino){
                reject("Has tu presupuesto")
            }
            resolve(eligeDest)
        },2000)
    })
}

const medioDeTransporte = (transporte)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            transporte.escojeMedioDeTransporte=true;
            if(!transporte.escojeMedioDeTransporte){
                reject("Has tu presupuesto")
            }
            resolve(transporte)
        },3000)
    })
}

const documentacion = (prepDocumentacion)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            prepDocumentacion.preparaDocumentacion=true;
            if(!prepDocumentacion.preparaDocumentacion){
                reject("Has tu presupuesto")
            }
            resolve(prepDocumentacion)
        },4000)
    })
}

const todoDestino = (SobreElDestino)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            SobreElDestino.todoSobreElDestino=true;
            if(!SobreElDestino.todoSobreElDestino){
                reject("Has tu presupuesto")
            }
            resolve(SobreElDestino)
        },5000)
    })
}

const ruta = (rutaPlanificada)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            rutaPlanificada.planificaRuta=true;
            if(!rutaPlanificada.planificaRuta){
                reject("Has tu presupuesto")
            }
            resolve(rutaPlanificada)
        },6000)
    })
}

const hospedaje = (hosp)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            hosp.eligeHospedaje=true;
            if(!hosp.eligeHospedaje){
                reject("Has tu presupuesto")
            }
            resolve(hosp)
        },7000)
    })
}

const desplazamiento = (elijDesplazamiento)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            elijDesplazamiento.organizaDesplasamiento=true;
            if(!elijDesplazamiento.organizaDesplasamiento){
                reject("Has tu presupuesto")
            }
            resolve(elijDesplazamiento)
        },8000)
    })
}

const equipaje = (planificaEquipaje)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            planificaEquipaje.planificaTuEquipaje=true;
            if(!planificaEquipaje.planificaTuEquipaje){
                reject("Has tu presupuesto")
            }
            resolve(planificaEquipaje)
        },9000)
    })
}

presupuesto(viaje)
.then((presupuestoViaje)=>{
    console.log("viaje",presupuestoViaje)
    destino(presupuestoViaje)
    .then((destinoAElegir)=>{
        console.log("viaje",destinoAElegir)
        medioDeTransporte(destinoAElegir)
        .then((medio)=>{
            console.log("viaje", medio)
            documentacion(medio)
            .then((doc)=>{
                console.log("viaje",doc)
                todoDestino(doc)
                .then((elDestino)=>{
                    console.log("viaje",elDestino)
                    ruta(elDestino)
                    .then((rutaElegida)=>{
                        console.log("viaje",rutaElegida)
                        hospedaje(rutaElegida)
                        .then((hospeda)=>{
                            console.log("viaje",hospeda)
                            desplazamiento(hospeda)
                            .then((desplazamiendoLugar)=>{
                                console.log("viaje", desplazamiendoLugar)
                                equipaje(desplazamiendoLugar)
                                .then((equipajePlanificado)=>{
                                    console.log("viaje", equipajePlanificado)
                                    console.log("Estas listo para tu viaje suerte!!")
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