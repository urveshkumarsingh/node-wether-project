const path    = require('path')
const hbs     = require('hbs')
const express = require('express')
const geocode = require('./utiles/geocode')
const forcast = require('./utiles/forcast')

app = express()
const publicPathDir = path.join(__dirname,'../public')
const viewsPathDir  = path.join(__dirname,'../templates/views')
const partialsPathDir = path.join(__dirname,'../templates/partiales')

app.set('view engine', 'hbs');
app.set('views',viewsPathDir)
hbs.registerPartials(partialsPathDir)
app.use(express.static(publicPathDir))


app.get('',(req,res)=>{
    res.render('index',{
        page:'index page',
        by:'urvesh'
    })
})

app.get("/about",(req,res)=>{
    res.render('about',{
        page:'about page',
        by:'urvesh'
    })
})

app.get("/help",(req,res)=>{
    res.render('help',{
        page:'help page',
        by:'urvesh'
    })
})
app.get("/help/*",(req,res)=>{
    res.render('404',{
        page:'404 page',
        message:'Help article not found.',
        by:'urvesh'
    })
})



app.get('/wether',(req,res)=>{
    //console.log(req.query)
    if(!req.query.address){
        return res.send({
            erro:'Address is required for this.'
        })
    }
    geocode(req.query.address,(error,{latitude,longitute,place}={})=>{
        if(error == undefined){
            forcast(latitude,longitute,(error,data)=>{
                if(error == undefined){
                    res.send({
                        message:data, 
                        place:place
                    })
                    // res.render('weather',{
                    //     message:data,
                    //     place:place
                    // })
                } else {
                    res.send({
                        message:error
                        //place:place
                    })
                    // res.render('404',{
                    //     page:'weather error',
                    //     message:error,
                    //     by:'urvesh'
                    // })
                }
            })
        } else {
            // res.render('404',{
            //     page:'weather error',
            //     message:error,
            //     by:'urvesh'
            // })
            res.send({
                message:error
                //place:place
            })
        }
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        page:'404 page',
        message:'page not found',
        by:'urvesh'
    })
})

app.listen(3000,()=>{
    console.log('server is up now on 3000 port')
})