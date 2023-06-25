# RChat
Implemented using node.js  and socket.io ; This is an attempt to create a whatsapp clone.
run `sudo npm i socket.io nodemon -g`
`nodemon nodeServer/index.js`
`<your browser> index.html`

# Docker
You can also set up the server simply by running `sudo docker compose up`
to create a docker image , run `sudo docker build -t rchat-server-image .`
To run the docker image and access it on localhost `sudo docker run -d -p 8000:8000 rchat-server-image`
For api image `sudo docker run -d -p 4099:4099 rchat-api-deployment`

# K8s
To access it on kubernetes:
`sudo k0s kubectl apply -f k8s-deployment.yaml`
To delete the pod
`sudo k0s kubectl delete pod rchat-server-pod`
Run the following to check if the pod is running
`sudo k0s kubectl get pods`
Run the following to access the server service on localhost
`sudo k0s kubectl port-forward service/rchat-server-deployment 8000:8000`
Run the following to access the api service on localhost
`sudo k0s kubectl port-forward service/rchat-api-deployment 4099:4099`
To test scaling run the following with correct IP (or localhost)
` while true; do curl http://10.106.224.66:4099/ ; done;`

# Monitoring
To deploy grafana on k8s run:
`sudo k0s kubectl apply -f k8s-deployment.yaml`
Run the following to access grafana on localhost
`sudo k0s kubectl port-forward service/grafana 3000:3000`
To deploy prometheus on k8s run:
`sudo k0s kubectl apply -f k8s-deployment.yaml`
Run the following to access prometheus on localhost
`sudo k0s kubectl port-forward service/prometheus-service 9090:8080`

# Fancy GUI

![image](https://user-images.githubusercontent.com/83643646/211990987-ba40b62b-2b64-4dbe-8758-2eeb41375c43.png)

![image](https://user-images.githubusercontent.com/83643646/211991007-9e9f78dc-afe8-4615-8a91-6fc1e07f1658.png)
