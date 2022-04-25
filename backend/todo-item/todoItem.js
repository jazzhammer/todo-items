export default function buildMakeTodoItem() {
    return function makeTodoItem({
        id,
        name
    }={}) {
        if (!validId(id)) {
            throw new Error('TodoItem must have valid id');
        }
        if (!validName(name)) {
            throw new Error('TodoItem must have valid name');
        }
        // todo: do more sanitization here or is expressApp.use(sanitize.middleware) enough;
        return Object.freeze({
            getId : () => id,
            getName : () => name
        });
    }

    function validId(source) {
        return source && source.trim().length > 0;
    }
    function validName(source) {
        return source && source.trim().length > 0;
    }

}
