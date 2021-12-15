require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remain honey grid arch off genius'; 
let testAccounts = [
"0x67ed634b222054ef98fbe35c25aebf218ea60a83e8d0dbe25551e645a504b6e2",
"0xa9632127cc7601d752fc2e81ee950bac097da685a1355201a849ebcedb29fd8f",
"0x49fa9aec2c3ee050e89cf9be4327281d4a7d35075972482dabe7bad96279f95b",
"0x9ef29c6d81302c870c1e5ae77e2c68e6e69c245b61658426b5d926761bb18ae0",
"0xc595a3173eb75ff4f56fd1c931340c36a1d65a2ba825d7afc35804f7576e6cc2",
"0x9e42a50b03001b9764f542ab06cbf6fcd328105f72a699773691652e8f192024",
"0x82cf0ed255b978a84f913f67a0d04c251a882034865ccabec3479e0bd4b8d99a",
"0x6d097a2ebbf534348cec15caf5f0cff8b7d6d76868fa3818b7c950ef84f50ba0",
"0x07c274e22f90b1c55cb62e6cf32d8ad8180b2ea6e09cbab0b72364b859c67723",
"0xdc2ad00c540b215e1ab64ae48aa77f90371324b3de576024c22a9ba1ec0a24b1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


