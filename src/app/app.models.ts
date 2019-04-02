export class PaginaDTO{
    articuloDTOs: ArticuloDTO[];
    publicidadDTOs: PublicidadDTO[];
}

export class ArticuloDTO{
    id: number;
	fecha: Date;
	titulo: string;
	resumen: string;
	texto: string;
	tipo: number;
	imagenes: ImagenDTO[];
}

export class PublicidadDTO{
    imagen: ImagenDTO;
	nombre: string;
	link: string;
	tipo: number;
	orden: number;
	activa: boolean;

}

export class ImagenDTO{
    id: number;
	nombre: string;
	url: string;
}