import React from "react";
import { Switch, Route } from "wouter";
import { DarkPage } from "./components/DarkPage";

export default function App() {
  return (
    <Switch>
      <Route component={DarkPage} />
    </Switch>
  );
}
