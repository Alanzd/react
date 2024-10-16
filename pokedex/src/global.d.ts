// este archivo se crea para que importe los estilos de los modulos de css

declare module "*.module.css" {
  const classes: {[key: string]: string};
  export default classes
}

declare module '*.png';
declare module '*.svg';
declare module '*.gif';