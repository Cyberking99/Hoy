use core::starknet::{ContractAddress, get_caller_address};
#[starknet::interface]
pub trait IEncryptedMessaggingApp<TContractState> {

fn registerUser(ref self: TContractState, address:ContractAddress, userName: ByteArray) -> bool;
}

#[starknet::contract]
mod MessagingApp {
 use starknet::storage::{
        StoragePointerReadAccess, StoragePointerWriteAccess, StoragePathEntry, Map,
    };
     use core::starknet::{ContractAddress, get_caller_address};
    #[storage]
    struct Storage {
    user: Map<ContractAddress, User>,
    users_count: u128,
    user_registered: Map<ContractAddress, bool>,
    }
    #[derive(Drop, Serde, starknet::Store,PartialEq)]
    pub struct User{
    address: ContractAddress,
    userName:ByteArray,
    }
    // Custom Errors
    const ADDR_ZERO: felt252 = 'Invalid User address';
    const REGISTERED_ADDR: felt252 = 'User lready Registered';

    #[abi(embed_v0)]
    impl HelloStarknetImpl of super::IEncryptedMessaggingApp<ContractState> {
    fn registerUser(ref self: ContractState, address:ContractAddress, userName: ByteArray) -> bool{
    // check if user is registerd 
    assert(address != 0.try_into().unwrap(), ADDR_ZERO);
    assert(!self.user_registered.entry(address).read(), REGISTERED_ADDR);
    let newUser = User{
    address: address,
    userName: userName
    };
    self.user.entry(address).write(newUser);

    return true;
    }
    }
}
