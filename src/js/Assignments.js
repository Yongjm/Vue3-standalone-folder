import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },


    template: `
    <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>

    <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>
    `,

    data() {
        return {
            assignments: [
                { name: 'task1', complete: false, id: 1},
                { name: 'task2', complete: false, id: 2},
                { name: 'task3', complete: false, id: 3},
            ]
        }
    },

    computed: {
        inProgressAssignments() {
            return this.assignments.filter(assignment => ! assignment.complete);
        },

        completedAssignments() {
            return this.assignments.filter(assignment => assignment.complete);
        }
    }
}