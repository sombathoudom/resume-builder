declare namespace Template {
  interface Root {
    id: string;
    name: string;
    description: string;
    preview_url: string;
    file_path: string;
    component_name: string;
    is_active: boolean;
    createdAt: string;
    updatedAt: string;
  }

  interface CreateTemplate {
    name: string;
    description: string;
    preview_url?: string;
    file_path?: string;
    component_name: string;
  }

  interface UpdateTemplate {
    id: string;
    name?: string;
    description?: string;
    preview_url?: string;
    file_path?: string;
    component_name?: string;
    is_active?: boolean;
  }

  interface DeleteTemplate {
    id: string;
  }
}
