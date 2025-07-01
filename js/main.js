

// ------------dom-----------

let pluss =document.querySelector('.pluss')
let errorr =document.querySelector('.errorr')
let input1 =document.querySelector('.input1')
let extra =document.querySelector('.extra')


// let i=0

// pluss.innerHTML=i
// pluss.innerHTML=++i

let handlebutton =()=>{


   if(input1.value==''){
    errorr.innerHTML='faka'
   }


   else {



      // -------create element-------

      let extraTODO= document.createElement('div')


      // ---------append child-------

     extra.appendChild(extraTODO)

   //   ---------classlist add ----------

   extraTODO.classList.add('extraTODO')


   }
}