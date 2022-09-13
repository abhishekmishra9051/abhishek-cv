import Pages from "../containers";

import { Routes as Switch, Route } from "react-router-dom";


const { Home, About, Portfolio, Contact } = Pages;

export default function Routes() {
  return (
    <Switch>
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
    </Switch>
  );
}