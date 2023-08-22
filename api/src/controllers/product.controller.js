import {uploadImage} from '../libs/cloudinary.js'
import fs from 'fs-extra'
let categoryOptions = [
    'collares',
    'lamparas',
    'sahumerios'
]

class ControllerProduct {

    constructor(container) {
        this.container = container
    }

    getAll = async (req, res) => {
        try {
            const { page=0, category='todos', search=''} = req.query
            let categorySearch = category === 'todos'
                ? [...categoryOptions]
                : [category]
            const response = await this.container.getFiltered({ name: { $regex: search, $options: 'i' } }, categorySearch, page-1)
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
                total: response.products.length,
                page: parseInt(page),
                pages: listPages,
                category: categorySearch,
                products: response.products
            })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    save = async (req, res) => {
        try {
            res.status(201).json(await this.container.save(req.body))
        } catch (error) {
            res.status(404).json({ error: `${error}` })
        }
    }

    uploadImage = async (req, res) => {
        try {
            if (req.files?.image) {
                const response = await uploadImage(req.files.image.tempFilePath)
                res.status(201).json({
                    public_id: response.public_id,
                    secure_url: response.secure_url,
                })

                fs.unlink(req.files.image.tempFilePath)
            }
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

    deleteById = async (req, res) => {
        try {
            res.status(200).json({ data: await this.container.deleteById(req.params.id) })
        } catch (error) {
            res.status(404).json({ error: `${error}` })
        }
    }



}



export default ControllerProduct
