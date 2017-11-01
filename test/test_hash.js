let HashTest = artifacts.require('HashTest');

contract('HashTest', function(accounts) {
    it('getHash', async () => {
        let contract = await HashTest.new();
        let minedBlockNumber = await web3.eth.blockNumber - 1;
        let minedBlockHash = await web3.eth.getBlock(minedBlockNumber).hash;
        assert.equal(
            minedBlockHash,
            await contract.getHash.call()
        );
    });
});
