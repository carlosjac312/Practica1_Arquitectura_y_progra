import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { add } from "./main.ts";

Deno.test(function addTest() {
  /*type pasajero = {
    nombre?:string,
    origen?:string,
    altura:number,
    edad:number,
    peso:number,
    género:string
    infectado:boolean;
  }
  interface nave  {
    peso:number,
    dimensiones:number[],
    velocidad_curva:number,
    listado_pasajeros:pasajero[]
  }
  const pasajero1:pasajero={
    nombre:"Jose",
    origen:"Granada",
    altura:1.7,
    edad:36,
    peso:80,
    género:"hombre",
    infectado:true
  }
  const pasajero2:pasajero={
    nombre:"Mary",
    origen:"Mallorca",
    altura:1.9,
    edad:40,
    peso:75,
    género:"mujer",
    infectado:false
  }
  const pasajero3:pasajero={
    altura:1.6,
    edad:21,
    peso:92,
    género:"hombre",
    infectado:false
  }
  const pasajero4:pasajero={
    nombre:"Francisco",
    origen:"Luna",
    altura:4,
    edad:102,
    peso:102,
    género:"hombre",
    infectado:true
  }
  let datosEnterprise:nave={
    peso:4000000,
    dimensiones:[4,4,4,4],
    velocidad_curva:30,
    listado_pasajeros:[pasajero1,pasajero2,pasajero3,pasajero4]
  }
  datosEnterprise.listado_pasajeros.forEach(element => {
    if(Object.keys(element).find(e=>e==="nombre")) console.log(Object.values(element));
  });
  datosEnterprise.listado_pasajeros.forEach((elem:pasajero)=>{
    if(!elem.infectado) console.log(elem.nombre);
  })
  const alguienInfect = datosEnterprise.listado_pasajeros.some((p)=>p.infectado)
  const todosSanos = datosEnterprise.listado_pasajeros.every((p)=>!p.infectado)
  const primerInfect = datosEnterprise.listado_pasajeros.find((p)=>p.infectado)
  console.log(`Infectado detectado: ${alguienInfect}\nToda la tripulacion sana: ${todosSanos}\nPrimer infectado detectado: ${primerInfect?.nombre}`)
  
  
  const fechas = [1234, 22, -6, 234.5];
  const fechasEntendibles: number[]=fechas.filter((e)=>e>=0&&!e.toString().includes('.'));
  console.log(fechasEntendibles)
  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const fechasPerfectas = fechasEntendibles.map((elem:number)=>{
    return "Año: "+elem+"|Mes: "+getRandomInt(1,12)+"|Dia: "+getRandomInt(1,30)+"|Hora: "+getRandomInt(0,23)+"|Minuto: "+getRandomInt(0,59)+"|Segundo: "+getRandomInt(0,59);
  });
  console.log(fechasPerfectas);*/
  type turbo_conducto = {
    numero:number
    edad:number
    daños:number
    tribbles:number
  }
  const listaTubos: turbo_conducto[]=[
    {numero:1, edad:38, daños:50, tribbles:62},
    {numero:2, edad:28, daños:120, tribbles:27},
    {numero:3, edad:20, daños:8, tribbles:50},
    {numero:4, edad:10, daños:0, tribbles:12},
  ]
  const mayor20 = listaTubos.filter((e)=>e.edad>20).map((e)=>e.tribbles).reduce((a,e)=>a+=e);
  console.log(mayor20)
  const señal = listaTubos.forEach((e)=>console.log("Numero: "+e.numero+"| Daños:"+e.daños+"| Tribbles:"+e.tribbles));
  const peligro=listaTubos.map((e)=> e.tribbles>e.daños/2 ?true:false)
  console.log(peligro)
});
