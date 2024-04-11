import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .all([signUpUser(fileName, lastName), uploadPhoto(fileName)])
    .then((res) => {
      res.map((obj) => ({
        status: obj.status,
        value: obj === 'fulfilled' ? obj.value : String(obj.reason),
      }));
    });
}
