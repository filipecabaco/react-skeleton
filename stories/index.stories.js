import React from "react";
import { storiesOf } from "@storybook/react";
import { App } from "../src/container/App";

storiesOf("App", module).add("Load main container", () => <App />);
