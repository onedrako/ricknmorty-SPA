import Header from "../templates/Header"
import Home from "../pages/Home"
import Character from "../pages/Character"
import Error404 from "../pages/Error404"
import getHash from "../utils/getHash"
import resolveRoutes from "../utils/resolveRoutes"

const routes = {    //Rutas que se manejean dentro de la aplicaición y que va a hacer render en cada una de ellas.
    "/": Home,
    "/:id": Character,
    "/contact": "Contact",
}

const router = async () =>{   //Manejador que muestra los elementos.
    const header = null || document.getElementById("header")
    const content = null || document.getElementById("content")

    header.innerHTML = await Header()
    let hash = getHash();  // "/"
    console.log(`hash: ${hash}`)
    let route = await resolveRoutes(hash)
    console.log(`route: ${route}`)   // "/"
    let render = routes[route] ? routes[route] : Error404
    console.log(render)     // extrae del objeto routes el home por ser /
    content.innerHTML = await render()
}    

export default router