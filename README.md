# [XLR8](https://axlr8.ca)
Accelerate Your Journey with XLR8.com  
An electric vehicle e-commerce website 

# To run the app
1. backend:
- create a database named ```axlr8``` without any values for the password
- fill in the value for username with the username used to setup the database
- if you have a password for your database fill that in the ```application.properties ``` file in the resources folder
- run the application as a spring boot project from your IDE (requires JDK 21 and maven as a build tool)

2. frontend:
- to run the front end of the application, change directory into the frontend-react folder
- make sure local npm and node are the latest versions
- run ```npm i``` to install the dependencies
- run ```npm run dev``` to run the build script to start the dev server for the frontend


# To run the app on a container (Docker):
- change directory into the backend
- build the docker image from the Dockerfile in the backend dir. using ```docker build -t axlr8-backend . ```
- run the resulting docker image using ```docker run -d -p 8081:8081 axlr8-backend```
- next, change directory to the frontend-react directory
- build the image for the frontend using ```docker build -t axlr8-frontend .```
- run the image for the front end using ```docker run -d -p 5173:5173 axlr8-frontend```
