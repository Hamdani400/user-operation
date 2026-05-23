const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getUsers() {
  try {
    const res = await fetch(`${BASE_URL}/users`, {
      next: {
        revalidate: 60,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    return await res.json();
  } catch (error) {
    console.error("getUsers error:", error);
    throw error;
  }
}

export async function getUser(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
      next: {
        revalidate: 60,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch user");
    }

    return await res.json();
  } catch (error) {
    console.error(`getUser error (id: ${id}):`, error);
    throw error;
  }
}

export async function getPosts() {
  try {
    const res = await fetch(`${BASE_URL}/posts`, {
      next: {
        revalidate: 60,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    return await res.json();
  } catch (error) {
    console.error("getPosts error:", error);
    throw error;
  }
}

export async function getTodos() {
  try {
    const res = await fetch(`${BASE_URL}/todos`, {
      next: {
        revalidate: 60,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch todos");
    }

    return await res.json();
  } catch (error) {
    console.error("getTodos error:", error);
    throw error;
  }
}

export async function getUserById(id: string) {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      next: {
        revalidate: 60,
      },
    });

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    const user = await response.json();

    if (!user?.id) {
      return null;
    }

    return user;
  } catch (error) {
    console.error(`getUserById error (id: ${id}):`, error);
    throw error;
  }
}

export async function getPostsByUser(userId: string) {
  try {
    const response = await fetch(`${BASE_URL}/posts?userId=${userId}`, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    return response.json();
  } catch (error) {
    console.error(`getPostsByUser error (userId: ${userId}):`, error);

    throw error;
  }
}

export async function getTodosByUser(userId: string) {
  try {
    const response = await fetch(`${BASE_URL}/todos?userId=${userId}`, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }

    return response.json();
  } catch (error) {
    console.error(`getTodosByUser error (userId: ${userId}):`, error);

    throw error;
  }
}
