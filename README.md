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

    sudo apt-get purge --auto-remove nodejs

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
1st uninstall the orevious versions of truffle

    sudo npm uninstall -g truffle
    
    sudo npm install -g truffle@4.0.4

Be specific on installing truffle version 4.0.4, to check the version use

    truffle version

Installing atom ide

    sudo add-apt-repository ppa:webupd8team/atom
    sudo apt update
    sudo apt install atom

Enabling Ethereum language

    apm install language-ethereum
    
Setup is now finished 
 
Creation of a New Ethereum Priavte Node

1. Create a new directory (project/private), private network should be craeted inside this 'private' directory

Before create a private instance, wehave to craete a genesis block which defines the initialisation (initial behavior) of our blockchain instance.

We use puppeth command to create a genesis block, 1st type

    puppeth
    
Now it asks us to name the network, named it as 1stnet

Now on Everythong can be done as speecifed there

We use Ethash: Proof of work Consensus

Now asks for which networks to be prefunded, type as required, nothing typed no one funded

Asks for nerwork ID, cant give 1, 2, 3, 4, 42 given 4224, nothing given generates a random number

Manage Existing genesis --> Export genesis configuration Now we can type the file name as required

Exit pupeth using crtl + z command

Description of ethnet.json file

 Chain ID means Networks ID
 
 Byzantium fault tolerance will be applied from block four 
 
 timestamp checks for the time difference between two blocks and sets the difficulty level accordingly 
 
 gaslimit can be specified 
 
 difficulty level can be viewed as average number of times requird to compute the nonce value. In a private network we can keep a low value for this in order to make the things look ease 
 
 coinbase species the miners address, the mining reward will be credited into that address  
 
 alloc section is used to prefund certain accounts 
 
 number means the block number, since this isthe genesis block the blocknumber is zero 
 
 gasUsed is the sum of gas used in all transactions of this block 
 
 parentHash is the hash of the previous block, since its is genesis block its is zero in this case 

Now we move on to creation of private network

    geth --datadir . init ethnet.json
    
There are 2 folders created, 1. geth and 2. keystore

Keystore contains all the accounts present in our private network

Since we didnt create any accounts we have the keystore directory emepty by now.

Next step is to create user accounts,

    geth --datadir . create new
    
Asks for password, test1234 

In this network iam creating 3 users, all with the pass keys

To get details of all the accounts created till now use command,

    geth --datadir . account list

Initialisation of the private node/instance with 3 users is done. Now running this instance is left

As a default the mining reward will be given to the account whose index is 0, 

To run a private node

In order to run this node/instance, startnode.sh file is created using

    atom startnode.sh
    chmod +x startnode.sh
    ./startnode.sh
    
When we run this instance the index 0 account will be directly unlocked and that will bw acting as our miner,

In order to open our geth console, open a new terminal and type
    
    geth attach

Few Commands:

1. To see all the accounts

        eth.accounts
        
2. Miner account address or Coinbase

        eth.coinbase
        
3. Get balance from an account, in wei i.e., (10 power -18) ether

        eth.getBalance(eth.coinbase)
        eth.getBalance(eth.accounts[1])
        eth.getBalance(eth.accounts[2])
        
4. Conversion of this wei into ether

        web3.fromWei(eth.getBalance(eth.coinbase), "ether")

5. Stoping and starting the miner

        miner.stop()
        miner.start(2)
        
 number 2 inside the paranthesis specifies the number of threads
 
 6. Network ID
 
        net.version
        
 7. Unloacking an account
        
        personal.unlockAccount(eth.accounts[1], "test1234", 300)
        
 8. Sending Transaction
 
        eth.sendTransaction({from: eth.coinbase, to: eth.accounts[1], value: web3.toWei(10, "ether")})
        
9. Exiting

        exit
        
Now use cntrl + C to get exit from running private node

Creating a Smart Contract using Truffle

Initialisation of Environment

    truffle init

After the intialisation and smart contract is created, open 2 terminal windows where we did truffle init and do the following

In one terminal open 

    truffle develop
    
10 user accounts will be created (same as ganeche)

And in other terminal open console logs

    truffle develop --logs
    
