export default {
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
    },
    template: `
    <section v-show="inProgressAssignments.length">
        <h2>Assignments</h2>
        <ul>
            <li 
                v-for="assignment in inProgressAssignments"
                :key="assignment.id"
            >
                <label>
                    {{ assignment.name }}

                    <input type="checkbox" v-model="assignment.complete"/>
                </label>
            </li>                     
        </ul>
        <!--
        <pre>
            {{ assignments }}
        </pre>
        -->                    
    </section>

    <section v-show="completedAssignments.length">
        <h2>Assignments completion status</h2>
        <ul>
            <!-- the letter a represents an element or an item -->
            <li 
                v-for="assignment in assignments.filter(a => a.complete)" 
                :key="assignment.id"
            >
                <label>
                    {{ assignment.name }}

                    <input type="checkbox" v-model="assignment.complete"/>
                </label>
            </li>                     
        </ul>
        <!--
        <pre>
            {{ assignments }}
        </pre>
        -->                    
    </section>
    `
}