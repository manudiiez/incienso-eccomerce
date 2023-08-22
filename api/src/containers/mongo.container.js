class ContainerMongodb {

    constructor(model) {
        this.model = model;
    }


    async getAll() {
        try {
            return await this.model.find({}).lean()
        } catch (error) {
            throw new Error(`${error}`)
        }
    }

    async getOneByParameters(obj) {
        try {
            return await this.model.findOne(obj)
        } catch (error) {
            throw new Error(`${error}`)
        }
    }


    async getFiltered(obj, category, page) {
        try {
            const products = await this.model.find(obj)
                .where('category')
                .in(category)
                .skip(page * 4)
                .limit(4)
            const pages = await this.model.find(obj)
                .where('category')
                .in(category)
                .count()

            return {products, pages}
        } catch (error) {
            throw new Error(error)
        }
    }

    async getFiltered2(state, page) {
        try {
            const orders = await this.model.find()
                .where('state')
                .in(state)
                .skip(page * 4)
                .limit(4)
                .sort({createdAt: -1})
            const pages = await this.model.find()
                .where('state')
                .in(state)
                .count()

            return {orders, pages}
        } catch (error) {
            throw new Error(error)
        }
    }

    async save(item) {
        const newModel = new this.model(item)
        try {
            return await newModel.save()
        } catch (error) {
            throw new Error(`${error}`)
        }
    }

    async getById(id) {
        try {
            return await this.model.findById(id)
        } catch (error) {
            throw new Error(error)
        }
    }


    async updateById(id, body) {
        try {
            return await this.model.findByIdAndUpdate(
                id,
                { $set: body },
                { new: true }
            )
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteById(id) {
        try {
            await this.model.findByIdAndDelete(id)
        } catch (error) {
            throw new Error(error)
        }
    }

}

export default ContainerMongodb
