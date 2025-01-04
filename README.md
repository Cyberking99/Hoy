# Hoy - Where Privacy Speaks Louder
**Hoy** (meaning "Hello" in Filipino) is an encrypted decentralized messaging dApp built to ensure end-to-end encrypted communication.

---

## OVERVIEW:
---
### **1. Problem Statement**
In today’s digital age, communication is increasingly vulnerable to surveillance, hacking, and unauthorized access. Centralized messaging platforms often store user data on their servers, making them prone to breaches, data leaks, and misuse of personal information. Privacy-conscious users have limited options for truly secure communication that guarantees end-to-end encryption and decentralization.

---

### **2. Solution**
**Hoy** is a decentralized messaging application built on **Starknet**, leveraging **Calimero** private shards to ensure end-to-end encrypted communication. Hoy prioritizes user privacy and eliminates centralized data storage by leveraging blockchain technology, ensuring that messages remain accessible only to the intended sender and recipient. The solution integrates:

- **End-to-End Encryption (E2EE):** Messages are encrypted at the source and can only be decrypted by the recipient.
- **Decentralized Identity (DID):** Users log in securely with Web3 wallets, eliminating traditional usernames and passwords.
- **Private Messaging at Scale:** Utilizes Calimero private shards for efficient and private off-chain storage, reducing latency while maintaining decentralization.
- **Self-Destructing Messages:** Users can configure messages to automatically delete after a set time.

---

### **3. Technical Architecture**

**Frontend:**
- Built with Next.js for a responsive and intuitive user interface.
- Wallet connect/integration using Starknet SDK.
- Message storage using Calimero TypeScript Client SDK
- Calimero TypeScript Client SDK

**Starknet (Smart Contract):**
- Utilized for storing cryptographic proofs and message metadata securely.
- Cairo smart contracts handle encryption keys and message delivery validation.
- Calimero (Calimero Protocol SDK):
- Handles off-chain storage of encrypted messages for scalability.
- Ensures private data sharing within a decentralized framework.

**Real-Time Communication:**
- Decentralized messaging protocol with efficient peer-to-peer delivery.
- WebSockets for real-time chat functionality.

---

### **4. Potential Impact**

**a. Privacy-First Communication:**
Hoy sets a new benchmark for secure and private messaging by eliminating intermediaries and offering uncompromising E2EE. It empowers users to take control of their data and communications.

**b. Global Accessibility:**
Blockchain-based infrastructure ensures Hoy can operate across borders without reliance on centralized servers or compliance with restrictive regulations.

**c. Scalability:**
Calimero private shards make Hoy scalable, enabling millions of users to communicate securely without latency issues commonly associated with blockchain apps.

**d. Trust in Communication:**
Hoy leverages blockchain transparency and cryptographic security to build user trust, addressing growing concerns over surveillance and data misuse.

---

## TECHNICAL DOCUMENTATION:
---

### Frontend
- Next + TypeScript
- TailwindCSS for styling
- Wallet integration using Starknet JS


### Project Structure
```
├── contracts/                  # cairo smart contract
├── devnet/                     # local Starknet node script
├── frontend/                   # project frontend
├── logic/                      # calimero rust implementation using Calimero Rust Protocol SDK
├── scripts/                    # script for project required dependency tools
```

## 📄 License

MIT License - see [LICENSE](LICENSE)

## 📞 Contact

- GitHub: [@Cyberking99](https://github.com/Cyberking99/)
- Project: [https://github.com/Cyberking99/Hoy](https://github.com/Cyberking99/Hoy)