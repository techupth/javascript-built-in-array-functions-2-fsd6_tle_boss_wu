let crimeRecordNames = ["Theodora Milenko", "Tinashe Benigno", "Mahalia Priyanka", "Maisy Sudhir"];

function searchCrimeRecord(name) {
  return crimeRecordNames.includes(name) ? `"${name}  has  crime record !!!`: `${name}  has no crime record`;
}

console.log(searchCrimeRecord("Dilan Sandra")); //"Dilan Sandra has no crime record"

console.log(searchCrimeRecord("Tinashe Benigno")); //"Tinashe Benigno has crime record !!!"