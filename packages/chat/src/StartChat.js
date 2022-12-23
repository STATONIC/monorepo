import React from "react";
import { useNavigate } from "react-router-dom";

function StartChat({ computer, Contract }) {
  class ChatSc extends Contract {
    constructor(publicKey) {
      super()
      this.messages = []
      this._owners = [publicKey]
    }

    post(message) {
      this.messages.push(message)
    }

    invite(publicKey) {
      this._owners.push(publicKey)
    }
  }

  const navigate = useNavigate();

  const createChat = async (e) => {
    try {
      e.preventDefault();
      const publicKey = computer.getPublicKey();
      console.log('creating chat')
      let chat
      try {
        chat = await computer.new(ChatSc, [publicKey]);
      } catch (err) {
        console.log('error creating chat', err)
      }
      console.log('created chat', chat)
      navigate(`/chat/${chat._id}`);
    } catch (err) {
      if (err.message.startsWith("Insufficient balance in address"))
        alert("You have to fund your wallet https://faucet.bitcoincloud.net/");
    }
  };
  return (
    <div>
      <button onClick={createChat}>Create Chat</button>
    </div>
  );
}

export default StartChat;
