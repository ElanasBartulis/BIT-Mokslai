async function main() {
  const promise = await fetch(
    "https://randomuser.me/api/?results=100&nat=gb,au,us"
  );
  const resp = await promise.json();
  const peopleArray = resp.results;
  const parsedPeopleArray = peopleArray.map((personObj) => ({
    firstName: personObj.name.first,
    lastName: personObj.name.last,
    country: personObj.location.country,
    city: personObj.location.city,
    email: personObj.email,
    dateOfBirth: personObj.dob.date,
    phone: personObj.phone,
    nat: personObj.nat,
  }));

  parsedPeopleArray.sort((personA, personB) => {
    const personAName = personA.firstName; // Abby
    const personBName = personB.firstName; // Simon

    if (personAName > personBName) return 1; // Simon, Abby
    if (personAName < personBName) return -1; // Abby, Simon
    return 0;
  });

  console.log(parsedPeopleArray);
}

main();

// {
// "firstName": "Erin",  "lastName": "Alvarez",
// "country": "United Kingdom",
// "city": "Salford",
// "email": "erin.alvarez@example.com",
// "dateOfBirth": "1972-07-16T00:44:15.079Z",
// "phone": "016974 92836",  "nat": "GB"
// }
