console.log('js file loaded!')

fetch('/wether?address=!').then((response)=>{
    console.log(response)
    response.json().then((data)=>{
        if(data.error){
            console.log(data)
        }else{
            console.log(data)
        }
    })
})
fetch()