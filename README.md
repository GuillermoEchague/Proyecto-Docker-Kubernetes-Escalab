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
![Kubernetes](https://img.shields.io/badge/Kubernetes-2CA5E0?style=for-the-badge&logo=kubernetes&logoColor=white)
![GCP](https://img.shields.io/badge/Google_Cloud-2CA5E0?style=for-the-badge&logo=google-cloud&logoColor=1A73E8&)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) </br>


## DOCKER


```bash
# Se crea imagen en local como en (1) o se descarga de dockerhub (2)

# (1) Desarrollar Docker desde local 
# Crear imagen Docker para frontend 
cd blogapp-frontend
docker build -t echaguiller/react-front .
# Crear imagen Docker para backend 
cd blogApp-backend
docker build -t echaguiller/node-server .

# (2) Descargar de dockerhub
# Imagen de Frontend en react
docker push echaguiller/react-front:tagname
# Imagen de Backend en node
docker push echaguiller/node-server:tagname


## ** Este Sección es opcional
# Revisar Imagenes
docker images
# Correr imagen
docker run -it <Nombre Imagen>

# Borrar Contenedores
docker ps -a
docker rm <CONTAINER ID>
docker rm <NAMES>

# Borrar Imagenes
docker images
docker rmi <CONTAINER ID>
docker rmi <NAMES>

# Borrar volumenes
docker volume ls
docker volume rm <VOLUME NAME>
# Elimina volumenes sin uso
docker volume prune
```


## KUBERNETES


```bash
# Crear namespace
kubectl create namespace mern

kubectl get namespaces

# Ejecutar Deployment
kubectl apply -f blogApp-backend/deployment.yaml
kubectl apply -f blogapp-frontend/deployment.yaml


# Sección es opcional
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

kubectl scale deployment node-deployment-6b44cbf884-ks6ff --replicas=0
kubectl scale deployment node-deployment-6b44cbf884-ks6ff --replicas=1
```


## GOOGLE CLOUD PROGRAM

```bash
# Logear desde GCP Bash
gcloud auth configure-docker

# Crear Imagenes
docker build -t us.gcr.io/project-blog-310502/nodeblogapp .
docker build -t us.gcr.io/project-blog-310502/reactblogapp .

# Subir Imagenes
docker push us.gcr.io/project-blog-310502/nodeblogapp
docker push us.gcr.io/project-blog-310502/reactblogap
```

## Crear Secretos

```bash
kubectl create secret genertic db-credentials \
--from-literal=MONGO_URI= <Mongo_URI> \
--from-literal=SECRET=<SECRETO> \
--from-literal=DB_USER=root -n mern
```
