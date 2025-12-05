import { Switch, Route } from "wouter";
import { DarkPage } from "./components/DarkPage";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={DarkPage} />
      <Route component={DarkPage} />
    </Switch>
  );
}
