import { expect } from "chai";

import { put, call } from "redux-saga/effects";
import { delay } from "redux-saga";
import { incrementAsync } from "./";

describe("incrementAsync Saga test", () => {
  const gen = incrementAsync();
  it("must call delay(1000)", () => {
    expect(gen.next().value).to.deep.equal(call(delay, 1000));
  });
  it("must dispatch an INCREMENT action", () => {
    expect(gen.next().value).to.deep.equal(put({ type: "INCREMENT" }));
  });
  it("must be done", () => {
    expect(gen.next()).to.deep.equal({ done: true, value: undefined });
  });
});
