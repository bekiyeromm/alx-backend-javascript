import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((disp) => (
      disp.map((beki) => ({
        status: beki.status,
        value: beki.status === 'fulfilled' ? beki.value : String(beki.reason),
      }))
    ));
}
