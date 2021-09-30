import { v4 as uuid} from 'uuid';


export default async function fetchAllItems() {
    // TODO: send instruction to BE to get all items persisted

    console.error("fetchAllItems() IS NOT YET IMPLEMENTED")

    // Returning a sample of the expected schema
    return [{
        id: uuid(),
        name: "Sample item",
        isComplete: false,
    }]
}