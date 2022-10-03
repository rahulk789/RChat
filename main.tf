terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
    }
  }
}
resource "docker_container" "server" {
  image = "node:latest"
  name = "server"
  restart = "always"
  volumes {
    container_path = "/myserver"
    host_path = "/home/xenon/projects/RChat/" 
    read_only = false
  }
  ports {
    internal = 8000
    external = 8000  
    ip = "127.0.0.1"
  }
}


