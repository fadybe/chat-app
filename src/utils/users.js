const users = [];

// add user
const addUser = ({ id, username, room }) => {
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  if (!username || !room) return { error: "username and room are required!" };

  const existingUser = users.find(
    (u) => u.username === username && u.room === room
  );

  if (existingUser) return { error: "username is in use in that room now!" };
  const user = { id, username, room };
  users.push(user);
  return { user };
};

// remove user
const removeUser = (id) => {
  const index = users.findIndex((u) => u.id === id);
  if (index !== -1) return users.splice(index, 1)[0];
};

// get user
const getUser = (id) => users.find((u) => u.id === id);

// get users in a room
const getUsersInRoom = (room) => users.filter((u) => u.room === room);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
