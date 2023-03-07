import { createContext } from "react";

const NotificationContext = createContext({
  hideNotification: function () {},
  notification: null,
  showNotification: function () {},
});

export function NotificationContextProvider({ children }) {
  return (
    <NotificationContext.Provider>{children}</NotificationContext.Provider>
  );
}

export default NotificationContext;
