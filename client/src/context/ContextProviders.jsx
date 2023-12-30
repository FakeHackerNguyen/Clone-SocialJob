/* eslint-disable react/prop-types */
import AuthProvider from "./AuthProvider";
import ChatProvider from "./ChatProvider";
import NotificationProvider from "./NotificationProvider";
import SearchProvider from "./SearchProvider";

export default function ContextProviders({ children }) {
  return (
    <NotificationProvider>
      <AuthProvider>
        <ChatProvider>
          <SearchProvider>{children}</SearchProvider>
        </ChatProvider>
      </AuthProvider>
    </NotificationProvider>
  );
}
