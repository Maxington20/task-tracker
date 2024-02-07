class Task {
    private id: number;
    private name: string;
    private completed: boolean;
    private status: string;

    constructor(id: number, name: string, completed: boolean, status: string) {
        this.id = id;
        this.name = name;
        this.completed = completed;
        this.status = status;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    isCompleted(): boolean {
        return this.completed;
    }

    markAsCompleted(): void {
        this.completed = true;
    }
}