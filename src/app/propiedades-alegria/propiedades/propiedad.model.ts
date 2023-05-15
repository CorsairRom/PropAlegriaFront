interface PropiedadComuna {
    id: number;
    nom_comuna: string;
}

interface PropiedadTipoPropiedad {
    id:              number;
    nombre_tipoppdd: string;
}

interface PropiedadPropietario {
    id:           number;
    rut_prop:     string;
    pri_nom_prop: string;
    seg_nom_prop: string | null;
    pri_ape_prop: string;
    seg_ape_prop: string | null;
}

export interface Propiedad {
    id:               number;
    direccion_ppdd:   string;
    numero_ppdd:      number | null;
    rol_ppdd:         string | null;
    comuna:        PropiedadComuna;
    propietario:   PropiedadPropietario;
    tipopropiedad: PropiedadTipoPropiedad;
}


export interface PropiedadForm {
    id?: number;

    direccion_ppdd:   string;
    numero_ppdd:      number | null;
    rol_ppdd:         string | null;
    comuna_id:        number;
    propietario_id:   number;
    tipopropiedad_id: number;
}
