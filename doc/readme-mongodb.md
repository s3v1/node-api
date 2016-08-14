Intro
=====
This document will help you do run a mongodb instance on your own machine.

Read about mongodb here: https://www.mongodb.org/
There are several options for installing, read about them below

Mongodb on Docker
=================
TODO
    
Mongodb on Windows
==================
First, if you're running Windows 7, then you need a Microsoft hotfix: http://hotfixv4.microsoft.com/Windows%207/Windows%20Server2008%20R2%20SP1/sp2/Fix405791/7600/free/451413_intl_x64_zip.exe
Just download, unpack into a temporary directory and install it.

Next, get the MongoDB msi installer: https://www.mongodb.org/downloads#production
I fetched this one: https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-3.0.6-signed.msi
Run the installer and setup using defaults.


Fetched: https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-3.0.6.zip

Start an administrative command prompt in the install directory: c:\Program Files\MongoDB\Server\3.0\bin\
Run:

    cd "c:\Program Files\MongoDB\Server\3.0\bin"
    mkdir data log
    compact /C /S:log /S:data
    mongod --dbpath "%CD%\data" --logpath "%CD%\log\mongod.log" --install
    net start mongodb
    
    
Mongodb on Linux
================
TODO add instructions

Mongodb on Mac OSX
==================
TODO add instructions

