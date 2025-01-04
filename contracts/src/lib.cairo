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
    // fn acceptSingleFriendRequest(ref self: TContractState, address: ContractAddress) -> bool;
    fn sendMessage(ref self: TContractState, address: ContractAddress, message: ByteArray) -> bool;
    fn getMessages(ref self: TContractState, address: ContractAddress) -> Array<Message>;
    fn getFriends(self: @TContractState, address: ContractAddress) -> Array<User>;
    fn getAllUsers(self: @TContractState) -> Array<User>;
    fn getUser(self: @TContractState, address: ContractAddress) -> User;
    fn sendFriendRequest(ref self: TContractState, address: ContractAddress) -> bool;
    fn getAllFriendRequestForAuser(self: @TContractState, address: ContractAddress) -> Array<User>;
    fn acceptFriendRequest(ref self: TContractState, address: ContractAddress) -> bool;
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
        users: Vec<User>,
        user: Map<ContractAddress, User>,
        user_friendRequest: Map<ContractAddress, Vec<User>>,
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
            //check if user is registerd
            assert(address != 0.try_into().unwrap(), ADDR_ZERO);
            assert(!self.user_registered.entry(address).read(), REGISTERED_ADDR);
            self.user_registered.entry(address).write(true);

            let userName_clone = userName.clone();
            let location_clone = location.clone();
            let city_clone = city.clone();

            let newUser = User {
                address: address, userName: userName, location: location, city: city
            };
            //Store  user to an Array of users < Vec<User>>

            self.users.append().write(newUser);

            // Store a each user address to the user data one-one

            self
                .user
                .entry(address)
                .write(
                    User {
                        address: address,
                        userName: userName_clone,
                        location: location_clone,
                        city: city_clone,
                    }
                );
            // self.emit(UserRegistered { address: address, userName: userName_clone });
            return true;
        }
        // Add a single friend

        // fn acceptSingleFriendRequest(
        //     ref self: ContractState, address: ContractAddress, 
        // ) -> bool {
        //     // check for address zero
        //     assert(address != 0.try_into().unwrap(), ADDR_ZERO);
        //     // check if the user is registered
        //     assert(self.user_registered.entry(address).read(), NOT_REGISTERED);
        //     let caller = get_caller_address();
        //     // Get friend to add to user list of friends
        //     let friend = self.user.entry(address).read();
        //     self.user_friendList.entry(caller).append().write(friend);
        //     return true;
        // }

        fn getFriends(self: @ContractState, address: ContractAddress) -> Array<User> {
            assert(address != 0.try_into().unwrap(), ADDR_ZERO);
            let mut friendslist = array![];
            for i in 0
                ..self
                    .user_friendList
                    .entry(address)
                    .len() {
                        friendslist.append(self.user_friendList.entry(address).at(i).read());
                    };

            friendslist
        }
        fn sendMessage(
            ref self: ContractState, address: ContractAddress, message: ByteArray
        ) -> bool {
            let caller = get_caller_address();

            let message = Message { from: caller, to: address, message: message };
            self.user_message.entry(caller).append().write(message);
            // self.user_message.entry(address).write(message);

            return true;
        }
        fn getMessages(ref self: ContractState, address: ContractAddress) -> Array<Message> {
            assert(address != 0.try_into().unwrap(), ADDR_ZERO);
            let mut messages = array![];
            for i in 0
                ..self
                    .user_message
                    .entry(address)
                    .len() {
                        messages.append(self.user_message.entry(address).at(i).read());
                    };

            messages
        }

        fn getAllUsers(self: @ContractState) -> Array<User> {
            let mut allusers = array![];
            for i in 0..self.users.len() {
                allusers.append(self.users.at(i).read());
            };
            allusers
        }

        // get a single user
        fn getUser(self: @ContractState, address: ContractAddress) -> User {
            assert(address != 0.try_into().unwrap(), ADDR_ZERO);
            assert(self.user_registered.entry(address).read(), NOT_REGISTERED);
            self.user.entry(address).read()
        }
        fn sendFriendRequest(ref self: ContractState, address: ContractAddress) -> bool {
            let caller = get_caller_address();
            assert(address != 0.try_into().unwrap(), ADDR_ZERO);
            assert(self.user_registered.entry(address).read(), NOT_REGISTERED);
            //Get user
            let friendRequest = self.user.entry(address).read();
            //Add user to friendRequestList

            self.user_friendRequest.entry(caller).append().write(friendRequest);
            true
        }
        // Display friendRequest for a user
        fn getAllFriendRequestForAuser(
            self: @ContractState, address: ContractAddress
        ) -> Array<User> {
            let mut userfriendRequestList = array![];

            for i in 0
                ..self
                    .user_friendRequest
                    .entry(address)
                    .len() {
                        userfriendRequestList
                            .append(self.user_friendRequest.entry(address).at(i).read());
                    };
            userfriendRequestList
        }

        fn acceptFriendRequest(ref self: ContractState, address: ContractAddress) -> bool {
            // let caller = get_caller_address();
            // assert(address != 0.try_into().unwrap(), ADDR_ZERO);
            // assert(self.user_registered.entry(address).read(), NOT_REGISTERED);
            // // Get user friend

            // for i in 0..self.user_friendRequest.entry(caller).len(){
            // if
            // self.user_friendRequest.entry(caller).at(i).address.try_into.unwrap()
            // == address{
            // self.user_friendList.entry(caller).append().write(
            // self.user_friendRequest.entry(caller).at(i).read());
            // true
        }
    }
}
