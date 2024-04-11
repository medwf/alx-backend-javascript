export default function ploadPhoto(filename) {
  return Promise
    .reject(new Error(`${filename} cannot be processed`));
}
