function contactFactory(contactData) {
  let contact = {
    name: null,
    title: null,
    email: null
  }
  for (let i=0; i < contactData.length; i++) {
     contact.name = contactData[0]
     contact.title = contactData[1]
     contact.email = contactData[2]
   }
  return contact
}

function createContact(name, title, email) {
  let newContact = [name, title, email]
  let Contact = contactFactory(newContact)
  console.table(Contact)
}

createContact("Joe", "Developer", "joe@mail.com")
createContact("madi", "Developer", "madi@mail.com")