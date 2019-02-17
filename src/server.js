import express from 'express'
import path from 'path'
import morgan from 'morgan'
import cors from 'cors'
import graphqlHTTP from 'express-graphql'

const schema = require('./schema/schema')

const app = express()

app.use(morgan())
app.use(cors())
app.use('/graphql',graphqlHTTP({
 schema,
 graphiql:true
}))

app.use(express.static('build'))

app.get("*",(req,res)=>{
    res.sendFile('index.html',{ root: __dirname })
})

app.listen(3000,()=>console.log("Server Started 3000"))