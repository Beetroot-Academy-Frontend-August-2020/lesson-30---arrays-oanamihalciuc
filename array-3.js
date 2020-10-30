/* 3. Create an array of academy classrooms. A classroom object consists of a name, a number of seats (10 to 20) and the faculty it is meant for. Write a few functions for working with it.
- Display all the classrooms.
- Display all the classrooms for a given faculty.
- Display only the classrooms that would fit a given group. A group object contains a name, the number of students, and the faculty name.
- A function for sorting all the classrooms by number of seats.
- A function for sorting all the classrooms by name in alphabetical order. */


let classrooms = [
    {
        name: 'Mathematics',
        seats: 15,
        faculty: 'Faculty of Sciences',
    }, 
    {
        name: 'Physics',
        seats: 18,
        faculty: 'Faculty of Engineering',
    }, 
    {
        name: 'Mathematics',
        seats: 20,
        faculty: 'Faculty of Engineering',
    }, 
    {
        name: 'Bioengineering',
        seats: 10,
        faculty: 'Faculty of Engineering',
    } 
    ]

// - Display all the classrooms.

console.log(classrooms);

// - Display all the classrooms for a given faculty.

function facultyClassrooms(facultyName) {
    if (this.faculty = facultyName ) {
        console.log(classrooms[]); /* how can I select the specific faculty I want to console.log? */
    } else {
        console.log(classrooms[0]);
    }
}

facultyClassrooms('Faculty of Engineering');


// - Display only the classrooms that would fit a given group. A group object contains a name, the number of students, and the faculty name.
// I don't understand what I have to do...all the object contain a name, nr and faculty.


// - A function for sorting all the classrooms by number of seats.

let sortedSeats = classrooms.sort((a,b) => {
    return a.seats - b.seats;
    }); 

console.log(sortedSeats);

// - A function for sorting all the classrooms by name in alphabetical order. 
// - How come this function works for seats, but not for name? 

let sortedName = classrooms.sort((c,d) => {
    return d.name - c.name;
    }); 

console.log(sortedName);
