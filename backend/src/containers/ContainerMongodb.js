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

    async getFiltered(obj, category, page) {
        try {
            return await this.model.find(obj)
            .where('categoria')
            .in(category)
            .skip(page * 4)
            .limit(4)
        } catch (error) {
            throw new Error(error)
        }
    }

    async getCount(arr) {
        try {
            return await this.model.find({})
            .where('_id')
            .in(arr)
            .count()
        } catch (error) {
            throw new Error(error)
        }
    }

    async getPages(obj, category, page) {
        try {
            return await this.model.find(obj)
            .where('categoria')
            .in(category)
            .count()
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
    
    async updateAllPrices(num) {
        try {
            // return await this.model.updateMany(
            //     {},
            //     { $set: {precio: num} },
            //     { new: true }
            // )
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

    signin = async (data) => {
        const user = await this.model.findOne({ 'email': data.email })
        if (!user) {
            throw new Error('No se encontro ningun usuario con ese email')
        } else if (typeof data.password === 'undefined' || !user.comparePassword(data.password) ){
            throw new Error('Contraseña incorrecta')
        } else {
            return user
        }
    }

    signin2 = async (data) => {
        const user = await this.model.findOne({ 'email': data.email })
        if (!user) {
            throw new Error('No se encontro ningun usuario con ese email')
        } else if (typeof data.password === 'undefined' || user.password !== data.password){
            throw new Error('Contraseña incorrecta')
        } else {
            return user
        }
    }
}

export default ContainerMongodb
