export default {
    template: `
    <form @submit.prevent="add">
        <div>
            <input v-model="newAssignment" placeholder="i.e new assignment"/>
            <input type="submit" value="add"/>
        </div>
    </form>
    `,



    data() {
        return {
            newAssignment: ""
        }
    },

    methods: {
        add() {
            this.$emit("add", this.newAssignment);

            this.assignment= "";
        }
    }
}