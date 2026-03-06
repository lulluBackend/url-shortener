async function encurtar(){

 const url = document.getElementById("url").value
 const resultado = document.getElementById("resultado")

 if(!url){
   resultado.innerHTML = "Coloque um link"
   return
 }

 const res = await fetch("/api/shorten",{
   method:"POST",
   headers:{
     "Content-Type":"application/json"
   },
   body: JSON.stringify({
     originalUrl:url
   })
 })

 const data = await res.json()

 resultado.innerHTML =
 `<a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>`

}
