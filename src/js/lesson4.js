export default {
        components: {
            "app-button": {
                template: `
                <button><slot></slot></button>
                `,
            },
        },
        template: `
        <app-button>Hello</app-button>
        `
}

