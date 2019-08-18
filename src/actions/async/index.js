import store from '~/store';
import { setUserError, setUserData, resetUserData } from '~/actions/state';

export async function fetchGitData(username, dispatch = store.dispatch) {
  //First clear old user
  store.dispatch(resetUserData());

  //Fetch data
  const data = await fetch(`https://api.github.com/users/${username}`);
  const formattedData = await data.json();

  if (formattedData.message === 'Not Found') {
    store.dispatch(setUserError(true));
    console.error('User Not Found');
    return;
    //We don't need to set anything now as it's cleared on fire up.
  }

  store.dispatch(setUserData(formattedData));
}
