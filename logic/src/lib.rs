use calimero_sdk::borsh::{BorshDeserialize, BorshSerialize};
use calimero_sdk::serde::Serialize;
use calimero_sdk::{app, env};

#[app::state]
#[derive(BorshDeserialize, BorshSerialize, Default)]
#[borsh(crate = "calimero_sdk::borsh")]
pub struct MessagingApp {
    messages: Vec<Message>,
}

#[derive(BorshDeserialize, BorshSerialize, Default, Serialize, Clone)]
#[borsh(crate = "calimero_sdk::borsh")]
#[serde(crate = "calimero_sdk::serde")]
pub struct Message {
    from: String,
    to: String,
    message: String,
}

#[app::logic]
impl MessagingApp {
    #[app::init]
    pub fn init() -> MessagingApp {
        MessagingApp::default()
    }

    pub fn send_message(&mut self, from: String, to: String, message: String) -> Message {
        env::log(&format!("Sending message from: {} to: {}", from, to));

        let new_message = Message {
            from: from.clone(),
            to: to.clone(),
            message: message.clone(),
        };
        self.messages.push(new_message.clone());

        new_message
    }

    pub fn get_messages(&self) -> Vec<Message> {
        self.messages.clone()
    }
}
