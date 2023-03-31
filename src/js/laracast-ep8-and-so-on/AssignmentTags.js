export default {
    template: `
    <div>
        <button
        @click="$emit('update:currentTag', tag)" 
        v-for="tag in tags">
        {{ tag }}</button>
    </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String 
    },


    computed: {
        tags() {
            return ["all", ...new Set(this.initialTags)];
        }
    }
}