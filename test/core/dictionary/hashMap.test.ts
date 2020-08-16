import { HashMap } from "../../../src/kdata";

describe("hashMap is ok", function () {
  const hashMap = new HashMap<string>();
  beforeEach(function () {
    hashMap.put("kdp", "123");
    hashMap.put("kpd", "456");
    hashMap.put("kkk", "789");
  });
  afterEach(function () {
    hashMap.clear();
  });

  it("should add ok", function () {
    expect(hashMap.get("kdp")).toBe("123");
    expect(hashMap.get("kpd")).toBe("456");
  });

  it("should remove normal", function () {
    hashMap.remove("kpd");
    expect(hashMap.get("kpd")).toBeUndefined();
    expect(hashMap.get("kdp")).toBe("123");
  });
});
