var people = ['Greg', 'Mary', 'Devon', 'James'];

// 1. Using a loop, iterate through this array and console.log all of the people.
people.forEach(function(item, index, array) {
    console.log("1.=>"+item);
  });

// 2. Write the command to remove "Greg" from the array.
people.shift();
console.log("2.=>"+people);

// 3. Write the command to remove "James" from the array.
people.pop();
console.log("3.=>"+people);
// 4. Write the command to add "Matt" to the front of the array.
people.unshift("Matt");
console.log("4.=>"+people);
// 5. Write the command to add your name to the end of the array.
people.push("J");
console.log("5.=>"+people);
// 6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for(var i =0; i< people.length; i++){
    if(i > 1){
        break;
    }
    console.log("6.=>"+people[i]);
}

// 7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
var ck=people.slice(2);
console.log("7.=>"+ck);
// 8. Write the command that gives the indexOf where "Mary" is located.
var ck1=people.indexOf("Mary");
console.log("8.=>"+ck1);
// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
var ck2=people.indexOf("Foo");
console.log("9.=>"+ck2);
// 10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
var people = ["Greg", "Mary", "Devon", "James"];

people.splice(2,1,"Elizabeth", "Artie");
console.log("10.=>"+people);