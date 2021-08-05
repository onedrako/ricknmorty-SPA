const resolveRoutes = (route) =>{
    if(route.length <= 3){
        let validRoute = route === "/" ? route : "/:id";
        // console.log(validRoute)   //:id
        return validRoute
    }
    console.log(route)
    return `/${route}`// /about
}

export default resolveRoutes