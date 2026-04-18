class HabitatTracker {
    constructor() {
        this.records = [];
    }

    addLocation(location) {
        this.records.push(location);
        console.log("Location recorded: " + location);
    }

    showMigrationPath() {
        console.log("Migration Path:");
        this.records.forEach(l => console.log("- " + l));
    }
}

const tracker = new HabitatTracker();
tracker.addLocation("Coral Reef");
tracker.addLocation("Open Ocean");
tracker.showMigrationPath();
