export default function makeGetTodoItems(findTodoItems) {
    return async function getTodoItems(httpRequest) {
        const founds = await findTodoItems();
        return {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: 201,
            body: founds
        }
    }
}
