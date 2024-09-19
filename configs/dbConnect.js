module.exports = async () => {
    try {
        await require('mongoose')
            .connect(process.env.MONGO_URL)
        console.log('Yey connected!')
    } catch (e) {
        console.log('Failed to connect: ')
    }
}