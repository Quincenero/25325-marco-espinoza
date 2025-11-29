export const USERS_URL = 'https://690e6475bd0fefc30a045746.mockapi.io/users';

export async function getUsers() {
  const res = await fetch(USERS_URL);
  return res.json();
}

export async function getUserById(id) {
  const res = await fetch(`${USERS_URL}/${id}`);
  return res.json();
}

export async function createUser(userData) {
  const res = await fetch(USERS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
}
