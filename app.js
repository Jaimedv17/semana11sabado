
// const infoInput = document.getElementById("infoInput");
// const button = document.querySelectorAll("button");


// button.forEach((btn) =>{
//     btn.addEventListener("click", () =>{
//         // console.log (btn)
//         // document.getElementById("infoInput").value = btn.id

//         if (btn.id === "="){
//             infoInput.value = eval(infoInput.value)
//         }
//         else if (btn.id === "ac"){
//             infoInput.value = ""
//         }
//         else {
//             infoInput.value += btn.id
//         }
//     })
// })


const infoInput = document.getElementById("infoInput");
const button = document.querySelectorAll("button");


button.forEach((btn) =>{
    btn.addEventListener("click", () =>{
        if (btn.id === "="){
            infoInput.value = eval(infoInput.value)
        }
        else if (btn.id === "ac"){
            infoInput.value = ""
        }
        else {
            infoInput.value += btn.id
        }
    })
})



