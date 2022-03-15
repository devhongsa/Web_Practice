// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.7.0 < 0.9.0;

contract Lottery {
    address public manager;
    address payable[] public players;
    uint256 public treasury;

    constructor(){
        manager = msg.sender;
    }

    event getbal(uint256 bal);
    event getaddress(address add);

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function enter() public payable {
        require(msg.value > .01 ether);
        players.push(payable(msg.sender));
        treasury += msg.value;
    }

    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players)));
    }

    function pickWinner() public restricted {
        uint index = random() % players.length;
        emit getaddress(address(this));             //여기서 address(this)는 스마트컨트랙트 주소를 말한다.
        emit getbal(address(this).balance);
        players[index].transfer(treasury);
        emit getbal(address(this).balance);
        players = new address payable[](0);
        treasury = 0;
    }

    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }
}
