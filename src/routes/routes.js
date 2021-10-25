import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Game } from "../pages/Game";
import { Home } from "../pages/Home";

export function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/jogo" component={Game} />
    </Switch>
  );
}