use core::starknet::{ContractAddress, get_caller_address};
#[starknet::interface]
pub trait IEncryptedMessaggingApp<TContractState> {

fn registerUser(ref self: TContractState, address:ContractAddress, userName: ByteArray) -> bool;
fn addFriends(ref self: TContractState, address:ContractAddress, userName: ByteArray) -> bool;
}

#[starknet::contract]
mod MessagingApp {
 use starknet::storage::{
        StoragePointerReadAccess, StoragePointerWriteAccess, StoragePathEntry,Map,Vec,VecTrait, MutableVecTrait
    };
     use core::starknet::{ContractAddress, get_caller_address};
     use array::ArrayTrait;
    #[storage]
    struct Storage {
    user: Map<ContractAddress, User>,
    users_count: u128,
    user_registered: Map<ContractAddress, bool>,
    user_friendList: Map<ContractAddress, Vec<User>>
    }
    #[derive(Drop, Serde, starknet::Store,PartialEq)]
    pub struct User{
    address: ContractAddress,
    userName:ByteArray,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    pub enum Event {
       UserRegistered: UserRegistered,  
    }


    #[derive(Drop, starknet::Event)]
    pub struct UserRegistered {
    address: ContractAddress,
    userName: ByteArray,
}
    // Custom Errors
    const ADDR_ZERO: felt252 = 'Invalid User address';
    const REGISTERED_ADDR: felt252 = 'User lready Registered';

    #[abi(embed_v0)]
    impl EncryptedMessageImpl of super::IEncryptedMessaggingApp<ContractState> {
    fn registerUser(ref self: ContractState, address:ContractAddress, userName: ByteArray) -> bool{
    // check if user is registerd 
    assert(address != 0.try_into().unwrap(), ADDR_ZERO);
    assert(!self.user_registered.entry(address).read(), REGISTERED_ADDR);
    let newUser = User{
    address: address,
    userName: userName
    };
    
    self.user.entry(address).write(newUser);
    // self
    // .emit(
    // UserRegistered{
    // address: address,
    // userName: userName
    // });
    return true;
    }
    
    fn addFriends(ref self: ContractState, address:ContractAddress, userName: ByteArray) -> bool{

    let caller = get_caller_address();
    let friend = User{
address: address,
userName: userName
    };

    self.user_friendList.entry(caller).append().write(friend);
return true;
    }
}
}
