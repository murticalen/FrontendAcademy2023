//@ts-ignore
export const fetcher = (...args) =>
  //@ts-ignore
  fetch(...args).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("404");
    }
  });
