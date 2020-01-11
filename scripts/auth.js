db.collection('guides').get().then(snapshot=>{
  // console.log(snapshot.docs);
  setupGuides(snapshot.docs);
})




//checking auth status
auth.onAuthStateChanged(user=>{
  if(user){
    console.log('user logged in');
  }
  else{
    console.log('user logged out');
  }
});




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
  auth.signOut();
});





const loginForm=document.querySelector('#login-form');
loginForm.addEventListener('submit',(e)=>{
  e.preventDefault();

  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email,password).then(cred=>{

    console.log(cred.user);

    //closing the login box
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();

    //clear login form
    loginForm.reset();

  });
});