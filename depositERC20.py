from web3 import Web3
# Connect to the Ethereum network (replace with your provider)
url = 'https://ethereum-sepolia.blockpi.network/v1/rpc/public'
web3 = Web3(Web3.HTTPProvider(url))

# Proxy contract address (replace with the actual proxy contract address)
proxy_address = Web3.to_checksum_address('0xc94b1bee63a3e101fe5f71c80f912b4f4b055925')
# ABI for the depositERC20 function
implementation_abi = [
    {
        "inputs": [
            {"internalType": "address", "name": "_l1Token", "type": "address"},
            {"internalType": "address", "name": "_l2Token", "type": "address"},
            {"internalType": "uint256", "name": "_amount", "type": "uint256"},
            {"internalType": "uint32", "name": "_minGasLimit", "type": "uint32"},
            {"internalType": "bytes", "name": "_extraData", "type": "bytes"}
        ],
        "name": "depositERC20",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

# Interact with the proxy, but use the implementation ABI
proxy_contract = web3.eth.contract(address=proxy_address, abi=implementation_abi)

# Set parameters for the depositERC20 function
l1_token_address = Web3.to_checksum_address('0xff34b3d4aee8ddcd6f9afffb6fe49bd371b8a357')  
l2_token_address = Web3.to_checksum_address('0xec46e0efb2ea8152da0327a5eb3ff9a43956f13e')  
amount = web3.to_wei(5000, 'ether')  # Amount to deposit (adjust as needed)
min_gas_limit = 200000  # Set a minimum gas limit (example value)
extra_data = b''  # Extra data (if any), otherwise empty bytes

private_key = ''
wallet_address = web3.eth.account.from_key(private_key).address
# Build the transaction
transaction = proxy_contract.functions.depositERC20(
    l1_token_address, l2_token_address, amount, min_gas_limit, extra_data
).build_transaction({
    'chainId': 11155111,  # Mainnet chain ID (use 3 for Ropsten, 4 for Rinkeby, etc.)
    'gas': 7900000,
    'gasPrice': web3.to_wei('100', 'gwei'),
    'nonce': web3.eth.get_transaction_count(wallet_address)
})

# Sign the transaction
signed_txn = web3.eth.account.sign_transaction(transaction, private_key)

# Send the transaction
tx_hash = web3.eth.send_raw_transaction(signed_txn.rawTransaction)

# Wait for the transaction receipt
receipt = web3.eth.wait_for_transaction_receipt(tx_hash)
print(f'Transaction successful with hash: {web3.to_hex(tx_hash)}')
