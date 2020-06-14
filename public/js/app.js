console.log('js file loaded!')

const form = document.querySelector('form')
//const input = document.querySelector("#address").value


form.addEventListener("submit", (e)=>{ 
    e.preventDefault()
    let address = document.querySelector('input').value
    document.getElementById('errorMessage').innerHTML = ''
    document.getElementById('successMessage').innerHTML = ''
    document.getElementById('successPlace').innerHTML = ''
    fetch('/wether?address='+address).then((response)=>{
        //console.log(response)
        response.json().then((data)=>{
            if(data.error){
                document.getElementById('errorMessage').innerHTML = data.error
            }else{
                document.getElementById('successMessage').innerHTML = data.message
                document.getElementById('successPlace').innerHTML = data.place
            }
        })
    })
})

