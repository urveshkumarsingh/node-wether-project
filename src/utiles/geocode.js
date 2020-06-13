const request = require('request')
const geoCode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURI(address)+'.json?access_token=pk.eyJ1IjoidXJ2ZXNoc2luZ2giLCJhIjoiY2theWx1ZXdiMDUxYzJzcWt3OHhkdWQxbCJ9.IFKs5PgScQAC99S7vo1urg&limit=1'
    //console.log(url)
    request({url,json:true},(error,{body}={})=>{
            if(error){
                callback('Unable to connect geocoding Api.',undefined)
            } else if(body.message){
                callback(body.message,undefined)
            } else {
                if(body.features.length){
                    callback(undefined,{
                        latitude:body.features[0].center[1],
                        longitute:body.features[0].center[0],
                        place:body.features[0].place_name
                    })
                } else {
                    callback('location is not correct',undefined)
                }
            }
    })
}
module.exports = geoCode