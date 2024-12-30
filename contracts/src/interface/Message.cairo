use core::starknet::{ContractAddress, get_caller_address};
#[starknet::interface]
pub trait IEncryptedMessaggingApp<TContractState> {
    fn registerUser(
        ref self: TContractState, address: ContractAddress, userName: ByteArray
    ) -> bool;
}
