var ChainList = artifacts.require("./ChainList.sol");

contract('ChainList', function(accounts){

  var ChainListInstance;
  var seller = accounts[1];
  var articleName = "article 1";
  var articleDescription = "Description for article 1";
  var articlePrice = 10;

  it("should be initialised with emepty values", function() {
    return ChainList.deployed().then(function(instance) {
      return instance.getArticle();
    }).then(function(data) {
      assert.equal(data[0], 0x0, "seller must be emepty");
      assert.equal(data[1], "", "article code must be emepty");
      assert.equal(data[2], "", "article description must be emepty");
      assert.equal(data[3].toNumber(), 0, "article price must be zero");
    })
  });

  it("should sell an article", function() {
    return ChainList.deployed().then(function(instance) {
      ChainListInstance = instance;
      return ChainListInstance.sellArticle(articleName, articleDescription, web3.toWei(articlePrice, "ether"), {from: seller});
    }).then(function() {
      return ChainListInstance.getArticle()
    }).then(function(data) {
      assert.equal(data[0], seller, "seller must be " + seller);
      assert.equal(data[1], articleName, "article code must be " + articleName);
      assert.equal(data[2], articleDescription, "article description must be " + articleDescription);
      assert.equal(data[3].toNumber(), web3.toWei(articlePrice, "ether"), "article price must be " + articlePrice);
    })
  });

  it("should trigger an event", function() {
    return ChainList.deployed().then(function(instance) {
      ChainListInstance = instance;
      return ChainListInstance.sellArticle(articleName, articleDescription, web3.toWei(articlePrice, "ether"), {from: seller});
    }).then(function(receipt) {
      assert.equal(receipt.logs.length, 1, "one event has to be triggered");
      assert.equal(receipt.logs[0].event, "LogSellArticle", "right event has been triggered");
      assert.equal(receipt.logs[0].args._seller, seller, "seller is " + seller);
      assert.equal(receipt.logs[0].args._name, articleName, "article name is " + articleName);
      assert.equal(receipt.logs[0].args._price.toNumber(), web3.toWei(articlePrice, "ether"), "article price is " + articlePrice);
    })
  });
});
