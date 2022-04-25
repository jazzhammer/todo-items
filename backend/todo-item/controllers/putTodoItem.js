export default function makePutTodoItem(updateTodoItem) {
    return async function putTodoItem(httpRequest) {
        const puted = await updateTodoItem(httpRequest.params.id, httpRequest.body);
        return {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: 201,
            body: puted
        }
    }
}
