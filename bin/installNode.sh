#!/usr/bin/env bash
#echo "*** Detecting Node version in package.json"
#export NODE_VERSION=$(node -e 'var p = require("./package.json"); var nv = (p.engines && p.engines.node) || "4"; console.log(nv)')

export NODE_VERSION=$(sed -En 's/.*node.:.*([0-9]+\.[0-9]+\.[0-9]+).*/\1/p' package.json)
if [ -z $NODE_VERSION ]; then
    export NODE_VERSION=4
    echo " ** Project did not have a parse-able node version in the engine section. Defaulting to version $NODE_VERSION"
else
    echo " ** Project is asking for Node.js $NODE_VERSION"
fi
#echo " ** Project is using Node.js $NODE_VERSION"
#echo "*** Preparing NVM"
[[ -f ~/.nvm/nvm.sh ]] || wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash; . ~/.nvm/nvm.sh
#echo "*** Using / Installing Node, version $NODE_VERSION"
nvm use $NODE_VERSION || nvm install $NODE_VERSION
#echo " ** node --version: $(node --version)"
#echo "*** Allowing node to run on ports < 1024"
#sudo setcap 'cap_net_bind_service=+ep' $(which node)
#echo "*** Node install completed"