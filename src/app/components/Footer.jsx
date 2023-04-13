import Link from 'next/link';
import React from 'react';

const rutas_explora = [
  {
    ruta: '/',
    label: 'Inicio',
  },
  {
    ruta: '/',
    label: 'Servicios',
  },
  {
    ruta: '/',
    label: 'Infantil',
  },
];
const rutas_conocenos = [
  {
    ruta: '/',
    label: '¿Quienes somos?',
  },
  {
    ruta: '/',
    label: 'Sucursales',
  },
  {
    ruta: '/',
    label: 'Contacto',
  },
];

const rutas_redes = [
  {
    ruta: 'https://www.facebook.com/Tecnilibros/?locale=es_LA',

    imagen: '../../img/facebook.png',
  },
  {
    ruta: 'https://twitter.com/Tecnilibros',

    imagen: '../../img/twitter.png',
  },
  {
    ruta: 'https://www.instagram.com/tecnilibros/?hl=es',

    imagen: '../../img/instagram.png',
  },
];
const rutas_direccion = [
  {
    ruta: 'https://maps.app.goo.gl/B46oXopwyZjttAph6?g_st=iw',
    direccion: 'Bulevar Ramírez Méndez # 268 Fraccionamiento Bahía',
    telefono: 'Tel (646) 152 12 69',
    correo: 'sucursaltecnilibros@yahoo.com.mx',
  },
  {
    ruta: 'https://maps.app.goo.gl/H7QSBWx6kLsfn8jm7?g_st=iw',
    direccion: 'Av.Ruiz # 488 Entre Juarez y Cuarta. Zona Centro',
    telefono: 'Tel. (646) 178 1408',
    correo: 'contacto@tecnilibros.com.mx',
  },
];

const Footer = () => {
  return (
    <div className=' bg-[#90BE6D]p-8   sm:columns-2  md:columns-3 xl:flex columns:4  '>
      {/* <a href=''>
        <img src='../img/1.png' alt='' />
      </a>  */}
      <div className=' xl: w-2/6 p-3'>
        <nav className='column columns-3'>
          <ul className='  font-serif font-thin  text-l p-1 '>
            {rutas_redes.map(({ ruta, imagen }, key) => (
              <li className='text-center'>
                <Link href={ruta}>
                  {' '}
                  <img src={imagen} alt='' />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='text-center text-l'>
          <label>Siguenos en nuestra redes sociales</label>
        </div>
      </div>

      <div className=' xl: w-1/6 p-3'>
        <h2 className=' pl-5'>EXPLORA</h2>
        <nav>
          <ul className=' font-serif font-thin  text-l p-5 '>
            {rutas_explora.map(({ ruta, label }, key) => (
              <li>
                <Link href={ruta}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='xl: w-1/6 p-3'>
        <h2 className='pl-5'>CONOCENOS</h2>
        <nav>
          <ul className='font-serif font-thin  text-l p-5 '>
            {rutas_conocenos.map(({ ruta, label }, key) => (
              <li>
                <Link href={ruta}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='grid  text-center xl: w-2/6 '>
        <h2 className='pt-3'>VISITANOS</h2>
        <nav>
          <ul className='font-serif font-thin  text-l p-5 '>
            {rutas_direccion.map(
              ({ ruta, direccion, telefono, correo }, key) => (
                <li>
                  <Link href={ruta}>
                    {direccion} <p>{telefono}</p> <p>{correo}</p>
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
