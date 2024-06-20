//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Tickets{
    
    struct TicketLocked{
        string ticketId;
        string ticketIdentifier;
        address owner;
        string eventId;
        string ticketLevel; //normal or vip
        bool isScanned; // scanned or not scanned
        uint resellPrice;
        uint256 dateCreated;
        uint256 dateModified;
    }

    mapping (string => TicketLocked) private tickets;
    string[] private ticketAccounts;
    string[] private ticketsScanned;
    

    function getTicketIDList() public view returns(string[] memory) {
        return ticketAccounts;
    }

    function checkTicketIDExistance(string memory tempTicketID)
    public view returns(bool){
        for (uint256 i=0; i<ticketAccounts.length; i++){
            if (keccak256(abi.encodePacked(tempTicketID))==keccak256(abi.encodePacked(ticketAccounts[i])))
            return true;
        }
        return false;
    }

//return all information about a certain ticket
    function getTicketLocked(string memory tempTicketId) public view  
    returns(TicketLocked memory){ 
        return tickets[tempTicketId]; 
    }

//return set the resell price of the ticket
    function setTicketResellPrice(string memory _ticketId,uint _ticketPrice, uint _resellPercent) public  
    { 
        if (_resellPercent == 5){
            tickets[_ticketId].resellPrice=(_ticketPrice-((_ticketPrice * 5)/100));
        }else if (_resellPercent == 10){
            tickets[_ticketId].resellPrice=(_ticketPrice-((_ticketPrice * 10)/100));
        }else if (_resellPercent == 15){
            tickets[_ticketId].resellPrice=(_ticketPrice-((_ticketPrice * 15)/100));
        }
    }
    //
function getEveryTicketsLocked() view public returns (TicketLocked[] memory) {
    TicketLocked[] memory tempTickets = new TicketLocked[](ticketAccounts.length);

    for (uint256 i = 0; i < ticketAccounts.length; i++) {
        tempTickets[i] = tickets[ticketAccounts[i]];
    }

    return tempTickets;
}
//return all information about all tickets the user owns
function getAllTicketsLocked(address _owner) public view returns (TicketLocked[] memory) {
    uint256 temp = 0;
    for (uint256 i = 0; i < ticketAccounts.length; i++) {
        if (tickets[ticketAccounts[i]].owner == _owner) {
            temp++;
        }
    }

    TicketLocked[] memory tempTickets = new TicketLocked[](temp);
    uint256 index = 0;
    for (uint256 i = 0; i < ticketAccounts.length; i++) {
        if (tickets[ticketAccounts[i]].owner == _owner) {
            tempTickets[index] = tickets[ticketAccounts[i]];
            index++;
        }
    }

    return tempTickets;
}


//generate a ticket
    function createTicketLocked(
        string memory _ticketId,
        string memory _ticketIdentifier,
        string memory _eventId,
        string memory _ticketLevel //normal or vip
    )public {
        //string venueAddress= keccak256(abi.encodePacked(_venueID));
        tickets[_ticketId]=TicketLocked(
        _ticketId,
        _ticketIdentifier,
        msg.sender,
        _eventId,
        _ticketLevel,
        //_qrAddress,
        false,
        0,
        block.timestamp,
        block.timestamp
        );
        ticketAccounts.push(_ticketId);
    }


    
//
//    function getQRAddress(
//        string memory tempTicketId
//        )public view returns(string memory){
//            return(tickets[tempTicketId].qrAddress);
//    }

//scan a ticket
    function scanTicketLocked(string memory tempTicketID)public {
        ticketsScanned.push(tempTicketID);
        tickets[tempTicketID].isScanned=true;
        tickets[tempTicketID].dateModified= block.timestamp;
        for (uint256 i=0; i<ticketAccounts.length; i++){
            if (keccak256(abi.encodePacked(tempTicketID))==keccak256(abi.encodePacked(ticketAccounts[i]))){
            ticketAccounts[i]=ticketAccounts[ticketAccounts.length-1];
            ticketAccounts.pop();
            break;
            }
        }
    }

//resell a ticket
    function resellTicketLocked(
        address buyer, 
        string memory tempTicketID
        )public {
        tickets[tempTicketID].owner= buyer;
    }

//delete a ticket
    function deleteTicketLocked(
        string memory tempTicketID
        )public {//should first be scanned //all the tickets
        delete tickets[tempTicketID];
        for (uint256 i=0; i<ticketAccounts.length; i++){
            if (keccak256(abi.encodePacked(tempTicketID))==keccak256(abi.encodePacked(ticketAccounts[i]))){
            ticketAccounts[i]=ticketAccounts[ticketAccounts.length-1];
            ticketAccounts.pop();
            break; 
            }
        }
    }
}