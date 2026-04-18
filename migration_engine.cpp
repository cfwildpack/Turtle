#include <iostream>
using namespace std;

class MigrationEngine {
public:
    void simulateMigration(int distance) {
        cout << "Simulating turtle migration for "
             << distance << " km." << endl;
    }
};

int main() {
    MigrationEngine engine;
    engine.simulateMigration(2500);
    return 0;
}
