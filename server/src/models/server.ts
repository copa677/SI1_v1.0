import  express, {Application}  from "express";
import cors from 'cors'
import routerUser from '../routes/user';
import routerproveedor from '../routes/proveedor';
import routerpermisos from '../routes/permisos';
import { User } from "./User";
import routerbitacora from '../routes/bitacora';
import routesProducto from '../routes/producto';

class Server{
    private app: Application;
    private port: String;
    //constuctor
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port,() => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        })
    }

    routes(){
        this.app.use('/api/users',routerUser);
        this.app.use('/api/proveedor',routerproveedor);
        this.app.use('/api/permisos',routerpermisos);
        this.app.use('/api/producto', routesProducto);
        this.app.use('/api/bitacora',routerbitacora);
    }

    midlewares(){
        this.app.use(express.json());
        //cors
        this.app.use(cors())
    }

    async dbConnect(){
        try {
            await User.sync();
            console.log('Base conectada con existo');
        } catch (error) {
            console.log('Error en la base de datos: ',error);
        }
    }

}

export default Server;