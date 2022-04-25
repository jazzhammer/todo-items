export default function makePostTodoItem(createTodoItem) {
    return async function postTodoItem(httpRequest) {
        const posted = await createTodoItem(httpRequest.body);
        return {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: 201,
            body: posted
        }
    }
}
