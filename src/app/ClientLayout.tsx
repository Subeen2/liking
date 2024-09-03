"use client";

import React from "react";
import { Provider } from "react-redux";
import { makeStore } from "./lib/store";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={makeStore}>
      <main>{children}</main>
    </Provider>
  );
};

export default ClientLayout;
