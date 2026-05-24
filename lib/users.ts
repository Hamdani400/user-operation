import { getUsers, getPosts, getTodos } from "@/lib/api";

export async function getUsersWithActivity() {
  const [users, posts, todos] = await Promise.all([
    getUsers(),
    getPosts(),
    getTodos(),
  ]);
  return users.map((user: any) => {
    const userPosts = posts.filter((post: any) => post.userId === user.id);

    const userTodos = todos.filter((todo: any) => todo.userId === user.id);

    const completedTodos = userTodos.filter((todo: any) => todo.completed);

    const pendingTodos = userTodos.filter((todo: any) => !todo.completed);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      website: user.website,
      activity: {
        totalPosts: userPosts.length,
        completedTodos: completedTodos.length,
        pendingTodos: pendingTodos.length,
      },
    };
  });
}
