use core::starknet::{ContractAddress, get_caller_address};

#[derive(Drop, Serde, starknet::Store, PartialEq)]
pub struct Message {
    from: ContractAddress,
    to: ContractAddress,
    message: ByteArray,
}

#[derive(Drop, Serde, starknet::Store, PartialEq)]
pub struct User {
    address: ContractAddress,
    userName: ByteArray,
    location: ByteArray,
    city: ByteArray
}

#[starknet::interface]
pub trait IEncryptedMessaggingApp<TContractState> {
    fn registerUser(
        ref self: TContractState,
        address: ContractAddress,
        userName: ByteArray,
        location: ByteArray,
        city: ByteArray
    ) -> bool;
    fn addFriends(ref self: TContractState, address: ContractAddress, userName: ByteArray) -> bool;
    fn sendMessage(ref self: TContractState, address: ContractAddress, message: ByteArray) -> bool;
    fn getMessages(ref self: TContractState, address: ContractAddress) -> Array<Message>;
    fn getFriends(self: @TContractState, address: ContractAddress) -> Array<User>;
}

#[starknet::contract]
mod MessagingApp {
    use super::Message;
    use super::User;
    use starknet::storage::{
        StoragePointerReadAccess, StoragePointerWriteAccess, StoragePathEntry, Map, Vec, VecTrait,
        MutableVecTrait
    };
    use core::starknet::{ContractAddress, get_caller_address};
    use array::ArrayTrait;
    #[storage]
    struct Storage {
        user: Map<ContractAddress, User>,
        users_count: u128,
        user_registered: Map<ContractAddress, bool>,
        user_friendList: Map<ContractAddress, Vec<User>>,
        user_message: Map<ContractAddress, Vec<Message>>
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
    const REGISTERED_ADDR: felt252 = 'User already Registered';
    const NOT_REGISTERED: felt252 = 'User not Registered';

    #[abi(embed_v0)]
    impl EncryptedMessageImpl of super::IEncryptedMessaggingApp<ContractState> {
        fn registerUser(
            ref self: ContractState,
            address: ContractAddress,
            userName: ByteArray,
            location: ByteArray,
            city: ByteArray
        ) -> bool {
            // check if user is registerd
            assert(address != 0.try_into().unwrap(), ADDR_ZERO);
            assert(!self.user_registered.entry(address).read(), REGISTERED_ADDR);
            let newUser = User {
                address: address, userName: userName, location: location, city: city
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

        fn addFriends(
            ref self: ContractState, address: ContractAddress, userName: ByteArray
        ) -> bool {
            // check for address zero
            assert(address != 0.try_into().unwrap(), ADDR_ZERO);
            // check if the user is registered
            assert(self.user_registered.entry(address).read(), NOT_REGISTERED);
            let caller = get_caller_address();
            // Get friend to add to user list of friends
            let friend = self.user.entry(address).read();
            self.user_friendList.entry(caller).append().write(friend);
            return true;
        }

        fn getFriends(self: @ContractState, address: ContractAddress) -> Array<User> {

            assert(address != 0.try_into().unwrap(), ADDR_ZERO);
            let mut friendslist = array![];
            for i in 0..self.user_friendList.entry(address).len() {
                friendslist.append(self.user_friendList.entry(address).at(i).read());
            };

            friendslist
        }
        fn sendMessage(
            ref self: ContractState, address: ContractAddress, message: ByteArray
        ) -> bool {
            let caller =get_caller_address();

            let message = Message { from: caller, to: address, message: message };
            self.user_message.entry(caller).append().write(message);
            // self.user_message.entry(address).write(message);

            return true;
        }
        fn getMessages(ref self: ContractState, address: ContractAddress) -> Array<Message> {
            assert(address != 0.try_into().unwrap(), ADDR_ZERO);
            let mut messages = array![];
            for i in 0..self.user_message.entry(address).len() {
                messages.append(self.user_message.entry(address).at(i).read());
            };

            messages
        }
    }
}
