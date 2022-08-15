# Coding Challenge frontend

## Getting started
1. **Build Docker Image:** `docker build . -t react-app -f src/Docker/Dockerfile`
2. **Run Docker Image** 
```
docker run \                                                                       
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    react-app
```

## The frontend would be running on : http://localhost:3000/

## Scrrenshots from the frontend :

- Press Add to add a number
- Press sample to sample 10 random numbers

![Home screen](https://i.ibb.co/16CTCdc/Screenshot-2022-08-15-at-22-34-22.png)
![Add number](https://ibb.co/LQHDqVV)
![Result of sampling](https://i.ibb.co/RYxQ20T/Screenshot-2022-08-15-at-22-41-19.png)