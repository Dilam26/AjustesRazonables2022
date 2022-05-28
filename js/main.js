function change(id) {
    
    const section = id;

    const SECTION_TO_SHOW = {
        'acces' : ()=>{
            $("#componente-accesibilidad").show();
            $("#form-disca").hide();
            $("#evaluacion-pedag").hide();
        },
        'disc' : ()=>{
            $("#form-disca").show();
            $("#componente-accesibilidad").hide();
            $("#evaluacion-pedag").hide();
        },
        'eval': ()=>{
            $("#evaluacion-pedag").show();
            $("#form-disca").hide();
            $("#componente-accesibilidad").hide();
        }
    }
    
    SECTION_TO_SHOW[section]();
    
    const btn = document.querySelectorAll("button");
    btn.forEach(function(element) {
        element.classList.remove("btn-primary");
        element.classList.add("btn-secondary");
        if(element.id == "btn-"+section){
            element.classList.remove("btn-secondary");
            element.classList.add("btn-primary");
        }
    })

}