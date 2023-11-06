//SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0 < 0.9.0;

contract Dambaz {
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transfer (address indexed from, address indexed to, uint256 amount);
    event Approval (address indexed owner, address indexed spender, uint256 amount);

    constructor(string memory _name, string memory _symbol, uint8 _decimals) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;

        _mint(msg.sender, 1000);
    }

    function transfer(address recipient, uint256 amount) external returns (bool) {
        bool value = _transfer(msg.sender, recipient, amount);
        return value;
    }

    function approve(address spender, uint256 amount) external returns (bool) {
        require(spender != address(0), "spender is 0 address");
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool) {
        require(recipient != address(0), "recipient is 0 address");
        require(allowance[sender][msg.sender] >= amount, "amount exceeds allowance");
        allowance[sender][msg.sender] -= amount;

        return _transfer(sender, recipient, amount);
    }

    function _transfer(address sender, address recipient, uint256 amount) private returns (bool) {
        require(recipient != address(0), "recipient is 0 address");
        require(sender != address(0), "sender is 0 address");

        require(balanceOf[sender] >= amount, "insufficient funds");
        balanceOf[sender] -= amount;
        balanceOf[recipient] += amount;

        emit Transfer (sender, recipient, amount);
        return true;
    }

    function _mint(address to, uint256 amount) internal {
        require(to != address(0), "ERC20 minting to a 0 address");

        totalSupply += amount;
        balanceOf[to] += amount;
        emit Transfer(address(0), to, amount);
    }
}