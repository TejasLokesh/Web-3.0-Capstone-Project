require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/SUhNaCazdHltzuJ4psAkKpXNv103nmEJ',
      accounts: ['60eb1845a6a061824b98eadb262e2bb5fdc9f6aed9069ea66186abaa44788129'],
    },
  },
};