const app = new Vue({

    el:"#Ventas",
    data:{
        //id_factura:'',
        Busqueda:null,
        nombre_producto:'',
        nombre_cliente:'',
        iva:null,
        cantidad:'',
        subtotal:null,
        total:null,
        forma_pago:'',
        lista_Ventas:[],
        idext:null,
        total1:null,
        total2:null,
        iva1:null,
    },

    methods:{
        listarVentas(){

            axios.get('http://localhost:3000/factura').then(resultado => {
                this.lista_Ventas = resultado.data;
                /*this.listarVentas();*/
            });

        },
        
        eliminarVtas(elim_Vta){
            var advertencia = confirm('¿Esta seguro que desea Eliminar la Venta de la factura Nro: '+elim_Vta+' ?')
                if (advertencia) { // si el usuario da en aceptar elimina completamente la venta elegida
                    alert("¡La Venta de la factura Nro "+elim_Vta+" fue Eliminada Satisfactoriamente!");
                    axios.delete('http://localhost:3000/factura/'+elim_Vta).then(resultado => {})
                }
                else { //sino no se elimina
                    alert("¡Se cancelo la eliminación de la Factura!");
                }
        },
        
        guardarSave(){
            let unaVta = { //corresponde al body, para luego enviar los datos por axios.post
                //id_factura:this.id_factura,
                nombre_producto:this.nombre_producto,
                nombre_cliente:this.nombre_cliente,
                iva:this.iva,
                cantidad:this.cantidad,
                subtotal:this.subtotal,
                total:this.total,
                forma_pago:this.forma_pago,
            }
            axios.post('http://localhost:3000/factura',unaVta).then(resultado => {
                alert(resultado.data); //Mostrar alerta (Cartel con mensaje)
                this.listarVentas(); //Refresca la lista
                //this.id_factura='';
                this.nombre_producto='';
                this.nombre_cliente='';
                this.iva='';
                this.iva1='';
                this.cantidad='';
                this.subtotal='';
                this.total='';
                this.total1='';
                this.total2='';
                this.forma_pago=''; //finaliza de vaciar el formulario
            });
        },

        buscarSearch(){
            axios.get('http://localhost:3000/factura/'+this.Busqueda).then(resultado => {
                this.lista_Ventas = resultado.data;
            });
        },

        editarVtas(id_factura,nombre_producto,nombre_cliente,iva,cantidad,subtotal,total,forma_pago){
            this.idext= id_factura;
            this.nombre_producto = nombre_producto;
            this.nombre_cliente = nombre_cliente;
            this.iva = iva;
            this.cantidad = cantidad;
            this.subtotal = subtotal;
            this.total = total;
            this.forma_pago = forma_pago; // va en los momentos de actualizar
        },

        actualizarVtas(){
            let unVta = { //corresponde al body, para luego enviar los datos por axios.post
                nombre_producto:this.nombre_producto,
                nombre_cliente:this.nombre_cliente,
                iva:this.iva,
                cantidad:this.cantidad,
                subtotal:this.subtotal,
                total:this.total,
                forma_pago:this.forma_pago,
            }
            axios.put('http://localhost:3000/factura/'+this.idext,unVta).then(resultado => {
                alert('Se actualizaron correctamente los datos');
                this.listarVentas();
                this.id_factura='';
                this.nombre_producto='';
                this.nombre_cliente='';
                this.iva='';
                this.iva1='';
                this.cantidad='';
                this.subtotal='';
                this.total='';
                this.total1='';
                this.total2='';
                this.forma_pago=''; // Finalizo de vaciar todos los campos
            });
        }
    },

    computed: {
        caliva:function(){
            this.iva1 = this.subtotal * 0.21
            if(this.cantidad == 1){
                return this.iva = this.iva1
            }else{
                return this.iva = (this.subtotal * this.cantidad) * 0.21
            }
        },
        caltotal:function(){
            this.total1= this.subtotal * this.cantidad
            this.total2 = this.total1 * 0.21
            if (this.cantidad == 1){
                return this.total = this.subtotal + this.iva1
            }else{
                return this.total = this.total1 + this.total2
            }
            
        }
    },

    created:function(){
        this.listarVentas();
    }

});
$(document).ready(function(){
    $('select').formSelect();
    });