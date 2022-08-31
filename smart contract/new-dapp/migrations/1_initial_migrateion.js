const Lottery = artifact.require("Lottery");

module.exports = function (deployer) {
  deployer.deploy(Lottery);
};
