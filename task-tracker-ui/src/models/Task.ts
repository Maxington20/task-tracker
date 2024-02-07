class Task {
    private id: number;
    private name: string;
    private completed: boolean;

    constructor(id: number, name: string, completed: boolean) {
        this.id = id;
        this.name = name;
        this.completed = completed;
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