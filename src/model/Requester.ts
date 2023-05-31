export default abstract class Requester {
    abstract count();

    abstract get(search: string): Promise<string[]>;
}
