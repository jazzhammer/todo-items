export default function buildMakeTodoItem() {
    return function makeTodoItem({
        id,
        name,
        isComplete
    }={}) {
        if (!validId(id)) {
            throw new Error('TodoItem must have valid id');
        }
        if (!validName(name)) {
            throw new Error('TodoItem must have valid name');
        }
        if (!validIsComplete(isComplete)) {
            throw new Error('TodoItem must have valid isComplete');
        }
        // todo: do more sanitization here or is expressApp.use(sanitize.middleware) enough;
        return Object.freeze({
            getId: () => id,
            getName: () => name,
            getIsComplete: () => isComplete
        });
    }

    function validId(source) {
        return source && source.trim().length > 0;
    }
    function validName(source) {
        return source && source.trim().length > 0;
    }
    function validIsComplete(source) {
        return typeof source === 'boolean';
    }

}
