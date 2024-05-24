const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
    const carBrandName = carBrand.toLowerCase();
    if (carCollection.includes(carBrandName)) {
        const carIndex = carCollection.indexOf(carBrandName) + 1;
        return `${carBrand} already existed in position ${carIndex} of car collection`
    } else {
            carCollection.push(carBrandName);
                return `New Carcollection is ${carCollection}`;
            }
    }




//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("Audi"));

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota"));