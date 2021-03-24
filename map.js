let userMap = new Map();
userMap.set(1,"John Smith");  // key is number and value is string
userMap.set("lastName","Smith"); // key is string and value is string
userMap.set(true,"Married"); // key is boolean and value is string

// Note: In Js object keys are always string value on the other hand in map keys can be any type 

console.log("key 1:" , userMap.get(1));
console.log("key true:", userMap.get(true));
console.log("key lastName:", userMap.get("lastName"));

console.log(userMap);
console.log(userMap.entries());

// only keys 
console.log(userMap.keys());

// iteration over map
for(let key of userMap.keys()){
    console.log("Key : "+key + " , value :"+userMap.get(key));
}