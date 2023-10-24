const headermenu = document.getElementById("headermenubar")
const headerdiv= document.getElementById("headerdiv2")
const icon= document.getElementById("icons")
const a1 = document.querySelectorAll('.a1')
const allsectionstodisplayofmenubars = document.querySelectorAll(".allsectionstodisplayofmenubars")





headermenu.addEventListener('click',()=>{
    
    headerdiv.classList.toggle("addedheaderdiv2")
    icon.classList.toggle('fa-xmark')


})


a1.forEach((e)=>{

    e.addEventListener("click",()=>{
        headerdiv.classList.remove("addedheaderdiv2")
        icon.classList.remove('fa-xmark')
    })


   
})         






allsectionstodisplayofmenubars.forEach((e)=>{

    e.addEventListener("click",()=>{
        headerdiv.classList.remove("addedheaderdiv2")
        icon.classList.remove('fa-xmark')
    })
})