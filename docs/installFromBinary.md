---
id: installFromBinary
title: Install from Binary
---

### Supported Platforms
We support the following platforms:

* Mac OS X 64-bit
* Windows 64-bit
* Linux 64-bit

We support 64-bit JAVA 8 SDK and JRE

We recommend to have Java installed and `JAVA_HOME` environment variable setup. 
Both Windows and Linux wrappers for QuestDB will require `JAVA_HOME`. OSX wrapper 
will figure out the Java location automatically.

### Downloading JAVA
> QuestDB requires JAVA You can download it **[here](https://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html)**
>. If you are installing on ARM, download the ARM versions **[here](https://www.oracle.com/technetwork/java/javase/downloads/java-archive-javase8u211-later-5573849.html)**.

### Downloading QuestDB

> You can download QuestDB binaries and launch scripts **[here](https://github.com/questdb/questdb/releases/download/4.1.5/questdb-4.1.5-bin.tar.gz)**.

### Installing
Simply extract the files in a directory of your choice. Then to run:
- On Windows, launch `questdb.exe`
- On Linux & MacOS, launch `questdb.sh`

## Running on Windows
QuestDB can either be run as a program or as a service. You can start it out of the box with the default
configuration, or customise parameters as you start.

### Start

Launch a new `cmd.exe` window and navigate to where to where you extracted tar.gz :

```shell script
cd questdb-1.0.2
questdb.exe
```



### Start (as a service)
Simply run `questdb.exe` as Administrator.
>When QuestDB is run as a service, the default home directory is `C:\Windows\System32\questdb`.


### Stop


Simply press <kbd>Ctrl</kbd>+<kbd>C</kbd> in `cmd` window.

When run from console QuestDB server home is `qdbroot` in current directory.

## Running on MacOS

### Start

```shell script
questdb start
```



### Stop
```shell script
questdb stop
```



### Start with a different home directory:
```shell script
questdb start -d $HOME/.questdb
```


## Running on Linux
> Make sure JAVA_HOME environment variable is exported and points at a valid Java8 directory

> When running on Linux, QuestDB will run in the background and continue running even if you close the session.

By default QuestDB home directory will be $HOME/.questdb. You can change this location with `-d` command line switch.

### Start
The launch script is `questdb.sh`. The questdb.exe is a part of multi-platform package, you can ignore or delete it.
Start QuestDB as follows:

```shell script
cd questdb-4.1.5/
./questdb.sh start
```

### Stop
Response:
```shell script
./questdb.sh stop
```


### Launch Options

Windows launches supports the following commands and options:


```shell script
questdb.exe [start|stop|status|install|remove] [-d dir] [-f] [-j JAVA_HOME] [-t tag]
```



<table class="alt">
<thead>

<th>Command</th>
<th>Comments</th>

</thead>
<tbody>
<tr>
<td><code>start</code></td>
<td>Starts windows service. Default service name is <code>QuestDB</code></td>
</tr>
<tr>
<td><code>stop</code></td>
<td>Stops windows service</td>
</tr>
<tr>
<td><code>status</code></td>
<td>Shows service status. This command is useful for troubleshooting service problems. It prints RUNNING or
INACTIVE if service is started or stopped respectively.</td>
</tr>
<tr>
<td><code>install</code></td>
<td>Installs windows service. Default name is <code>QuestDB</code>. Windows service names have to be unique. If
you would like to run multiple instances of QuestDB you have to use <code>-t</code> option.</td>
</tr>
<tr>
<td><code>remove</code></td>
<td>Removes windows service</td>
</tr>
</tbody>
</table>


<table class="alt">
<thead>

<th>Option</th>
<th>Comments</th>

</thead>
<tbody>
<tr>
<td><code>-j</code></td>
<td>Path to Java SDK directory. By default QuestDB uses value of JAVA_HOME environment variable.</td>
</tr>
<tr>
<td><code>-d</code></td>
<td>Path to QuestDB home directory.</td>
</tr>
<tr>
<td><code>-t</code></td>
<td>Service name suffix tag. <code>-t X</code> will create <code>QuestDB:X</code> service name. This option
can be used with all commands.</td>
</tr>
</tbody>
</table>

