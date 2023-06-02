const koder = {
    seDieronInformes: false,
    seEntrevisto: false,
    sePago: false,
    seInscribio: false
  }
  

  const transporte={
  }
  const seDieronInformes =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            koder.seDieronInformes=true;
            if(!koder.seDieronInformes){
                reject("No se dieron Informes")
            }
            resolve(koder)
        },1000)
    })
  }

  const koderEntrevistado=(entrevistado)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            entrevistado.seEntrevisto=true;
            if(!entrevistado.seEntrevisto){
                reject("No se entrevisto")
            }
            resolve(entrevistado)
        },2000)
    })
  }

  const koderPago = (pagoDelKoder)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            pagoDelKoder.sePago=true;
            if(!pagoDelKoder.sePago){
                reject("EL Koder no ha pagado")
            }
            resolve(pagoDelKoder)
        },4000)
    })
  }

  const koderInscrito=(seInscribioElKoder)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            seInscribioElKoder.seInscribio= true;
            if(!seInscribioElKoder.seInscribio){
                reject("No se ha inscrito al Koder")
            }
            resolve(seInscribioElKoder)
        },6000)
    })
  }

  seDieronInformes(koder)
    .then((informacionKoder)=>{
        console.log("koder",informacionKoder)
        koderEntrevistado(informacionKoder)
        .then((seEntrevistoAlKoder)=>{
            console.log("koder",seEntrevistoAlKoder)
            koderPago(seEntrevistoAlKoder)
            .then((koderPagado)=>{
                console.log("koder",koderPagado)
                koderInscrito(koderPagado)
                .then((seInscribio)=>{
                    console.log("koder",seInscribio)
                    console.log("Koder inscrito y listo para tomar sus clases")
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
        console.log("error", error)
  })