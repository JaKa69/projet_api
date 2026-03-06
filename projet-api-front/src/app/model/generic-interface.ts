export interface ITableColumn {
  label: string;
  field: string;
}

export interface FormField {
  label: string;
  field: string;
  type: 'text' | 'email' | 'password' | 'select';
  options?: { label: string; value: any }[];
}

export interface EntityConfig {
  title: string;

  columns: {
    field: string;
    label: string;
  }[];

  fields: any[];

  routes: {
    list: string;
    create: string;
    edit: string;
  };
}

export const USER_CONFIG: EntityConfig = {

  title: 'Utilisateurs',

  routes: {
    list: '/users',
    create: '/users/new',
    edit: '/users'
  },

  columns: [
    { label: 'Prénom', field: 'firstname' },
    { label: 'Nom', field: 'lastname' },
    { label: 'Email', field: 'email' },
    { label: 'Role', field: 'role' }
  ],

  fields: [
    { label: 'Prénom', field: 'firstname', type: 'text' },
    { label: 'Nom', field: 'lastname', type: 'text' },
    { label: 'Email', field: 'email', type: 'email' },
    { label: 'Mot de passe', field: 'password', type: 'password' },
    {
      label: 'Role',
      field: 'role',
      type: 'select',
      options: [
        { label: 'User', value: 'user' },
        { label: 'Admin', value: 'admin' }
      ]
    }
  ]
};

export const CATEGORY_CONFIG: EntityConfig = {
  title: 'Categories',

  routes: {
    list: '/categories',
    create: '/categories/new',
    edit: '/categories'
  },

  columns: [
    { field: 'name', label: 'Nom' },
    { field: 'description', label: 'Description' }
  ],

  fields: [
    { field: 'name', label: 'Nom', type: 'text' },
    { field: 'description', label: 'Description', type: 'text' }
  ]
};

export const COMPONENT_CONFIG: EntityConfig = {
  title: 'Composants',

  routes: {
    list: '/components',
    create: '/components/new',
    edit: '/components'
  },

  columns: [
    { field: 'title', label: 'Title' },
    { field: 'category.name', label: 'Category' },
    { field: 'brand', label: 'Brand' },
    { field: 'model', label: 'Model' },
    { field: 'description', label: 'Description' },
    { field: 'createdAt', label: 'Description' },
    { field: 'updatedAt', label: 'Description' },
  ],

  fields: [
    { field: 'category', label: 'Nom', type: 'text' },
    { field: 'brand', label: 'Description', type: 'text' },
    { field: 'title', label: 'Description', type: 'text' },
    { field: 'model', label: 'Description', type: 'text' },
    { field: 'description', label: 'Description', type: 'text' },
    // { field: 'specifications', label: 'Description', type: 'text' },
    // { field: 'image', label: 'Description', type: 'text' }
  ]
};

export const CONFIGURATION_CONFIG: EntityConfig = {
  title: 'Configurations',

  routes: {
    list: '/configurations',
    create: '/configurations/new',
    edit: '/configurations'
  },
  columns: [
    { field: 'user', label: 'User' },
    { field: 'name', label: 'Name' },
    { field: 'components', label: 'Components' },
    { field: 'totalPrice', label: 'TotalPrice' },
    { field: 'createdAt', label: 'Date de creation' },
    { field: 'updatedAt', label: 'Date de mise à jour' }
  ],

  fields: [
    { field: '_id', label: 'ID', type: 'text' },
    { field: 'user', label: 'Utilisateur', type: 'text' },
    { field: 'name', label: 'Name', type: 'text' },
    { field: 'components', label: 'Composants', type: 'text' },
    { field: 'totalPrice', label: 'Prix total', type: 'text' },
    { field: 'createdAt', label: 'Date de creation', type: 'text' },
    { field: 'updatedAt', label: 'Date de mise à jour', type: 'text' }
  ]
};
export const MERCHANT_CONFIG: EntityConfig = {
  title: 'Marchants',

  routes: {
    list: '/merchants',
    create: '/merchants/new',
    edit: '/merchants'
  },
  columns: [
    { field: 'name', label: 'Name' },
    { field: 'websiteUrl', label: 'Url' },
    { field: 'affiliateRate', label: 'affiliateRate' },
    { field: 'conditions', label: 'conditions' },
    { field: 'createdAt', label: 'Date de creation' },
    { field: 'updatedAt', label: 'Date de mise à jour' }
  ],

  fields: [
    { field: 'name', label: 'Name', type: 'text' },
    { field: 'websiteUrl', label: 'Url', type: 'text' },
    { field: 'affiliateRate', label: 'Rate', type: 'number' },
    { field: 'createdAt', label: 'Date de creation', type: 'text' },
    { field: 'updatedAt', label: 'Date de mise à jour', type: 'text' }
  ]
};