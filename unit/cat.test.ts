import { Cat } from "../src/cat";

jest.mock("../../src/app"); // app is now a mock constructor

jest.useFakeTimers();

describe("Check Cat class", () => {
  const myCat = new Cat("Rigiy");

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Chemck cat feeding", () => {
    myCat.feed();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 5000);
  });
});
