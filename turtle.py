class Turtle:
    def __init__(self, name, energy=100):
        self.name = name
        self.energy = energy
        self.distance_traveled = 0

    def swim(self, km):
        energy_used = km * 2
        if self.energy >= energy_used:
            self.distance_traveled += km
            self.energy -= energy_used
            print(f"{self.name} swam {km} km.")
        else:
            print("Not enough energy.")

    def status(self):
        print(f"Distance traveled: {self.distance_traveled} km")
        print(f"Energy level: {self.energy}")

if __name__ == "__main__":
    turtle = Turtle("Shelly")
    turtle.swim(10)
    turtle.status()
