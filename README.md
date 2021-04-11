# blogapp 

[![](https://img.shields.io/static/v1?message=Front-end&label=react&logo=react&color=skyblue&style=for-the-badge)](https://reactjs.org/)
[![](https://img.shields.io/static/v1?message=Back-end&label=NodeJS&logo=javascript&color=orange&style=for-the-badge)](https://nodejs.org/en/)
[![](https://img.shields.io/static/v1?message=Database&label=MongoDB&logo=mongodb&color=blue&style=for-the-badge)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/github/license/SparshJain2000/blogApp?style=for-the-badge)](https://opensource.org/licenses/MIT)

![visitors](https://visitor-badge.laobi.icu/badge?page_id=SparshJain2000.blogApp)

 MERN stack blogging website .
 
## Technologies Used -
 ###### Back-end : Node  js, Express JS
 ###### Database : Mongo DB
 ###### Authentication : Passport JS
 ###### Front-end : ReactJS, Bootstrap
 
## Installation:
  #### Install mongoDB and NodeJS
  #### Clone the repository
  ```bash
  git clone https://github.com/SparshJain2000/blogApp.git
  ```
  ### `Go to /blogApp-backend/ folder`
  #### Install dependencies
  ```bash
  npm install
  ```
  #### Declare environment variables
  ###### Create a file .env 
  ```txt
  MONGO_URI = 'Your mongo url'
  SECRET = 'secret for Passport'
  ```
  #### Start the server (run server.js file)
  ```bash
  node server.js
  ```
  ### `Go to /blogApp-frontend/ folder`
  In the project directory, you can run:

```bash
npm start
```

Runs the app in the development mode.<br /> 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```bash
npm test
```

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```bash
npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
## License

**MIT &copy; [Sparsh Jain](https://github.com/SparshJain2000/blogApp/blob/master/LICENSE)**

## Support
Give a 🌟 to this repo if it helped you a bit .

Connect with me


<a href="mailto:jainsparsh0801@gmail.com" ><img height="25" alt="Nodejs" src="https://img.shields.io/static/v1.svg?message=jainsparsh0801@gmail.com&label=send&style=flat-square&logo=gmail&color=red&logoColor=red&colorA=grey&link=mailto:jainsparsh0801@gmail.com" /> </a> <a href="https://www.github.com/SparshJain2000/" ><img height="25" alt="Nodejs" src="https://img.shields.io/static/v1.svg?label=follow&message=@SparshJain2000&color=grey&logo=github&style=for-the-badge&logoColor=white&colorA=black" /> </a> <a href="https://www.linkedin.com/in/sparsh-jain-87379a168/" ><img height="25" alt="Nodejs" src="https://img.shields.io/static/v1.svg?label=connect&message=@SparshJain&color=success&logo=linkedin&style=for-the-badge&logoColor=white&colorA=blue" /> </a>


 # Docker & Kubernetes

![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-2CA5E0?style=for-the-badge&logo=kubernetes&logoColor=white)</br>
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)</br>
![GCP](https://img.shields.io/badge/Google_Cloud-1A73E8?style=for-the-badge&logo=google-cloud&logoColor=1A73E8&labelColor=FAFAFA)
![AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white&labelColor=ED8B00)</br>

## DOCKER

```bash
# Crear imagen Docker para frontend 
cd blogapp-frontend
docker build -t echaguiller/react-front 
# Crear imagen Docker para backend 
cd blogApp-backend
docker build -t echaguiller/node-server .

# Revisar Imagenes
docker images
```



## KUBERNETES


```bash
# Crear namespace
kubectl create namespace mern 
## Ejecutar Deployment
kubectl apply -f blogApp-backend/deployment.yaml
kubectl apply -f blogapp-frontend/deployment.yaml
# Revisar pods creados
kubectl get pods -n mern
# Revisar servicios creados y obtener External IP
kubectl get svc -n mern

# Eliminar Pods
kubectl delete pod <Nombre del pod>
# Descripción del pod
kubectl describe pod <Nombre del pod> 
# Descripción del Servicio
kubectl describe service <Nombre del servicio>

kubectl scale deployment <Nombre del nodo> --replicas=0
kubectl scale deployment <Nombre del nodo> --replicas=1
```


## Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```bash
# Import data
npm run data:import

# Destroy data
npm run data:destroy
Sample User Logins
```


```bash
# Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```