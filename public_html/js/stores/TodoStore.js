import { EventEmitter } from "events";

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [{
            id: 31631321,
            text: "Some sample text"
        }, {
            id: 2321321,
            text: "test data update"
        }];
    }

    createTodo(text) {
        const id = Date.now();
        console.log(text);
        this.todos.push({
            id,
            text
        });
        this.emit("change");
    }

    getAllTodos() {
        return this.todos;
    }

    handleAction(action) {
        console.log("TodoStore handle action " + action.type);
        switch (action.type) {
            case "CREATE_TODO":{
            	 this.createTodo(action.text);
            }
        }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleAction.bind(todoStore));

window.dispatcher = dispatcher;

export default todoStore;
