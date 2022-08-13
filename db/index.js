module.exports = () => {
  var casual = require('casual');
  const data = { users: [] }
  // Create 1000 users
  for (let i = 0; i < 1000; i++) {
    data.users.push({ id: i, name: casual.name, avatar: "https://www.1zoom.ru/big2/946/289597-frederika.jpg" })
  }
  return data
}
