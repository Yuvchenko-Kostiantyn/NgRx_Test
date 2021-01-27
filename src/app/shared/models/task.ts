import { StringDecoder } from "string_decoder";

export interface ITask {
    id: number,
    title: string,
    description: string,
    created_by: number,
    assignee: number
}
