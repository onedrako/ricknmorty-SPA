const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split("/")[1]  || "/" // #/1/ => ["", "1", ""]  => ["1"]

console.log(`FUNCION GETHASH = ${getHash()} `)

    export default getHash

//Esta funcón es para que el route trabaje sobre las rutas, esta función obtiene el # 
//location.hash obtiene el contenido que esta despues de un # en una url 