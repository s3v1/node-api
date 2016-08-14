Intro
=====
This document will help you do run a redis instance on your own machine.

Read about redis here: http://redis.io/
There are several options for installing, read about them below.

Redis on Docker
===============
We assume that you have docker installed. See doc/readme-docker.md for instructions
We are using this docker image: https://hub.docker.com/_/redis/

    docker run -p 6379 --name crowdio-redis -d redis
    
TODO test if it works.
    
Redis on Windows
================
To run Redis on windows, first get the msi installer from: https://github.com/MSOpenTech/redis/releases/latest
At the time of writing, this was the version: https://github.com/MSOpenTech/redis/releases/download/win-2.8.2102/Redis-x64-2.8.2102.msi
Just run it and use the defaults. It will install redis as a service on the standard ports.

If you prefer to run it as a stand-alone process (instead of a service, go the URL above and get the zip version instead.
Unpack to a folder, and run: 
    
    redis-server.exe
    
That will start up a redis server as a normal process on the default port.

Redis on Linux
==============
TODO add instructions
    
    
    
