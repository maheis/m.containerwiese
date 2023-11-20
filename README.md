# m.dockerwiese
Meine Spielwiese für Docker... Kleine Anleitungen, Notizen und vor allem viel Trial and error. Alles was mir hilft um Docker zu lernen und verstehen!

# Install
```bash
sudo apt install \
docker.io podman skopeo

# Benutzerberechtigungen
sudo usermod -aG docker mani
   # reboot!
```

# Commands
## Images
```bash
# image herunterladen
docker pull <image>
# auflisten der geladenen images
docker images
# image löschen
docker rmi <image>
# image löschen (force)
docker rmi -f <image>
```

## Container starten
```bash
docker run <image>
# container starten (interaktiv)
docker run -it <image>
# container starten (interaktiv, mit namen)
docker run -it --name <name> <image>
# container starten (interaktiv, mit namen, mit port)
docker run -it --name <name> -p <hostport>:<containerport> <image>
# container starten (interaktiv, mit namen, mit port, mit volume)
docker run -it --name <name> -p <hostport>:<containerport> -v <hostpath>:<containerpath> <image>
# container starten (interaktiv, mit namen, mit port, mit volume, mit user)
docker run -it --name <name> -p <hostport>:<containerport> -v <hostpath>:<containerpath> -u <user> <image>
# container starten (interaktiv, mit namen, mit port, mit volume, mit user, mit workdir)
docker run -it --name <name> -p <hostport>:<containerport> -v <hostpath>:<containerpath> -u <user> -w <workdir> <image>
# container starten (interaktiv, mit namen, mit port, mit volume, mit user, mit workdir, mit env)
docker run -it --name <name> -p <hostport>:<containerport> -v <hostpath>:<containerpath> -u <user> -w <workdir> -e <env>=<value> <image>
# container starten (interaktiv, mit namen, mit port, mit volume, mit user, mit workdir, mit env, mit command)
docker run -it --name <name> -p <hostport>:<containerport> -v <hostpath>:<containerpath> -u <user> -w <workdir> -e <env>=<value> <image> <command>
# container starten (interaktiv, mit namen, mit port, mit volume, mit user, mit workdir, mit env, mit command, mit detach)
docker run -it --name <name> -p <hostport>:<containerport> -v <hostpath>:<containerpath> -u <user> -w <workdir> -e <env>=<value> -d <image> <command>
# container starten (interaktiv, mit namen, mit port, mit volume, mit user, mit workdir, mit env, mit command, mit detach, mit restart)
docker run -it --name <name> -p <hostport>:<containerport> -v <hostpath>:<containerpath> -u <user> -w <workdir> -e <env>=<value> -d --restart always <image> <command>
# container starten (interaktiv, mit namen, mit port, mit volume, mit user, mit workdir, mit env, mit command, mit detach, mit restart, mit netzwerk)
docker run -it --name <name> -p <hostport>:<containerport> -v <hostpath>:<containerpath> -u <user> -w <workdir> -e <env>=<value> -d --restart always --network <network> <image> <command>
# container starten (interaktiv, mit namen, mit port, mit volume, mit user, mit workdir, mit env, mit command, mit detach, mit restart, mit netzwerk, mit hostname)
docker run -it --name <name> -p <hostport>:<containerport> -v <hostpath>:<containerpath> -u <user> -w <workdir> -e <env>=<value> -d --restart always --network <network> --hostname <hostname> <image> <command>
# ...
```

## Container auflisten
```bash
docker ps
# container auflisten (alle)
docker ps -a
# container auflisten (alle, mit format)
docker ps -a --format "table {{.ID}}\t{{.Names}}\t{{.Image}}\t{{.Status}}"
# container auflisten (alle, nur IDs)
docker ps -a -q
```

## Container logs
```bash
docker logs <container>
# container logs (follow)
docker logs -f <container>
# container logs (follow, tail)
docker logs -f --tail 10 <container>
```

## Container stoppen
```bash
docker stop <container>
# container stoppen (force)
docker stop -f <container>
# container killen
docker kill <container>
```

## Container löschen
```bash
docker rm <container>
# container löschen (force)
docker rm -f <container>
# container löschen (alle)
docker rm $(docker ps -a -q)
```

## Komplettes Dockersystem aufräumen!
```bash
docker system prune
# komplettes Dockersystem aufräumen! (Images, Container...) (force)
docker system prune -f
# komplettes Dockersystem aufräumen! (Images, Container...) (all)
docker system prune -all
```