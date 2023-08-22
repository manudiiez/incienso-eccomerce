let stateOptions = [
    'nueva',
    'esperando pago',
    'pagada',
    'enviada',
    'terminada'
]

class ControllerOrder {

    constructor(container, product) {
        this.container = container
        this.product = product
    }

    getAll = async (req, res, next) => {
        try {
            const { page = 1, state = "todas" } = req.query
            let stateSearch = state === "todas"
                ? (
                    [...stateOptions]
                ) : (
                    state
                )
            const response = await this.container.getFiltered2(stateSearch, page - 1)
            let listPages = []
            for (let i = 0; i < response.pages; i++) {
                if (i === 0) {
                    listPages.push(1)
                }
                else if ((i % 4) === 0) {
                    listPages.push(listPages[listPages.length - 1] + 1)
                }
            }
            res.status(200).json({
                total: response.orders.length,
                page: parseInt(page),
                pages: listPages,
                category: stateSearch,
                orders: response.orders
            })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    save = async (req, res, next) => {
        try {
            const phone = req.body.phone
            const list = req.body.data
            const cart = await Promise.all(list.map(async (item) => {
                const product = await this.product.getById(item._id)
                return this.dataStructure(product, item.cant)
            }))
            let total = 0

            cart.map(item => {
                total = total + item.product.price * item.cant
            })
            res.status(200).json(await this.container.save(
                {
                    order: cart,
                    total: total,
                    state: "nueva",
                    phone: phone
                }
            ))
        } catch (error) {
            res.status(404).json({ error: `${error}` })
        }
    }

    getById = async (req, res) => {
        try {
            res.status(200).json(await this.container.getById(req.params.id))
        } catch (error) {
            res.status(404).json({ error: `${error}` })
        }
    }

    updateById = async (req, res) => {
        try {
            res.status(200).json(await this.container.updateById(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({ error: `${error}` })
        }
    }

    dataStructure = (data, cant) => {
        const product = {
            product: data,
            cant: cant
        }
        return product
    }


}

export default ControllerOrder