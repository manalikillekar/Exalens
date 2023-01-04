function apartmentHunting(blocks,reqs){
    let minDist = reqs.map((item) => getMinDist(item,blocks))
  // console.log(minDistanceToReqs)
    let maxDist = getmaxDist(minDist, reqs, blocks)
    return maxDist.indexOf(Math.min(...maxDist))
}

//get minimum distance
function getMinDist(item, blocks){
    let result = blocks.map((el) => Infinity)
    let currClose = Infinity
    for(let i = 0; i < blocks.length; i++){
      let currBlock = blocks[i]
      if(currBlock[item]) currClose = i
      result[i] = Math.abs(currClose - i)
    }
    
    for(let j = blocks.length - 2; j >= 0; j--){
      let currBlock = blocks[j]
      if(currBlock[item]) currClose = j
      result[j] = Math.min(result[j], Math.abs(currClose - j))
    }
    return result
  }
  
//get maximum distance
function getmaxDist(arr,reqs, blocks){
let maxDist = []
for(let i = 0; i < blocks.length; i++){
    let currDist = -Infinity
    for(let j = 0; j < arr.length; j++){
        currDist = Math.max(currDist, arr[j][i])
    }
    
    maxDist[i] = currDist
}
return maxDist
}

let blocks=[ { "gym": false, "school": true, "store": false, }, { "gym": true, "school": false, "store": false, }, { "gym": true, "school": true, "store": false, }, { "gym": false, "school": true, "store": false, }, { "gym": false, "school": true, "store": true, }];
let requirements=["gym","school","store"];
console.log(apartmentHunting(blocks,requirements));
exports.apartmentHunting=apartmentHunting;