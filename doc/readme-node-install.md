Intro
=====
This document will help you install node.
We prefer to use a version manager, so we can easily change node versions.
We'll also need to install some tools so we can install/compile native plugins for node.

Windows
=======
Get a node version manager that works with windows. We recommend nodist: 

    https://github.com/marcelklehr/nodist

Download the installer, run it and follow the wizard. Default choices are fine.
Once it is installed, you should start a new command prompt and run:

    nodist 4
	
Adjust the version number to suit what we're using now (look in package.json for the 'engines' section). To test: open up a new cmd prompt and run:

    node --version
	
...and it should say the right version number

Node-gyp
--------
Windows is not the best platform for node. The problem is node-gyp which is used by native module. It's tricky to get working for windows. If you don't use any native modules, you're fine but some of your dependencies might. Follow the instructions here on the node-gyp website, and hope for the best:

    https://github.com/nodejs/node-gyp

Test it with this command:

    npm install -g buffertools

If that installs/compiles, then you're fine.

Chocolatey
-------------
Not really node-related, but chocolatey is an easy package manager for windows. Instructions on the front page: 

    https://chocolatey.org/
	
Then run the following command in an administrative prompt to get a few tools, like this:

    choco install -y wget curl git

Linux
=====
We assume you're using Ubuntu or a derivative.
Start by installing the required build-tools:

    sudo apt-get install python build-essential -y    

Then we install nvm based on the instructions here: https://github.com/creationix/nvm
At the time of writing it was this version:

    wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash

to enable/load nvm just run:
  
    . ~/.nvm/nvm.sh

To enable these as default, add these lines at the end of your ~/.bashrc or ~/.profile file to have it automatically sourced upon login.

    . ~/.nvm/nvm.sh
    which node || nvm install 0.12.7
    nvm use 0.12.7
    
That should install node if it's missing and then enable it.

Mac OSX
=======
TODO add Mac OSX instructions