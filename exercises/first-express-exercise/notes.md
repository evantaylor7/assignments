# Intro to to REST API architecture:

    # REST - Representational State Transfer

    # Resource - Single item (object) in a database
        /user
    # Collection - A collection of similar items in a database
        /users
    # Base (root) URL - http://amazon.com/

    # API Endpoint - http://amazon.com/movies

    # Parameters - /movies/:movieId

    # Query (query string) - /movies?genre=action&year=1999

    # Client - Frontend (website or application that they are interacting with)

    # Server - Intermediary (receives request from client and performs action)

    # Request Method - CRUD - GET POST PUT DELETE

    # Middleware - a function that fires on the inbetween

    # Request body (req.body)

    # UUID - creates unique IDs
        - npmm install uuid (not global)

#######################################################

# Express Router - Enables us to modularize our routes in express

# Modular file organization

#######################################################

# URL Parameters

    # Parts of a URL
        * Base - http://amazon.com
        * Endpoint - http://amazon.com/images
        * Parameter - http://amazon.com/images/234987348sfv
        * Query

# Parameters (req.params) - GET one

# URL Queries

    # Query String - (typically to filter results)
        * begins with the "?".
        * Built of key=value pairs.
        * Multiple queries separated by the "&".

#######################################################

# Middleware

    # What is it?
        * app.use()
            1. (optional) - Mount Path (endpoint)
            2. Callback function - receives the request, response objects, also the "next" function

    # The "next" function
        * Moves on to the next middleware in line on our server

# Console Errors in Express

    # Use a logger
        * npm install morgan (doesn't install globally)

# Connecting the Front-end to the Back-end

    # Folder Structure
        * create client folder with react app in it

    # Proxy
        * create in /src/package.json in react app : 
            },
                "proxy": "http://localhost:9000"
            }

    # Run 2 servers simultaneously
        * open new bash window in terminal

# Status Codes

    # 200 - Successful Request
    # 201 - Successful Insert / Sucessful update
    # 401 - Unauthorized
    # 404 - Not found
    # 500 - Server Error

    # https://http.cat