const conocenos = document.querySelector("#conocenos");
const servicios = document.querySelector("#servicios");
const preguntas = document.querySelector("#preguntas");
const contactanos = document.querySelector("#contactanos");
const reporte = document.querySelector("#reporte");

/*Menu CONOCENOS*/
conocenos.addEventListener("click", (s) =>{
    s.preventDefault();

    const sectionS = document.querySelector(".conocenos");
    sectionS.scrollIntoView({behavior:"smooth"});
})

/*MENU preguntas y respuestas */
preguntas.addEventListener("click", (r) =>{
    r.preventDefault();

    const sectionR = document.querySelector(".preguntas");
    sectionR.scrollIntoView({behavior:"smooth"});
})

/*Menu SERVICIOS*/
servicios.addEventListener("click", (p) =>{
    p.preventDefault();

    const sectionP = document.querySelector(".servicios");
    sectionP.scrollIntoView({behavior:"smooth"});
})


/*Menu contactanos */
contactanos.addEventListener("click", (g) =>{
    g.preventDefault();

    const sectionP = document.querySelector(".contactanos");
    sectionP.scrollIntoView({behavior:"smooth"});
})

reporte.addEventListener("click", (t) =>{
    t.preventDefault();

    const sectionP = document.querySelector(".reporte");
    sectionP.scrollIntoView({behavior:"smooth"});
})



