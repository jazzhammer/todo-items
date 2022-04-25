export default function makeDeleteTodoItem(removeTodoItem) {
    return async function deleteTodoItem(httpRequest) {
        const deleted = await removeTodoItem(httpRequest.params.id);
        return {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: 201,
            body: deleted
        }
    }
}
