
const app = {
    data(){
        return{
            nuevoNombre: '',
            nuevoContacto: '',
            nuevoServicio: '',
            error: false,
            clientes: []
        }
    },

    methods:{
        agregarCliente(){
            if(
                this.nuevoNombre === '' ||
                this.nuevoContacto === '' ||
                this.nuevoServicio === ''
            ){
                this.error = true;
                return;
            }

            this.clientes.push({
                nombre: this.nuevoNombre,
                contacto: this.nuevoContacto,
                servicio: this.nuevoServicio,
                mensajes: 0,
                llamadas: 0,
            });

            this.nuevoNombre='';
            this.nuevoContacto='';
            this.nuevoServicio='';
            this.error = false;
        },

        eliminarCliente(index){
            this.clientes.splice(index,1);
        }
    },

    computed:{
        totalClientes(){
            return this.clientes.length;
        },
        totalMensajes(){
            return this.clientes.reduce((total, cliente) => total + cliente.mensajes, 0);
        },
        totalLlamadas(){
            return this.clientes.reduce((total, cliente) => total + cliente.llamadas, 0);
        }
    }
};

Vue.createApp(app).mount('#componente');
