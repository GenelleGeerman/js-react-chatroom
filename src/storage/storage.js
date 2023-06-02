export function saveNameToCookie(name) {
  document.cookie = `name=${encodeURIComponent(name)}; path=/`;
}

export function getNameFromCookie() {
  const cookie = document.cookie;
  const nameCookie = cookie
    .split(";")
    .find((c) => c.trim().startsWith("name="));

  if (nameCookie) {
    const name = nameCookie.split("=")[1];
    return decodeURIComponent(name);
  }

  return "";
}

export function saveNameToSession(name) {
  sessionStorage.setItem("name", name);
}

export function getNameFromSession() {
  return sessionStorage.getItem("name") || "";
}
