/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/
class Todo {
  constructor() {
    this.todos = [];
  }

  // Add todo to the list of todos
  add(todo) {
    this.todos.push(todo);
  }

  // Remove todo from the list of todos
  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    }
  }

  // Update todo at the given index
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  // Get all todos
  getAll() {
    return this.todos;
  }

  // Get todo at the given index
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    }
    return null;
  }

  // Delete all todos
  clear() {
    this.todos = [];
  }
}

// Example usage:
const myTodoList = new Todo();

myTodoList.add("Buy groceries");
myTodoList.add("Read a book");
myTodoList.add("Exercise");

console.log("All todos:", myTodoList.getAll());

myTodoList.update(1, "Read a different book");
console.log("Updated todo at index 1:", myTodoList.get(1));

myTodoList.remove(0);
console.log("After removing todo at index 0:", myTodoList.getAll());

myTodoList.clear();
console.log("After clearing all todos:", myTodoList.getAll());