To add the contact in the block, 

    migrate --compile-all --reset
    
Normal also possible

    migrate
    
In order to get the address of the contract, use the same name that is used in migrations file

    Greetings.address
    
Create an instance of this deployed smart contract,

    Greetings.deployed().then(function(instance){app = instance;})
    
With the above line we got a truffle object which got created

Now we can call our synchronous functions,

    app.getGreetings()
    
In order to get all the accounts,

    web3.eth.accounts
    
In order to call asynchronous functions,

    app.setGreetings("Hello World", {from: web3.eth.accounts[0]})

Exiting the develop
    
    .exit
    
Exiting the console

    cntrl + C

<<<<<<< HEAD
=======
Now till now what we have done is, we have used truffle develop to start a aganche core etherium node

Now on we try to connect with the ganache software,

Modify the truffle.js file with the network settings of the ganache

Now also we use truffle to connect with ganache by using,

    truffle migrate --compile-all --reset --network ganache
    
the above command is both used to connect with ganache core and to compile the smart contracts

In order to just connect with the truffle console instead of typing truffle develop use,

    truffle console --network ganache
    
With the console open we can try all our previously used commands,
    
    Greetings.deployed().then(function(instance){app = instance;})
    
To check the balance,
    
    web3.fromWei(web3.eth.getBalance(web3.eth.coinbase), "ether").toNumber()
    
Sample intructions,
    
    app.getMessaage()
    app.setGreetings("Hello World", {from: web3.eth.coinbase})
    
Sending ether,
    
    web3.eth.sendTransaction({from: web3.eth.coinbase, to: web3.eth.accounts[1], value: web3.toWei(5, "ether")})
    
Now creating a decentralised application

1. Create a work directory, open the terminal inside that

2. Unbox

        truffle unbox chainskills/chainskills-box
        
3. Created a new ChainList contract in contracts folder

4. Also create a migrations script corresponding to this smart contract

5. Now we can deploy a network using truffle develop or ganache, we prefer ganache. In order to use ganache we have to modify the network section of the truffle.js file.

Now we van check whether this is perfectly working or not by doing the things discussed above.

    ChainList.deployed().then(function(instance){app = instance;})
    app.sellArticle("Phone8", "To buy the latest version", web3.toWei(5, "ether"), {from: web3.eth.coinbase})
    app.getArticle()
    
Now testing the contract

    truffle test --network ganache
    
Now to install the node modules for front end part, 

    npm install
    
If this throws a error regarding the permission then use the following commands and then again try npm install

    sudo chown -R $(whoami) ~/.npm
    sudo chown -R $(whoami) ~/.config
    
In order to run the dapp,

    truffle run dev
    
Calling events from console,

    var sellEvent = app.LogSellArticle({}, {fromBlock: 0, toBlock: 'latest'}).watch(function(error, event) {console.log(event);})
    
In order to stop watching,
    
    sellEvent.stopWatching();

Again to see all the events, use the same command which we have used to initialise sellEvents

Creating Events in the front end part requires adding the code to app.js file and index.html

Connecting to the private network

1st we have to start our private node by using the following, go to the private directory in the terminal and 

    ./startnode.sh
    
Now the private network is setup, add the network in truffle.js file and do the migrations

    truffle migrate --compile-all --reset --network ournetwork
    
In order to deploy the smart contract from an account include the from field with the account address in truffle.js file and unloack the account in the truffle console before applying migrations using

    web3.personal.unlockAccount(web3.eth.accounts[1], "test1234", 600)

after unlocking, use the migrate command to migrate the contacts.

Adding BuyArticle function, after adding BuyArticle function in the .sol file, open truffle console

    truffle console --network ganache
    
create an instance of the contract,

    ChainList.deployed().then(function(instance){app = instance;})

Create an article

    app.sellArticle("Phone8", "To buy the latest version", web3.toWei(5, "ether"), {from: web3.eth.coinbase})
    
create a buy article event,

    var buyEvent = app.LogBuyArticle({_seller: web3.eth.coinbase}, {}).watch(function(error, event) {console.log(event);})

to buy the artice use,

    app.buyArticle({from: web3.eth.accounts[1], value: web3.toWei(5, "ether")})
    
