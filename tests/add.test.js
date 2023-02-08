import {add} from '../app.js';
// unit test for the add function using Jest
describe("add", () => {
    it("should add two numbers", async () => {
      const result = await add(2, 3);
      expect(result).toBe(5);
    });
  
    it("should return an error if input is invalid", async () => {
      try {
        await add();
      } catch (error) {
        expect(error.message).toBe("Invalid input");
      }
    });
  });
  