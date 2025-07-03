let pluss = document.querySelector('.pluss')
let totaltodo = document.querySelector('.totaltodo')
let errorr = document.querySelector('.errorr')
let input1 = document.querySelector('.input1')
let extra = document.querySelector('.extra')


let deletbutton = document.querySelector('.deletbutton')
let editbutton = document.querySelector('.editbutton')
let donebutton = document.querySelector('.donebutton')





let handlebutton = () => {


   if (!input1.value) {
      alert('fuck you')
   } else {




      let extraTODO = document.createElement('div')
      let extrainput = document.createElement('input')
      let deletbutton = document.createElement('button')
      let editbutton = document.createElement('button')
      let donebutton = document.createElement('button')





      extra.appendChild(extraTODO)
      extraTODO.appendChild(extrainput)
      extraTODO.appendChild(deletbutton)
      extraTODO.appendChild(editbutton)
      extraTODO.appendChild(donebutton)



      extraTODO.classList.add('extraTODO')
      extrainput.classList.add('extrainput')
      deletbutton.classList.add('deletbutton')
      editbutton.classList.add('editbutton')
      donebutton.classList.add('donebutton')

deletbutton.innerHTML='<i class="fa-regular fa-trash-can"></i>'

      editbutton.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'


   }



















}









































// // ------------dom-----------

// let pluss = document.querySelector('.pluss')
// let errorr = document.querySelector('.errorr')
// let input1 = document.querySelector('.input1')
// let extra = document.querySelector('.extra')
// let deletbutton = document.querySelector('.deletbutton')
// let editbutton = document.querySelector('.editbutton')
// let donebutton = document.querySelector('.donebutton')
// let totaltodo = document.querySelector('.totaltodo')


// // ------------right part--------
// let TOTALTODO = 0

// totaltodo.innerHTML = TOTALTODO



// // ----------------left part -------

// let i = 0

// pluss.innerHTML=i



// // ---------buton click part---------

// let handlebutton = () => {


//    if (input1.value == '') {
//       errorr.innerHTML = 'faka'
//    } else {


//       TOTALTODO++
//       totaltodo.innerHTML = TOTALTODO


//       // -------create element-------

//       let extraTODO = document.createElement('div')
//       let extrainput = document.createElement('input')
//       let deletbutton = document.createElement('button')
//       let editbutton = document.createElement('button')
//       let donebutton = document.createElement('button')



//       // ---------append child-------

//       extra.appendChild(extraTODO)
//       extraTODO.appendChild(extrainput)
//       extraTODO.appendChild(deletbutton)
//       extraTODO.appendChild(editbutton)
//       extraTODO.appendChild(donebutton)

//       //   ---------classlist add ----------

//       extraTODO.classList.add('extraTODO')
//       extrainput.classList.add('extrainput')
//       deletbutton.classList.add('deletbutton')
//       editbutton.classList.add('editbutton')
//       donebutton.classList.add('donebutton')


//       //  ---------------icon added---------


//       deletbutton.innerHTML = '<i class="fa-regular fa-trash-can"></i>'

//       editbutton.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'

//       donebutton.innerHTML = '<i class="fa-regular fa-circle-check"></i>'


//       // -------------value transfer----------
//       extrainput.value = input1.value
//       input1.value = ''



//       // ---------------- extra input  readonly-----

//       extrainput.setAttribute('readonly', 'readonly')


//       // -----------------edit button process-----------


//       editbutton.addEventListener('click', () => {
//          editbutton.classList.toggle('extra')

//          if (editbutton.classList[1] == 'extra') {
//             editbutton.innerHTML = '<i class="fa-solid fa-bookmark"></i>'
//             extrainput.removeAttribute('readonly', 'readonly')
//             editbutton.style = "color:#F564A9"

//          } else {
//             extrainput.setAttribute('readonly', 'readonly')
//             editbutton.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'
//             editbutton.style = "hover:green"

//          }

//       })

//       deletbutton.addEventListener('click', () => {
//          extraTODO.remove()

//       TOTALTODO--
//       totaltodo.innerHTML = TOTALTODO

//       if(extraTODO.classList[1]== 'done'){
//       i--
//       pluss.innerHTML=i

//       }


//       })


//       donebutton.addEventListener('click',()=>{
//          i++
//           pluss.innerHTML=i
//           extraTODO.classList.add('done')

//       })


//    }
// }