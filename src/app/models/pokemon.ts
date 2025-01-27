export interface Pokemon {
    id: number;
    name: string;
    sprites: {
      front_default: string;
      [key: string]: string | null;
    };
    // Puedes agregar más propiedades según necesites
  }