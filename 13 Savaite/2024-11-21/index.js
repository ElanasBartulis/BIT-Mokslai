import User from "./models/user.model.js";
import Post from "./models/post.model.js";

await Post.sync({ alter: true });
await User.sync({ alter: true });

// const newPostResponse = await Post.create({
//   title: "Why sql doesnt work?",
//   description: "lorem ipsum dolor sit amet...",
//   userId: 1,
// });

// console.log(newPostResponse.toJSON());

// Surasti visus Users
const usersResponse = await User.findAll();
const users = usersResponse.map((user) => user.toJSON());

const postResponse = await Post.findAll();
const post = postResponse.map((post) => post.toJSON());

// const newPostResponse = await Post.create({
//   title: "How to make tea",
//   description: "Clever way to make tea.",
// });

// const newPost = newPostResponse.toJSON();

// Sukurti nauja user
// const newUserResponse = await User.create({
//   name: "Agne",
//   lastname: "Agneee",
//   age: 18,
//   email: "agne@agneee.lt",
// });
// const newUser = newUserResponse.toJSON();

// Istrinti User
// #1
// usersResponse[1].destroy();
// #2
// await User.destroy({
//     where: {
//         id: 3,
//     }
// })

// Edit User
// #1
// usersResponse[2].lastname = "Basd";
// usersResponse[2].save();
// #2
// await User.update({ name: "Jonas" }, { where: { id: 2 } });

console.log(users);
console.log(post);
