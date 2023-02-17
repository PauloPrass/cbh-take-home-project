const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  try{
    if (event?.partitionKey) {
      candidate = event.partitionKey;
    } else if (event){
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }

    candidate = candidate ? typeof candidate !== "string" ? candidate = JSON.stringify(candidate) : candidate : candidate = TRIVIAL_PARTITION_KEY;

    if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
      candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
    }
    return candidate;
  } catch(error) {
    console.log("An error occurred in the method deterministicPartitionKey: "+ error);
    return "0";
  }
};
