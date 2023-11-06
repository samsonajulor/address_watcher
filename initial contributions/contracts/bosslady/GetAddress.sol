// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GetAddress {
   
    struct UserDetails {
        string name;
        string email;
        string phoneNumber;
    }

    mapping(address => UserDetails) public userAddresses;

    function addUserDetails(string memory _name, string memory _email, string memory _phoneNumber) public {
        userAddresses[msg.sender] = UserDetails(_name, _email, _phoneNumber);
    }

    function getUserDetails(address _userAddress) public view returns (string memory, string memory, string memory) {
        UserDetails storage userDetails = userAddresses[_userAddress];
        return (userDetails.name, userDetails.email, userDetails.phoneNumber);
    }
}
