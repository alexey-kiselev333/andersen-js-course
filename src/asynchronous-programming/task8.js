const getUsers = url => fetch(url);

// eslint-disable-next-line import/prefer-default-export
export async function footask8(url) {
  try {
    const response = await getUsers(url);
    const [user] = await response.json();

    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
