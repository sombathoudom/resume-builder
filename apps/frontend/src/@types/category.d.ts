declare namespace ICategory {
  interface Root {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  }
  interface CreateCategory {
    name: string;
    description: string;
  }
  interface UpdateCategory {
    id: string;
    name: string;
    description: string;
  }
  interface DeleteCategory {
    id: string;
  }
}
