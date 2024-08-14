const data = {
  name: "neeraj",
  age: 24,
};

const schema = {
  name: "string",
  age: "number",
};

const validate = (data, schema) => {
  if (typeof data.name !== schema.name || typeof data.age !== schema.age) {
    console.error("wrong data type");
  }
  console.log("correct data type");
};

validate(data, schema);
