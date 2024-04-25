const express = require('express')
const config = require('./config/app.js')
const router = require('./router')
const bodyParser = require('body-parser')
const cors = require('cors')


// The following code sets up middleware for handling incoming HTTP requests in a Node.js application using Express.


// The subsequent line 'app.use(bodyParser.json())' adds another middleware, configuring the application to parse incoming JSON data. This is commonly used for handling data sent in JSON format,
// for instance, when working with API requests.

// Finally, 'app.use(router)' associates the defined routes in the 'router' object with the Express application. It allows the application to route incoming requests to the appropriate handlers defined in the 'router'.

// Overall, these lines of code set up the necessary middleware to handle form data and JSON requests while also associating the defined routes with the Express application.

const app = express()
// The line 'app.use(bodyParser.urlencoded({extended: true}))' configures the Express application to use the 'bodyParser' middleware with the 'urlencoded' option set to 'true'.
// This middleware is particularly useful for handling form data submissions that may include images, as it parses the URL-encoded data and makes it accessible through the 'req.body' object.
app.use(bodyParser.urlencoded({extended: true}))// used for submitting form data with images 
app.use (bodyParser.json())
// comment
app.use(cors())
app.use(router)
app.use(express.json) 




const port = config.appPort
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})
console.log('Hello woeld ');
