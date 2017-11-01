pragma solidity ^0.4.15;

contract HashTest {
    function getHash() public view returns (bytes32) {
        uint256 minedBlockNumber = block.number - 1;
        bytes32 minedBlockHash = block.blockhash(minedBlockNumber);
        return minedBlockHash;
    }
}
