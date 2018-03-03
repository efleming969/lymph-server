#!/usr/bin/env node

const Clients = require( "../src/Clients" )

Clients.configure( "src/samples/clients", "build/clients" )
    .then( Clients.buildScripts )
    .then( Clients.buildStyles )
    .then( Clients.buildTemplates )
    .then( Clients.buildStatics )
    .then( () => console.log( "build completed" ) )
    .catch( ( error ) => console.log( error ) )
