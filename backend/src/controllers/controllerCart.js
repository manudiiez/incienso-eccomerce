

class ControllerCart {

    constructor(contenedor) {
        this.contenedor = contenedor
    }

    getTotalPrice = async (req, res, next) => {
        try {
            const list = req.body.data
            const cart = await Promise.all(list.map(async (item) => {
                const product = await this.contenedor.getById(item._id)
                return this.dataStructure(product, item.cant)
            }))
            let total = 0

            cart.map(item => {
                total = total + item.precio * item.cantidad
            })
            res.status(200).json(total)
        } catch (error) {
            res.status(404).json({ error: `${error}` })
        }
    }

    // buy = async (req, res, next) => {


    // }


    dataStructure = (data, cant) => {
        const product = {
            id: data._id,
            nombre: data.nombre,
            precio: data.precio,
            imagen: data.imagen,
            categoria: data.categoria,
            cantidad: cant
        }

        return product
    }


}

export default ControllerCart
