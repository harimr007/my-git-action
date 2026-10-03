// 1. Interface for Type Safety
interface User {
    id: number;
    name: string;
    role: "admin" | "user" | "guest"; // Union type
    email?: string;                    // Optional property
}

// 2. Class Definition with TypeScript Features
class AccountManager {
    // Private property restricted to this class
    private users: User[] = [];

    // Method with typed parameters and a typed return value
    public addUser(newUser: User): void {
        this.users.push(newUser);
        console.log(`User ${newUser.name} added successfully.`);
    }

    // Method returning a specific type or undefined
    public getUserById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }
}

// 3. Reusable Generic Function
function getFirstElement<T>(array: T[]): T {
    return array[0];
}

// --- Execution & Testing ---

const manager = new AccountManager();

// Create an object that satisfies the User interface
const adminUser: User = {
    id: 1,
    name: "Alice",
    role: "admin",
    email: "alice@example.com"
};

manager.addUser(adminUser);

// Retrieve and use a user object
const retrievedUser = manager.getUserById(1);
if (retrievedUser) {
    // TypeScript knows retrievedUser is an object with a name property
    console.log(`Found: ${retrievedUser.name}`); 
}

// Test the generic function
const idNumbers = [10, 20, 30];
const firstId = getFirstElement(idNumbers); // Inferred as type: number
