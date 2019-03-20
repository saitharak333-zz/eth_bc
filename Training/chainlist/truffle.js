module.exports = {
     // See <http://truffleframework.com/docs/advanced/configuration>
     // to customize your Truffle configuration!
     networks: {
          ganache: {
               host: "localhost",
               port: 7545,
               network_id: "*" // Match any network id
          },
          ournetwork: {
            host: "localhost",
            port: 8545,
            network_id: 4224,
            gas: 470000,
            // from: '0xb4f85f4c428e9be91128b33e0b42c33c4296af9a' // Hardcoding the smart contract deployer
          }
     }
};
