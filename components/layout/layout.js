import { useContext } from "react";

import MainHeader from "./main-header";
import Notification from "../ui/notification";

import NotificationContext from "@/store/notification-context";

function Layout({ children }) {
  const { notification } = useContext(NotificationContext);

  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {notification && (
        <Notification
          message={notification.message}
          status={notification.status}
          title={notification.title}
        />
      )}
    </>
  );
}

export default Layout;
