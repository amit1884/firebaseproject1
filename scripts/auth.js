const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  console.log(email,password);
//signing in or say entering credential in auth database
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
//closing the signup box
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();

    //clear signup form
    signupForm.reset();
});
});


// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('user signed out');
  });
});