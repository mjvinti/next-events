import { useContext } from "react";

import MainHeader from "./main-header";
import Notification from "../ui/notification";

import NotificationContext from "@/store/notification-context";

function Layout({ children }) {
  const {
    notification: { message, status, title },
  } = useContext(NotificationContext);

  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {notification && (
        <Notification message={message} status={status} title={title} />
      )}
    </>
  );
}

export default Layout;
