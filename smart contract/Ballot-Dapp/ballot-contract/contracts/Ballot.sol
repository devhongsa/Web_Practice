// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.7.0 < 0.9.0;
contract Ballot {
    event log(string who, address chairman);
    event log2(string a);

    struct Voter {
        bool registered;
        uint weight;
        bool voted;
        uint vote;
    }
    struct Proposal {
        uint voteCount;
    }

    address chairperson;
    mapping(address => Voter) voters;
    Proposal[] proposals;


       //modifiers

    modifier onlyChair()
     {require(msg.sender == chairperson, "you are not chairperson");
      _;
     }

     modifier validVoter()
    {
        require(voters[msg.sender].registered, "Not a Registered Voter");
        _;
    }

    constructor (uint numProposals) {

        chairperson = msg.sender;
        voters[chairperson].weight = 2; // weight 2 for testing purposes
        voters[chairperson].voted = false;
        voters[chairperson].registered = true;
        emit log("chairman:",msg.sender);
        //proposals.length = numProposals; -- before 0.6.0
        for (uint8 prop = 0; prop < numProposals; prop ++)
            proposals.push(Proposal(0));

    }


    function register(address voter) public  onlyChair {
        require(voter!=chairperson, "chairperson can't register himself");
        require(!voters[voter].registered,"Already registered");
        voters[voter].weight = 1;
        voters[voter].voted = false;
        voters[voter].registered = true;
        emit log2("registered");
    }


    function vote(uint toProposal) public  validVoter{

        require (!voters[msg.sender].voted, "Already voted");
        require (toProposal < proposals.length,"Wrong proposal");

        emit log2("voting");

        voters[msg.sender].voted = true;
        voters[msg.sender].vote = toProposal;
        proposals[toProposal].voteCount += voters[msg.sender].weight;
    }

    function reqWinner() public view returns (uint winningProposal) {

        uint winningVoteCount = 0;
        for (uint prop = 0; prop < proposals.length; prop++)
            if (proposals[prop].voteCount > winningVoteCount) {
                winningVoteCount = proposals[prop].voteCount;
                winningProposal = prop;
            }
       assert(winningVoteCount>=3);
    }
}
