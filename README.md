# eth_bc

Setting  up the network: Installing Geth

    sudo apt-get install software-properties-common
    sudo add-apt-repository -y ppa:ethereum/ethereum
    sudo apt-get update
    sudo apt-get install ethereum
    
Installing Ganache: Emulator

    https://truffleframework.com/ganache
    
Click on Download option.
We will bw downloading a app image, when the download is finished open properties and select on Permissions and tick the box which allows you to run this app image as a program.
When this is finished open it by double clicking on it.
Then a opp up box appears saying "Would you like to integrate ganache with your system" click on yes please.
Accept Analytics 
We can we a test network with 10 nodes setup

If you have installed the previous versions of Nodejs and npm use google help to 1st uninstal that version and then try to install the newer versions specified down here.

Installing Nodejs and npm: Nodejs atleast versiuon 8 and npm atleast version 5

    sudo apt install curl
    curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
    sudo apt-get install -y nodejs
    sudo apt-get install gcc g++ make
    curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    sudo apt-get update && sudo apt-get install yarn
    sudo apt-get install -y build-essential
    
If everything is properly installed, then upon typing 

    node -v
    
We have to observe the node version installed in our system

Type 

    npm -v
    
to get the version number of the npm installed

Now install truffle framework: used for compiling testing and deploying the blockchains,

    npm install -g truffle
