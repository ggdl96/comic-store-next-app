export default abstract class Requester {
    abstract count(): Promise<number>;

    abstract get(search: string): Promise<string[]>;
}
