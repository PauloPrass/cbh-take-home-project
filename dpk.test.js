const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the partitionKey value when the event object has partitionKey populated", () => {
    const event = {
      partitionKey: "Paulo Ricardo Prass"
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("Paulo Ricardo Prass");
  });

  it("Returns the encrypted value when event has a string populated", () => {
    const event = "Paulo Ricardo Prass";
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("930d0c38fbd51665cb4f0b63e4b2444e7e6f885bebba1347c25afa17c2a3245144d7d3fde53aeabb48469f7d9c32c791fc6ac4cb353bd54c6a722dd0fc66f2e4");
  });

  it("Returns the encrypted value when event has a number populated", () => {
    const event = 123456;
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("64d09d9930c8ecf79e513167a588cb75439b762ce8f9b22ea59765f32aa74ca19d2f1e97dc922a3d4954594a05062917fb24d1f8e72f2ed02a58ed7534f94d27");
  });
});