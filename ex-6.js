const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  let result;
  if (carCollection.includes(carBrand)) {
    let carIndex;
    carIndex = carCollection.indexOf(carBrand) + 1
    result = `${carBrand} already exists in position ${carIndex} of the car collection.`
  } else {
    carCollection.push(carBrand)
    let newCarCollection = carCollection.join(", ")
    result = `New car collection is: ${newCarCollection}`
  }
  return result
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi"));
//new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota"));
//toyota has already existed in the 1 position of car collection.
