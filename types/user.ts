export interface User {
  id: number;
  name: string;
  email: string;
  website: string;

  activity: {
    totalPosts: number;
    completedTodos: number;
    pendingTodos: number;
  };
}

export interface UserDetail {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export type SortType =
  | "name-asc"
  | "name-desc"
  | "most-pending"
  | "most-completed";
