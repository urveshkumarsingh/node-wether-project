const request = require('request')
const forcast = (lat,long,calback)=>{
    const url = 'http://api.weatherstack.com/forecast?access_key=390ce48f52c26c72971331cabdfc7693&query='+lat+','+long+'&units=m'
    request({url,json:true},(error,{body}={})=>{
        if(error){
            calback('Unable to connect weatherstack Api.',undefined)
        } else if(body.success === false){
            calback(body.error.info,undefined)
        } else {
            calback(undefined,body.current.weather_descriptions[0]+'. it is currently '+ body.current.temperature +' f out. It feels like '+ body.current.feelslike +' f out')
        }
    })
}

module.exports = forcast