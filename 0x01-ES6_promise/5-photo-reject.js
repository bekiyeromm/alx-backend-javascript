export default function uploadPhoto(filename) {
  const Message = `${filename} cannot be processed`;
  return Promise.reject(new Error(Message));
}
