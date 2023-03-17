import fs from 'fs'
import xrere from './testmodule.js'
import nested from './testdir/nested.js'
import express from 'express'
const app = express()
console.log('stayme')
app.listen(3001, function() {console.log('listening port 3001')})