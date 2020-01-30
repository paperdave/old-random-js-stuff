declare module 'dath' {
  interface Dath extends Math {
    dacos: (x: number) => number,
    dacosh: (x: number) => number,
    dasin: (x: number) => number,
    dasinh: (x: number) => number,
    datan: (x: number) => number,
    datan2: (x: number, y: number) => number,
    datanh: (x: number) => number,
    dcos: (x: number) => number,
    dcosh: (x: number) => number,
    dsin: (x: number) => number,
    dsinh: (x: number) => number,
    dtan: (x: number) => number,
    dtanh: (x: number) => number,
    deg2rad: (x: number) => number,
    rad2deg: (x: number) => number,
  }
  const dath: Dath;
  export default dath;
}
