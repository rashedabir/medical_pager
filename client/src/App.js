import "./App.css";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";
import { Chat } from "stream-chat-react";
import { ChannelContainer, ChannelListContainer } from "./components";

const apiKey = "4qdtyhse8wb3";
const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
