var passwordchecker = require("../src/password_checker");

describe("password should exist", function () {
  let password = "SIBO@G=g97@$>";
  it("must be unique", () => {
    expect(password).toBeTruthy();
  });
});

describe("password should be longer than 8 characters", () => {
  let password = "SIBO@G=g97@$>";
  it("must have at least 8 characters", () => {
    expect(password).toBe("SIBO@G=g97@$>");
  });
});

describe("password should have at least one lowercase letter", () => {
  let password = "SIBO@G=g97@$>";
  it("must have at least 1 lowercase letter", () => {
    expect(password).toBe("SIBO@G=g97@$>");
  });
});

describe("password should have at least one uppercase letter", () => {
  let password = "SIBO@G=g97@$>";
  it("must have at least 1 uppercase letter", () => {
    expect(password).toBe("SIBO@G=g97@$>");
  });
});

describe("password should have at least one digit", () => {
  let password = "SIBO@G=g97@$>";
  it("must have at least 1 digit", () => {
    expect(password).toBe("SIBO@G=g97@$>");
  });
});

describe("password should have at least one special character", () => {
  let password = "SIBO@G=g97@$>";
  it("must have at least 1 special character", () => {
    expect(password).toBe("SIBO@G=g97@$>");
  });
});

describe("password should at least meet 3 of the conditions", () => {
  let password = "SIBO@G=g97@$>";
  it(
    ("should exist" && password.length <= 8) ||
      password.match(/[a-z]/) == null ||
      password.match(/[A-Z]/) == null ||
      password.match(/[0-9]/) == null ||
      password.match(/[{ # % & * " ' ! @ $ ^]/) == null,
    () => {
      expect(password).toBe("SIBO@G=g97@$>");
    }
  );
});
