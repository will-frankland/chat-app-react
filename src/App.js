import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return(
    <ChatEngine 
      height='100vh'
      projectID='81928b60-b7c0-4b9b-8037-e3ef8002a83f'
      userName='will-frankland'
      userSecret='123123'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;