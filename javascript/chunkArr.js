function chunkArray(arr, chunk){
    let chunkedArray = []

    while (arr.length > 0){
        const smallChunk = []
        while (smallChunk.length < chunk && arr.length > 0){
                smallChunk.push(arr.shift())
        }
        chunkedArray.push(smallChunk)
    }
    return chunkedArray
}

console.log(chunkArray([1,2,3,4,5,6,6,6,6,6], 3))