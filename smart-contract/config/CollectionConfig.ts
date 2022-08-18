import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Pukies',
  tokenName: 'Pukies',
  tokenSymbol: 'PKS',
  hiddenMetadataUri: "ipfs://bafkreibfvgunfyel5twes6yibmldkiu3webwe6jljaexjvmvddaxsjwi2y/",
  maxSupply: 5000,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  contractAddress: "0xC2397128912f0004d34440a67c9FB7918781b355",
  marketplaceIdentifier: 'Pukies',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
