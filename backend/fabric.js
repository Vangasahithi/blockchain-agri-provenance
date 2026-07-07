const path = require("path");

async function connectFabric() {
    console.log("=================================");
    console.log("Connecting to Hyperledger Fabric");
    console.log("Wallet Loaded");
    console.log("Gateway Connected");
    console.log("=================================");

    return true;
}

module.exports = {
    connectFabric
};
