
module.exports = () => {
  let casual = require('casual');
  const data = {users: [] }
  let contacts = [];
  // Create 1000 users
  for (let i = 0; i < 10; i++) {
    contacts.push({ id: i, name: casual.name, avatar: "https://www.1zoom.ru/big2/946/289597-frederika.jpg" })
  }
  data.users.push( {login: "root", email: "root@root.com", password: "root", uuid: casual.uuid, contacts: contacts } )
  return data
};
