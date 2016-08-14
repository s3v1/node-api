# In progress, nothing to see here yet, move along






# node-automation-bp
A node.js api project




SebastianVilstrup/node-api-bp

[![Build Status](https://travis-ci.org/SebastianVilstrup/node-automation-bp.svg?branch=master)](https://travis-ci.org/SebastianVilstrup/node-automation-bp)

[![NSP Status](https://nodesecurity.io/orgs/sebastianvilstrup/projects/42ff13ab-1880-4dc3-8617-bf8195a83c9e/badge)](https://nodesecurity.io/orgs/sebastianvilstrup/projects/42ff13ab-1880-4dc3-8617-bf8195a83c9e)

[![Coverage Status](https://coveralls.io/repos/github/SebastianVilstrup/node-automation-bp/badge.svg?branch=master)](https://coveralls.io/github/SebastianVilstrup/node-automation-bp?branch=master)

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[![Windows Build](https://ci.appveyor.com/api/projects/status/jr6vfra8w84plh2g/branch/master?svg=true)](https://ci.appveyor.com/project/sheerun/bower/history)
[![Coverage Status](https://img.shields.io/coveralls/SebastianVilstrup/node-api-bp.svg)](https://coveralls.io/r/SebastianVilstrup/node-api-bp?branch=master)
[![Discord chat](https://img.shields.io/badge/discord-join%20chat%20%E2%86%92-brightgreen.svg?style=flat)](https://discord.gg/0fFM7QF0KpZRh2cY)
[![Issue Stats](http://issuestats.com/github/bower/bower/badge/pr?style=flat)](http://issuestats.com/github/bower/bower)
[![Issue Stats](http://issuestats.com/github/bower/bower/badge/issue?style=flat)](http://issuestats.com/github/bower/bower)

Intro
=====
This repository contains a boilerplate api project for Node.js
The point is to provide a starting point for a minimal Node.js application, that includes lots of automation.

It also includes some documentation for installing commonly used tools and servers.

JavaScript Style
================
We use and enforce StandardJS as our code style. 

Assumptions
===========
- You're using windows 7 or 8, in a 64 bit edition or Ubuntu Linux 14.04 LTS in a 64-bit edition
- Have administrative access to your machine

It may work on other configurations, but that's not tested.

Prerequisites
=============
You need a few tools before you can start the servers. Check the install section below.

- Git, for version control
- Windows Credential Store for Git, remembers git credentials
- Node & NPM, for the application server
- Redis, for our session state
- MongoDB, for storing our chats

The following sections tell you how to install the required pieces of software.

Install Git
-----------
Look at the doc\readme-git.md for details.

Install and run Node
--------------------
Look at the doc\readme-node.md for details.
Quickstart for a developer is:

    npm install
    npm start
    
    
Install redis
-------------
Look at the doc\readme-redis.md for details.


Install MongoDB
---------------
Look at the doc\readme-mongodb.md for details.

Automatic tools
===============
In this section we'll list the various online tools and services we use for this project:

Greenkeeper.io
--------------
Greenkeeper will check for out-of-date dependencies and submit pull requests for you.
Check their http://greenkeeper.io/#getting-started section for details on how to install. It's probably: 

    npm install -g greenkeeper
	greenkeeper login
	greenkeeper enable
	
Houndci.com
-----------
The Hound will sniff out style problems for you and comment on your pull requests

    https://houndci.com/repos
	
Node Security Project
---------------------
This service will monitor your dependencies and let you know if some of them are insecure.
More info at [nodesecurity.io](https://nodesecurity.io)