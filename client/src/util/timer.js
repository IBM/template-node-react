
export default async function timer(time, callback) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (callback) {
        resolve(callback());
      } else {
        resolve();
      }
    }, time)
  });
}
