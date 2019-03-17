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
    
- - - - - - - - - - - - - - - - - - - - - - - Setup is now finished - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 
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

Description of 1stnet.json file

/* Chain ID means Networks ID */
/* Byzantium fault tolerance will be applied from block four */
/* timestamp checks for the time difference between two blocks and sets the difficulty level accordingly */
/* gaslimit can be specified */
/* difficulty level can be viewed as average number of times requird to compute the nonce value. In a private network we can keep a low value for this in order to make the things look ease */
/* coinbase species the miners address, the mining reward will be credited into that address */
/* alloc section is used to prefund certain accounts */
/* number means the block number, since this isthe genesis block the blocknumber is zero */
/* gasUsed is the sum of gas used in all transactions of this block */
/* parentHash is the hash of the previous block, since its is genesis block its is zero in this case */

Now we move on to creation of private network

    geth --datadir . init 1stnet.json
    
There are 2 folders created, 1. geth and 2. keystore
Keystore contains all the accounts present in our private network
Since we didnt create any accounts we have the keystore directory emepty by now.

Next step is to create user accounts,
    
     

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

        
