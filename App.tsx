import React from "react";
import { Routes } from "./src/Routes";
import { DayProvider } from "./src/context/DayContext";

export default function App() {
  return (
    <DayProvider>
      <Routes />
    </DayProvider>
  );
}
