
let categoryOptions = [
    'collares',
    'lamparas',
    'sahumerios'
]

class ControllerProducts {

    constructor(contenedor) {
        this.contenedor = contenedor
    }


    getAll = async (req, res) => {
        try {
            const page = parseInt(req.query.page) - 1 || 0;
            let categoria = req.query.category || 'todos';
            const busqueda = req.query.search || '';
            // let sortBy = req.query.sort || '';

            categoria === 'todos'
                ? (categoria = [...categoryOptions])
                : (categoria = [categoria])
            const products = await this.contenedor.getFiltered({ nombre: { $regex: busqueda, $options: 'i' } }, categoria, page)
            const pages = await this.contenedor.getPages({ nombre: { $regex: busqueda, $options: 'i' } }, categoria, page)

            let listPages = []

            for (let i = 0; i < pages; i++) {
                if (i === 0) {
                    listPages.push(1)
                }
                else if ((i % 4) === 0) {
                    listPages.push(listPages[listPages.length - 1] + 1)
                }
            }


            const response = {
                error: false,
                total: products.length,
                page: page + 1,
                pages: listPages,
                category: categoria,
                products
            }

            res.status(200).json(response)
        } catch (error) {
            res.status(404).json({ error: `${error}` })
        }
    }

    save = async (req, res) => {
        try {
            res.status(201).json({ data: await this.contenedor.save(req.body) })
        } catch (error) {
            res.status(404).json({ error: `${error}` })
        }
    }

    getById = async (req, res) => {
        try {
            const id = req.params.id
            res.status(200).json(await this.contenedor.getById(id))
        } catch (error) {
            res.status(404).json({ error: `${error}` })
        }
    }



    updateById = async (req, res) => {
        try {
            const id = req.params.id
            const newBody = req.body
            res.status(200).json({ data: await this.contenedor.updateById(id, newBody) })
        } catch (error) {
            res.status(404).json({ error: `${error}` })
        }
    }

    deleteById = async (req, res) => {
        try {
            const id = req.params.id
            res.status(200).json({ data: await this.contenedor.deleteById(id) })
        } catch (error) {
            res.status(404).json({ error: `${error}` })
        }
    }

}



export default ControllerProducts
