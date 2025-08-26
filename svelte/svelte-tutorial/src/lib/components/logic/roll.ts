export async function roll() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(666);
    }, 1000);
  });
}

export async function roll_with_error() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error('Request failed'));
        return;
      }
      resolve(Math.floor(Math.random() * 6) + 1);
    }, 1000);
  });
}
