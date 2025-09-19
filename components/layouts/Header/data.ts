interface NavLink {
  id: number;
  title: string;
  path: string | null;
}

export const Links: NavLink[] = [
  {
    id: 1,
    title: "Nos produits",
    path: "#nos-produits",
  },

  {
    id: 5,
    title: "avis clients",
    path: "#avis-clients",
  },
];

//
interface TabNavLink {
  id: number;
  title: string;
  path: string | null;
}

export const TabLinks: TabNavLink[] = [
  {
    id: 1,
    title: "All Products",
    path: "#all-products",
  },

  {
    id: 4,
    title: "Reviews",
    path: "#reviews",
  },
];
