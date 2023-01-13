# quickfee

# server
    The server handles everything about the backend architech of the project, We have 3 main folders in the src folder,
    1. DB - this is where every collection is created and validation of fields are made here using Joi 
    2. MIDDLEWARE - All function and class are written here and exported to be used anywhere in our code base
    3. ROUTES -  All Api's are witten here and exported to the main index file for Express router use

Note every folder has an index that export everythig for every file in that folder and can be used without reaching the exact file url this is a safe code pratices.

RUN - npm install
RUN - npm run dev 