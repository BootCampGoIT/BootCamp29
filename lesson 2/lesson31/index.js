console.dir(document);

const authForm = document.forms.authForm;

const user = {
    email: "",
    password: ""
}

const getData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    user[name] = value;
    console.log(user)
}

const postData = (e) => {
    e.preventDefault();
    console.log(e);

}

authForm.addEventListener('input', getData)
authForm.addEventListener('submit', postData)