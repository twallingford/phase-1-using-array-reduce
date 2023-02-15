const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(accumulator, batch){
    console.log("Accumulator: " + accumulator);
    console.log("Batch: " + batch);
    return accumulator + batch;
})