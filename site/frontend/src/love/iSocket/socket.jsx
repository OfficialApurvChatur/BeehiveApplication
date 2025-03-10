import { createContext, useMemo, useContext } from "react";
import io from "socket.io-client";


const SocketContext = createContext();
const getSocket = () => useContext(SocketContext)

const SocketProvider = ({ children }) => {
  const socket = useMemo(() => {
    return io(import.meta.env.VITE_ENVIRONMENT === "Production" ? "https://backend-for-beehive-application.onrender.com" : "http://localhost:8000", { withCredentials: true })
  }, []);

  return (
    <SocketContext.Provider value={socket} >
      {children}
    </SocketContext.Provider>
  )
}

export { SocketProvider, getSocket }