## Docker workshop simple exercises:

    docker run -p 80:80 nginx:alpine

    docker run -p 80:80 -d --name mynginx nginx:alpine

    dokcer exec -it <container_name> sh

    docker cp ./index.html <container_name>:/usr/share/nginx/html

    docker run -p 8080:80 -v $PWD:/usr/share/nginx/html -d nginx:alpine