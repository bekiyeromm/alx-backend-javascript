import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((disp) => {
      console.log(`${disp[0].body} ${disp[1].firstName} ${disp[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
