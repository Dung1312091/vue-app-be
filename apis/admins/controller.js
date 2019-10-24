async function getList(req, res) {
    try {
        let data = [];
        for (let i = 1; i < 11; i++) {
            data.push({
                id: i,
                name: `Admin ${i}`,
                email: `admin${i}@gmail.com`,
                phone: `0355538539${i}`,
                status: !!i % 2,
                created: new Date()
            })
        }
        console.log("data", data)
        return res.success(
            data

        );
    } catch (e) {
        return res.error(e);

    }

}
export {
    getList
}