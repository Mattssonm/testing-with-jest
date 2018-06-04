export function canGetLicense(license, age) {
  let allowedLicenses = [];
  let arrayOfLicenses = ["B", "BE", "C", "A", "D"]

  //check if the params is the correct type
  if (typeof license !== "string" && typeof age !== "number") {
    throw "License must be a string and age must be a number";

  //check if license has a valid parameter
  } else if (!arrayOfLicenses.includes(license)) {
    throw "License must be B, BE, C, A or D"

  //check limit values on age
  } else if (age > 120 || age < 0) {
    throw "Age has to be a number equal to or between 0 and 120";


  //else everything is ok, run program
  } else {
    if (age < 18) {
      return false;
    } else if (age < 21) {
      allowedLicenses.push("B", "BE");
    } else if (age < 24) {
      allowedLicenses.push("B", "BE", "C");
    } else {
      allowedLicenses.push("B", "BE", "C", "A", "D");
    }
    return allowedLicenses.includes(license);
  }
}

/*Instructions (swedish):
canGetLicense(license, age) är en funktion som svarar på frågan: är jag
tillräckligt gammal för att ta ett körkort av en viss typ?
Om båda parametrarna har tillåtna värden så ska funktionen
returnera antingen true eller false. Annars ska funktionen
kasta ett Error med throw. Tillåtna värden på license är alla
strängar som matchar en licenstyp i tabellen nedan.
Tillåtna värden på age är alla åldrar som är ett Number i
intervallet 0 <= x <= 120.

Licenstyp - Lägsta ålder
A         -     24
B, BE     -     18
C         -     21
D         -     24

*/
