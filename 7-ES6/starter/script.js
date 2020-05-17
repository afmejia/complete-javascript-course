//class Park {
//    constructor(name, buildYear, trees, area) {
//        this.name = name;
//        this.buildYear = buildYear;
//        this.trees = trees;
//        this.area = area;
//    }
//
//    calcDensity() {
//        const density = this.trees / this.area;
//        return density;
//    }
//}
//
//class Street {
//    constructor(name, buildYear, length) {
//        this.name = name;
//        this.buildYear = buildYear;
//        this.length = length
//    }
//}
//
//class Report {
//    constructor() {}
//
//    static printParksReport(parks, calculateAvgAge) {
//        console.log(`-----PARKS REPORT----`);
//
//        // Avg age
//        console.log(`Our ${parks.length} parks have an average of ${calculateAvgAge(parks)} years`)
//
//        // Tree density
//        for (const park of parks) {
//            console.log(`${park.name} has a tree density of ${park.calcDensity()} per square km`);
//        }
//
//        // Park with more than 1000 threes
//        const mostTrees = parks.find((cur) => cur.trees >= 1000);
//        console.log(`${mostTrees.name} has more than 1000 trees`);
//
//    }
//
//    static printStreetsReport(streets, classify) {
//        console.log(`-----STREETS REPORT----`)
//
//        // Total and average lengths
//        let totalLength = 0;
//        for (const street of streets) {
//            totalLength += street.length;
//        }
//        console.log(`Our ${streets.length} streets have a total length of ${totalLength} km, with an average of ${totalLength / streets.length} km.`)
//
//        // Classify Streets
//        classify(streets);
//
//    }
//}
//
//{
//    // Create parks and trees
//    const parks = [new Park("Green Park", 1920, 4, 190), new Park("National Park", 1930, 1001, 200), new Park("Oak Park", 1930, 350, 200)];
//    const streets = [new Street("Ocean Avenue", 1810, 300), new Street("Evergreen Street", 1820, 150), new Street("4th Street", 1930, 200), new Street("Sunset Boulevard", 1982, 2000)];
//
//    // Print report
//    Report.printParksReport(parks, (arr) => {
//        let sumAges = 0;
//
//        for (const elem of arr) {
//            const now = new Date().getFullYear();
//            const age = now - elem.buildYear;
//            sumAges += age;
//        }
//
//        return sumAges / arr.length;
//    });
//
//    Report.printStreetsReport(streets, (arr) => {
//        let streetClassification;
//
//        for (const street of arr) {
//            if (street.length <= 10) {
//                streetClassification = "tiny street"
//            } else if (street.length <= 30) {
//                streetClassification = "small street"
//            } else if (street.length <= 100) {
//                streetClassification = "normal street"
//            } else if (street.length <= 500) {
//                streetClassification = "big street"
//            } else {
//                streetClassification = "huge street"
//            }
//
//            console.log(`${street.name}, built in ${street.buildYear} is a ${streetClassification}.`)
//        }
//    });
//
//}

// Instructor's solution
class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Park("Green Park", 1987, 0.2, 215), new Park("National Park", 1894, 2.9, 3541), new Park("Oak Park", 1953, 0.4, 949)];

const allStreets = [new Street("Ocean Avenue", 1999, 1.1, 4), new Street("Evergreen Street", 2008, 2.7, 2), new Street("4th street", 2015, 0.8), new Street("Sunset Boulevard", 1982, 2.5, 5)];

function calc(arr) {
    
    const sum = arr.reduce((prev, curr, index) => prev + curr, 0);
    
    return [sum, sum / arr.length];
}

function reportParks(p) {

    console.log("-----PARKS REPORT-----");

    // Density
    p.forEach(el => el.treeDensity());

    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} have an average age of ${avgAge} years.`);
    
    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`)
}

function reportStreets(s) {
    
    console.log("-----STREETS REPORT-----");
    
    // Total and average length of the town's streets
    const [total, avgLength] = calc(s.map(el => el.length));
    console.log(`Our  ${s.length} streets have a total length of ${total} km with an average of ${avgLength} km.`)
    
    // Classify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);