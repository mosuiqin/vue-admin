export const readTXT = async (url) => {
    let data = {
        x: [],
        y: []
    }
    let resMesh = await fetch(url).then(res => res.text())
    let pointRows = resMesh.split("\r\n");
    for (let i = 1; i < pointRows.length - 1; i++) {
        let point = pointRows[i];
        data.x.push(i)
        data.y.push(parseInt(point))

    }
    return data
}