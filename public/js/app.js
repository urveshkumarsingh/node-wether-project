console.log('js file loaded!')

fetch('http://localhost:3000/wether?address=!').then((response)=>{
    console.log(response)
    response.json().then((data)=>{
        if(data.error){
            console.log(data)
        }else{
            console.log(data)
        }
    })
})