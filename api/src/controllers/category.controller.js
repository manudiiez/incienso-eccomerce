
class ControllerCategory {

    constructor(container) {
        this.container = container
    }

    getAll = async (req, res) => {
        try {
            res.status(200).json(await this.container.getAll())

        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    save = async (req, res) => {
        try {
            res.status(200).json(await this.container.save(req.body))

        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    deleteById = async (req, res) => {
        try {
            res.status(200).json(await this.container.deleteById(req.params.id))

        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

export default ControllerCategory
