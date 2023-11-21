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
# image löschen !force
docker rmi -f <image>
```

## Container starten
```bash
docker run <image>
# interaktiv
docker run -it <image>
# mit detach
docker run -d <image>
# mit portmapping
docker run -p <hostport>:<containerport> <image>
# mit volume
docker run -v <hostpath>:<containerpath> <image>
# mit env
docker run -e <env>=<value> <image>
# mit command
docker run <image> <command>
# mit namen
docker run --name <name> <image>
# mit restart (?)
docker run --restart always <image>
# ...
```

## Container auflisten
```bash
docker ps
# alle
docker ps -a
# nur IDs
docker ps -q
```

## Container logs
```bash
docker logs <container>
# follow
docker logs -f <container>
# tail
docker logs --tail 10 <container>
```

## Container stoppen
```bash
docker stop <container>
# force
docker stop -f <container>
# killen
docker kill <container>
```

## Container löschen
```bash
docker rm <container>
# force
docker rm -f <container>
# alle
docker rm $(docker ps -a -q)
```

## Komplettes Dockersystem aufräumen!
```bash
docker system prune
# force
docker system prune -f
# Images, Container... alles!
docker system prune -all
```