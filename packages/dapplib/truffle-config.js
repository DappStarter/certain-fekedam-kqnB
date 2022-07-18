require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth office pulp grace cart forget genius'; 
let testAccounts = [
"0x3e63f731023b0309d26d5d3da6bc8518c2c63c7778a8d81fe13f6bbc06494308",
"0x8b6c70feaa04a38a124159473a9ebd4a250c4913553aef41cf278e660580110b",
"0x6e4486b87184548dd90b019f925744c1538b65b1fa0559b68d92a9c1f4732e86",
"0x3563c170a570f3c30c3474e8da753a9c59af459b9d3de0e945e86be0ab0a44df",
"0x8a11b1c66bc851cc1f155f205c451c58a99f7abaf8e21dba57326004459892f8",
"0x3fd52903670ec3a6e1036e9a6839f11b697e1369b69f34862f01e480d750a369",
"0x23947db4348991c7619f4bb53e829b8a41c007d573c49e7aabe12ae78bb3142d",
"0x3a0c5bad6f4041879d21403f63d3718cc2745df2236a46404800f5cafc48b1d5",
"0xfc3b51d372f3b0b4ebd1fd8e02df989177c63a9389d42a6056688004b337af24",
"0x332a25d06c8a6f604525b0465e5d72788017f16177f6e4d301f7d75e78cebde8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

