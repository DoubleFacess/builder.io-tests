"use client";
import { Builder, withChildren } from "@builder.io/react";
import Counter from "./components/Counter/Counter";

Builder.registerComponent(withChildren(Counter), {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
