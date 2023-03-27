export default {
    data() {
        return {
            greeting: "hello world"
        };
    },

    mounted() {
        setTimeout(() => {
            // alert("done loaded");
            this.greeting = "changed";
        }, 1000);
    },
    template: `
    <input type="text" v-model="greeting" />
                
    <p>
        {{ greeting }} ({{ greeting.length }})
    </p>
    `
}