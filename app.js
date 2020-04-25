const app = document.querySelector('#app');

const nav = document.createElement('div');
nav.classList.add('navBar');
app.appendChild(nav)

const title = document.createElement('div');
const acmeTitle = document.createElement('h2');
title.appendChild(acmeTitle);
acmeTitle.innerText = 'Acme Layout';

const users = document.createElement('div');
users.innerText = 'Users';
const departments = document.createElement('div');
departments.innerText = 'Departments';
const contact = document.createElement('div');
contact.innerText = 'Contact';

const navBarArray = [title, users, departments, contact];

navBarArray.forEach((element) => {
    nav.appendChild(element);
})

const usersForm = document.createElement('div');
usersForm.classList.add('usersForm');
app.appendChild(usersForm);

const usersHeader = document.createElement('h1');
usersHeader.innerText = 'Users';
app.appendChild(usersHeader);

const creatAUser = document.createElement('div');
const usersFormHeader = document.createElement('h1');
usersFormHeader.innerText = 'Creat A User';
app.appendChild(usersFormHeader);