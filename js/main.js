// ------------dom-----------

let pluss = document.querySelector('.pluss')
let errorr = document.querySelector('.errorr')
let input1 = document.querySelector('.input1')
let extra = document.querySelector('.extra')
let deletbutton = document.querySelector('.deletbutton')
let editbutton = document.querySelector('.editbutton')
let donebutton = document.querySelector('.donebutton')


// let i=0

// pluss.innerHTML=i
// pluss.innerHTML=++i

let handlebutton = () => {


   if (input1.value == '') {
      errorr.innerHTML = 'faka'
   } else {



      // -------create element-------

      let extraTODO = document.createElement('div')
      let extrainput = document.createElement('input')
      let deletbutton = document.createElement('button')
      let editbutton = document.createElement('button')
      let donebutton = document.createElement('button')



      // ---------append child-------

      extra.appendChild(extraTODO)
      extraTODO.appendChild(extrainput)
      extraTODO.appendChild(deletbutton)
      extraTODO.appendChild(editbutton)
      extraTODO.appendChild(donebutton)

      //   ---------classlist add ----------

      extraTODO.classList.add('extraTODO')
      extrainput.classList.add('extrainput')
      deletbutton.classList.add('deletbutton')
      editbutton.classList.add('editbutton')
      donebutton.classList.add('donebutton')


      //  ---------------icon added---------


      deletbutton.innerHTML = '<i class="fa-regular fa-trash-can"></i>'

      editbutton.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'

      donebutton.innerHTML = '<i class="fa-regular fa-circle-check"></i>'




      extrainput.value = input1.value
      input1.value = ''









   }
}