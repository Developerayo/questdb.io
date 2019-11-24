---
id: docker
title: Running via Docker
sidebar_label: Running via Docker
---

QuestDB is available to run via **Docker**. You can find our 
docker repository **[here](https://hub.docker.com/r/questdb/questdb)**.

## Supported platforms

We support the following platforms as Docker containers:
- Linux
- Linux ARM64
- Windows

## Pulling the image
The following will pull the latest image from the Docker repository
```shell script
docker pull questdb/questdb
```

If you prefer, you can pull a specific tag. For example
```shell script
docker pull questdb/questdb:4.0.0
```

## Using the image
You can use the Docker image in two ways:
- Create a container and then start it.
- Run as an interactive sandbox.

The interactive sandbox will create a container on the fly and start it. Once stopped, the container will be 
removed and the data deleted. 

### Ports & security

QuestDB will open two ports through the following arguments.
If you do not want to open either of these ports, simply remove the 
argument. However doing so may limit your interaction with QuestDB.

- `-p 9000:9000` opens port 9000 for the HTTP API and the web console. The web console is available on localhost:9000.
- `-p 8892:8892` opens port 8892 for the PostgreSQL wire protocol.

### Running as a container

#### Create a container

```shell script
docker create --name questdb -p9000:9000 -p 8892:8892 questdb/questdb
```

> You can set any name you like for the container name. This name will be used when you start/stop the container.

If you would like to use a specific release tag, you can specify as follows when creating the container:

```shell script
docker create --name questdb -p9000:9000 -p 8892:8892 questdb/questdb:4.0.0
```

Available options:

<table class="alt">
<thead>

<th>Option</th>
<th>Comments</th>

</thead>
<tbody>
<tr>
<td><code>--name</code></td>
<td>Name of your container. e.g <code>--name questdb</code></td>
</tr>
<tr>
<td><code>-p</code> (optional)</td>
<td>Allows Docker to expose a port. e.g <code>`-p 9000:9000`</code> will expose port 9000.
Though the parameter is optional, not opening the ports will limit interactions with the database.</td>
</tr>
<tr>
<td><code>-v</code> (optional)</td>
<td>Specify a path where QuestDB will save your data directly on the host machine. e.g <code>-v /local/dir:/root/.questdb/db</code></td>
</tr>
</tbody>
</table>

#### Start the container
```shell script
docker start questdb
```

#### Stop the container
```shell script
docker stop questdb
```

#### Display logs
```shell script
docker logs questdb
```

#### Remove a container
```shell script
docker rm questdb
```

### Run as an interactive sandbox

You can run the container as an interactive sandbox. You do not need to create the
container beforehand: it will be created on the fly. Logs will be displayed 
in the shell window.

Simply run:
```shell script
docker run --rm -it -p 9000:9000 -p 8892:8892 questdb/questdb
```

As the process will be running in shell, you can `CTRL + C` to stop it.

> When running as an interactive sandbox, the Container and all the data will be removed when
>the container stops. 

### Log into the container

You can log into the container and interact using `cmd` (if your container is windows-based) or `bash` 
(if your container is linux-based). If you are using a MacOS or linux machine, this will be `bash`. If you
are using a Windows machine, it could be either `cmd` or `bash` depending on what type of container you
are running.

**On Linux containers**
```shell script
docker exec -i questdb bash
```

**On Windows containers**
```shell script
docker exec -i questdb cmd
```

Once logged in, you can run commands into the container's VM.

### Volumes

QuestDB supports the following volumes:

**On Linux containers**
`/root/.questdb/db` 
 
**On Windows containers**
`c:\questdb\db` 

> You can mount host directories using -v option, e.g.
>`-v /local/dir:/root/.questdb/db`
