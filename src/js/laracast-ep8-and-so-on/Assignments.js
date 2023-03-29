import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template: `
    <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>

    <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

    <assignment-create @add="add"></assignment-create>
    `,

    data() {
        return {
            assignments: [
                { name: 'task1', complete: false, id: 1},
                { name: 'task2', complete: false, id: 2},
                { name: 'task3', complete: false, id: 3},
            ],
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    },
    
    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            });
        }
    }
}