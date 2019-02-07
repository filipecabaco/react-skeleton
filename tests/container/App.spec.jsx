import React from "react";
import { App } from "../../src/container/App";
import { shallow } from "enzyme";
describe("App", () => {
  it("loads component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toEqual("React Skeleton");
  });
});
