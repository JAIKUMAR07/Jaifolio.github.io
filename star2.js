// =============== typed Js ================

 const tongglebtn= document.querySelector(".tongle_btn")
 const tongleIcon=document.querySelector(".tongle_btn i")
 const dropdownmenu=document.querySelector(".navbar")
 
  tongleIcon.onclick =function(){
    dropdownmenu.classList.toggle('open')
    const isOpen = dropdownmenu.classList.contains('open')
  
  tongleIcon.classList = isOpen ? ' bx-menu' : ' bx-menu'
  }