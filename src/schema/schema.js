const graphql = require('graphql')
const _= require('lodash')

const {faculty,publications} = require('./dummy.json')
//To define object types 

const {GraphQLObjectType,GraphQLInt,GraphQLID,GraphQLString,GraphQLSchema} = graphql;

const FacultyType = new GraphQLObjectType({
    name:'Faculty',
    fields:()=>({
        id:{type: GraphQLID},
        name:{type: GraphQLString},
        department:{type: GraphQLString},
        contact:{type: GraphQLInt},
        publication:{
            type: PublicationsType,
            resolve(parent,args){
             console.log(parent)

             return _.find(publications,{id:parent.publicationID})
            }
        }
    })
})

const PublicationsType = new GraphQLObjectType({
    name:'Publications',
    fields:()=>({
        id:{type: GraphQLID},
        paperPublished:{type: GraphQLString},
        publishedDate:{type:GraphQLString}
    })
})

//Defing Requeries 

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        faculty:{
            type:FacultyType,
            args:{ id: {type:GraphQLID}},
            resolve(parent,args){
                //code to get data from database 
               return _.find(faculty,{id:args.id});
            }
        },
        publications:{
            type:PublicationsType,
            args:{ id: {type:GraphQLID}},
            resolve(parent,args){
                //code to get data from database 
               return _.find(publications,{id:args.id});
            }
        }                         
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})


