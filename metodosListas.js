





let listaCompras=['naranjas', 'peras', 'azucar', 'leche']
console.log(listaCompras)
listaCompras.splice(0,1,'Aceite de Girasol')
console.log(listaCompras)

listaCompras.splice(0,1)
console.log(listaCompras)


const fecha_cadena1= new Date('07/9/2004')
const fecha_cadena2= new Date('10/26/2012')
const fecha_cadena3= new Date('07/15/2015')


const fecha_cadena4= new Date('1/10/2010')



const peliculas=[

{titulo:'efecto mariposa', director: 'J. Mackye Gruber', fecha:fecha_cadena1 },
{titulo:'ventajas de ser invisible ', director: 'Stephen Chbosky', fecha:fecha_cadena2 },
{titulo:'love', director: 'Gaspar Noé', fecha: fecha_cadena3 }


]   
const peliculasPosteriores=peliculas.filter(valor => valor.fecha > fecha_cadena4 )
console.log(peliculasPosteriores)



const directores = peliculas.map(valor => {
    
    return valor.director
} )

console.log(directores)




const nombresPeliculas= peliculas.map(valor=>{

return valor.titulo

})


console.log(nombresPeliculas)



const concat= directores.concat(nombresPeliculas)
console.log(concat)





console.log(nombresPeliculas)

const propagacion= [...directores, ...nombresPeliculas  ]
console.log(propagacion)