const { ethers } = require("hardhat");
const { expect, assert } = require("chai");
const { loadFixture }  = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { constants } = require("@openzeppelin/test-helpers")

 describe("ERC20 Token", function() {

    async function deploymentFixture() {
        const [owner, addr1, addr2] = await ethers.getSigners()
        const ERC20 = await ethers.deployContract("Dambaz", ["Samson", "SAM", 18])
        ERC20.waitForDeployment()
        return {ERC20, owner, addr1, addr2}
    }

    describe("Token Deployment", function() {
        it("sets name, token and decimals correctly", async() => {
            const { ERC20 } = await loadFixture(deploymentFixture)
            const name = await ERC20.name()
            const symbol = await ERC20.symbol()
            const decimals = await ERC20.decimals()
            assert(name == "Samson")
            assert(symbol == "SAM")
            assert(decimals == 18)
        })
    
        it("sets total supply correctly", async() => {
            const { ERC20 } = await loadFixture(deploymentFixture)
            const totalSupply = await ERC20.totalSupply()
            expect(totalSupply).to.be.equals(1000)
        })
    
        it("mints the initial supply to the msg.sender", async() => {
          const { ERC20, owner } = await loadFixture(deploymentFixture)
          const totalSupply = await ERC20.totalSupply()
          const balanceOfOwner = await ERC20.balanceOf(owner)
          assert(totalSupply == balanceOfOwner)
        })
    })

     describe("Token Transfers", () => {
      it("reverts if recipient is 0 address", async() => {
        let { ERC20, owner } = await loadFixture(deploymentFixture)
        expect(ERC20.connect(owner).transfer(constants.ZERO_ADDRESS, 200))
        .to.be.revertedWith("recipient is 0 address")
      })
      
      it("reverts if sender is 0 address", async() => {
        let { ERC20, addr1 } = await loadFixture(deploymentFixture)
        expect(ERC20.connect(constants.ZERO_ADDRESS).transfer(addr1, 200))
        .to.be.revertedWith("sender is 0 address")
      })
      
      it("reverts if sender has insufficient funds", async() => {
        let { ERC20,owner, addr1 } = await loadFixture(deploymentFixture)
        expect(ERC20.connect(owner).transfer(addr1, 2000))
        .to.be.revertedWith("Insufficient funds")
      })

      it("transfers correctly", async() => {
        let { ERC20, owner, addr1, addr2 } = await loadFixture(deploymentFixture)
        await ERC20.connect(owner).transfer(addr1, 200)
        await ERC20.connect(owner).transfer(addr2, 300)
        expect(await ERC20.balanceOf(owner)).to.be.equal(500)
        expect(await ERC20.balanceOf(addr1)).to.be.equal(200)
        expect(await ERC20.balanceOf(addr2)).to.be.equal(300)
      })
     
     })
      
     describe ("Token Approval and Transfer", function () {
      it("reverts if spender is 0 address", async() => {
        let { ERC20,owner,  } = await loadFixture(deploymentFixture)
        expect(ERC20.connect(owner).approve(constants.ZERO_ADDRESS, 200))
        .to.be.revertedWith("spender is 0 address")
      })

      it("approves correctly", async() => {
        let {ERC20, addr1, owner } = await loadFixture(deploymentFixture)
        await ERC20.connect(owner).approve(addr1, 200)
        const allowance = await ERC20.allowance(owner, addr1)
        assert(allowance == 200) 
      })

      it("reverts if recipient is 0 address", async() => {
         let { ERC20, owner, addr1 } = await loadFixture(deploymentFixture)
         await ERC20.connect(owner).approve(addr1, 200)
         expect(ERC20.connect(addr1).transferFrom(owner, constants.ZERO_ADDRESS, 100))
         .to.be.revertedWith("recipient is 0 address")
      })

      it("reverts if amount is greater than allowance", async() => {
         let {ERC20, owner, addr1, addr2 } = await loadFixture(deploymentFixture)
         await ERC20.connect(owner).approve(addr1, 200)
         expect(ERC20.connect(addr1).transferFrom(owner, addr2, 300))
         .to.be.revertedWith("amount exceed allowance")
      })

      it("approves and transfers immediately", async() => {
        let { ERC20, owner, addr1, addr2 } = await loadFixture(deploymentFixture)
        await ERC20.connect(owner).approve(addr1, 200)
        await ERC20.connect(addr1).transferFrom(owner, addr2, 150)
        expect(await ERC20.balanceOf(owner)).to.be.equal(850)
        expect(await ERC20.balanceOf(addr2)).to.be.equal(150)
        expect(await ERC20.allowance(owner, addr1)).to.be.equal(50)

      })
     })
 })