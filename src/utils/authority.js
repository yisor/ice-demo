// use localStorage to store the authority info, which might be sent from server in actual project.

const storage = window.localStorage;

export function getAuthority() {
  return storage.getItem('suanli-authority') || 'admin';
}

export function setAuthority(authority) {
  return storage.setItem('suanli-authority', JSON.stringify(authority));
}
