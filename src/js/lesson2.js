export default {
    data() {
        return {
            active: false
        }; 
    },

    methods: {
        toggle() {
            this.active = ! this.active;
        }
    },
    template: `
    <button :class="active ? 'text-red' : 'text-blue'" @click="toggle">click me</button>
    `
}