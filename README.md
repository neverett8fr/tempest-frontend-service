# tempest-frontend-service  
this service aims to provide a graphical user interface for accessing and managing stored files.  

  
# How to run  
  
## Build  
```bash
docker build -t .
 ```
   
 ## Run  
 ```bash
docker run -p 8080:8080 -v . -e ENV_VARIABLE=value .
 ```
   
 ## Stop the container  
 ```bash
 docker stop container-name
 ```
