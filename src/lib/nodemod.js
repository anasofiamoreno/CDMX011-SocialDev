import { pages } from './templates.js';
import { sendLogin, sendLoginGoogle } from './data.js';

export const objMain = document.createElement('main');
//document.body.main.appendChild(objMain);
document.getElementById("main").appendChild(objMain);

export function fnPageSignUp() {
  window.history.pushState({}, '', pages.singUp.path);
  objMain.innerHTML = pages.singUp.template;
}
export function fnPagesLogin() {
  window.history.pushState({}, '', pages.login.path);
  objMain.innerHTML = pages.login.template;
}

export async function fnLogin(loginEmail, loginPassword) {
  await sendLogin(loginEmail, loginPassword);
  if (firebase.auth().currentUser) {
    window.history.pushState({}, '', pages.home2.path);
  } else {
    return 'message';
  }
}

export async function fnAuthGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  console.log(provider);
  const message = await sendLoginGoogle(provider);
  try {
    window.history.pushState({}, '', pages.home2.path);
  } catch (error) {
    return message;
  }
}
