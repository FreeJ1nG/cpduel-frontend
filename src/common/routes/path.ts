// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: '/login',
  register: '/register',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  example: {
    page: path(ROOTS_DASHBOARD, 'example/page'),
  },
};
