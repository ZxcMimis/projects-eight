
document.getElementById('contactForm').addEventListener('submit', addContact);

function loadContacts() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';

    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${contact.firstName} ${contact.lastName} - ${contact.phone} - ${contact.email}
            <button class="edit-button" onclick="editContact(${index})">Редагувати</button>
            <button class="delete-button" onclick="deleteContact(${index})">Видалити</button>`;
        contactList.appendChild(li);
    });
}

function addContact(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push({ firstName, lastName, phone, email });
    localStorage.setItem('contacts', JSON.stringify(contacts));

    document.getElementById('contactForm').reset();
    loadContacts();
}

function deleteContact(index) {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    loadContacts();
}

function editContact(index) {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    const contact = contacts[index];

    document.getElementById('firstName').value = contact.firstName;
    document.getElementById('lastName').value = contact.lastName;
    document.getElementById('phone').value = contact.phone;
    document.getElementById('email').value = contact.email;

    editIndex = index; 
}