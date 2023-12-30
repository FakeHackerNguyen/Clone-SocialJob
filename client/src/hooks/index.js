import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { ChatContext } from "../context/ChatProvider";
import { NotificationContext } from "../context/NotificationProvider";
import { SearchContext } from "../context/SearchProvider";

export const useAuth = () => useContext(AuthContext);
export const useChat = () => useContext(ChatContext);
export const useNotification = () => useContext(NotificationContext);
export const useSearch = () => useContext(SearchContext);
