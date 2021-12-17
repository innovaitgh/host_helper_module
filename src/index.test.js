describe('host help', () => {

  const getUrl = (action, path = "") => {
    const hostHelper = require("./index");
    const url = hostHelper.host_help(action, path);
    return url;
  }

  describe("dev", () => {

    it("returns url without path", () => {
      const url = getUrl("example");
      expect(url).toBe("http://example.test");
    })

    it("returns url with path", () => {
      const url = getUrl("example", "/api/v1");
      expect(url).toBe("http://example.test/api/v1");
    })

  })

  describe("pro", () => {

    beforeEach(() => {
      jest.resetModules();
      process.env = {
        NODE_ENV: "production",
      };
    });

    it("returns url without path", () => {
      const url = getUrl("example");
      expect(url).toBe("https://example.com");
    })

    it("returns url with path", () => {
      const url = getUrl("example", "/api/v1");
      expect(url).toBe("https://example.com/api/v1");
    })


  })


});
