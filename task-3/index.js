const endpoint = "https://dummyjson.com/users/add";
const payloads = ["Name1", "Name2", "Name3"];

const handleRequests = async (endpoint, payloads) => {
  // fetch the endpoint using the different payloads
  const promises = payloads.map(async (payload) => {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: payload }),
      });

      if (!res.ok) {
        throw new Error(`error fetching data`);
      }

      // get the data and return an object with status and data
      const data = await res.json();
      return { status: "fullfilled", value: data };
    } catch (e) {
      return { status: "rejected", reason: e.message };
    }
  });

  // await till all the Promises are settled irrespective of being fullfilled or rejected
  const res = await Promise.allSettled(promises);
  return res;
};

handleRequests(endpoint, payloads)
  .then((res) => console.log(res))
  .catch((e) => console.error(e));
