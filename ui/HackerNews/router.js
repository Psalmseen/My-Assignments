 import Stories from "./pages/story.js"

const router = new Navigo(null, true, "#");


export default class RouterHandler{
    constructor() {
        this.createRouter();
    }
    createRouter(){
        const routes = [
            { path: "/", page: Stories},
            { path: "/new", page: Stories},
            { path: "/ask", page: Stories},
            { path: "/show", page: Stories}
        ]
        routes.forEach(({path, page}) => {
            router.on(path, () => {
              page(path);
            }).resolve()
        })
    }

}