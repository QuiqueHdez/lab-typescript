var array = [];
var addTask = function (task) {
    array.push(task);
    console.log("=========== NEW TASK ===========");
    console.log("Task \"" + task + "\" inserted in the list");
    return array.length;
};
var listAllTasks = function () {
    console.log("This are all the tasks:");
    array.forEach(function (e) {
        console.log(e);
    });
};
var deleteTask = function (task) {
    var index = array.indexOf(task);
    array.splice(index, 1);
    console.log("=========== TASK REMOVED ===========");
    console.log("Task " + task + " removed from the list");
    return array.length;
};
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
