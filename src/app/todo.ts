export class Todo {
    id: number;
    title: string = "";
    todoCompleted: boolean = false;
        
    constructor(values: Object = { }) {
        Object.assign(this,values);
    }
}
