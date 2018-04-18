export class Todo {
    id: number;
    title: string = '';
    complete: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

// private newTodo;
// addTodo(){
//   this.todoService.add({ title: this.newTodo, isDone: false }).then(() => {
//     return this.getTodos();
//   }).then(() => {
//     this.newTodo = ''; // clear input form value
//   });
// }