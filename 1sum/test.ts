

let nums = [3,2,4]
let target = 6

function twoSumOpt(nums: number[], target: number){
        const hashMap: Record<number, number> = {}
    
        for (let i = 0; i < nums.length; i++) {
            if((target - nums[i]) in hashMap) {
                return [hashMap[target-nums[i]], i]
            }
            hashMap[nums[i]] = i
        }
    
};

console.log("Solution",twoSumOpt(nums,target))