import { shallow } from "enzyme";
import * as React from "react";
import App from "../../src/container/App";

describe("App", () => {
  it("loads component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toEqual("React Skeleton");
  });
});
