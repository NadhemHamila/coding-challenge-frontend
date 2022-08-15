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