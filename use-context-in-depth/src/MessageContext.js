import { createContext, useState } from "react";

const MessageContext = createContext();

function Provider(props) {
  const [message, setMessage] = useState("Please subscribe and support");
  return (
    <MessageContext.Provider value={[message, setMessage]}>
      {props.children}
    </MessageContext.Provider>
  );
}

export { Provider};
export default MessageContext;