const carsData = [
  { id: 1, name: "Toyota Camry", year: 2022, color: "White", price: "$25,000", engine: "2.5L 4-Cylinder", mileage: "30,000 miles", fuelEfficiency: "28 MPG", description: "A reliable sedan with great fuel economy." },
  { id: 2, name: "Audi", year: 2021, color: "Black", price: "$22,000", engine: "2.0L 4-Cylinder", mileage: "25,000 miles", fuelEfficiency: "32 MPG", description: "Compact, sporty, and fuel-efficient." },
  { id: 3, name: "Ford Mustang", year: 2023, color: "Red", price: "$30,000", engine: "5.0L V8", mileage: "10,000 miles", fuelEfficiency: "20 MPG", description: "An American muscle car with thrilling performance." },
  { id: 4, name: "Chevrolet Malibu", year: 2020, color: "Silver", price: "$20,000", engine: "1.5L 4-Cylinder", mileage: "40,000 miles", fuelEfficiency: "27 MPG", description: "A comfortable family sedan with modern tech." },
  { id: 5, name: "Nissan Altima", year: 2022, color: "Blue", price: "$24,000", engine: "2.5L 4-Cylinder", mileage: "20,000 miles", fuelEfficiency: "29 MPG", description: "Spacious and comfortable with great safety features." },
  { id: 6, name: "BMW 3 Series", year: 2023, color: "Black", price: "$40,000", engine: "2.0L Turbocharged 4-Cylinder", mileage: "5,000 miles", fuelEfficiency: "25 MPG", description: "Luxury sedan with impressive performance and features." },
  { id: 7, name: "Audi A4", year: 2022, color: "Gray", price: "$42,000", engine: "2.0L Turbocharged 4-Cylinder", mileage: "15,000 miles", fuelEfficiency: "24 MPG", description: "A luxury compact sedan with advanced technology." },
  { id: 8, name: "Hyundai Sonata", year: 2021, color: "White", price: "$23,000", engine: "2.5L 4-Cylinder", mileage: "30,000 miles", fuelEfficiency: "27 MPG", description: "A stylish sedan with an affordable price tag." },
  { id: 9, name: "Kia K5", year: 2023, color: "Red", price: "$26,000", engine: "1.6L Turbocharged 4-Cylinder", mileage: "12,000 miles", fuelEfficiency: "30 MPG", description: "Sporty and modern sedan with excellent tech features." }
];

const carsContainer = document.getElementById("cars-container");
const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.querySelector(".search-box");
const navbar = document.querySelector(".navbar");
const carsSection = document.getElementById("cars");

function displayCars(cars) {
  carsContainer.innerHTML = '';
  cars.forEach(car => {
    const carBox = document.createElement("div");
    carBox.classList.add("box");
    carBox.innerHTML = `
      <img src="car${car.id}.jpg" alt="${car.name}">
      <h2> <a href="../Cardetails/index.html" class="details">View Details</a> </h2>
           
    `;
    carsContainer.appendChild(carBox);
  });

  // Add event listeners for 'View Details'

}

displayCars(carsData);

// Search Icon Click
searchIcon.onclick = () => {
  searchBox.classList.toggle('active');
  navbar.classList.remove('active');
  searchInput.focus();
};

// Mobile Menu Toggle
const menu = document.querySelector('#menu-icon');
menu.onclick = () => {
  navbar.classList.toggle('active');
  searchBox.classList.remove('active');
};

// Scroll Behavior
window.onscroll = () => {
  navbar.classList.remove('active');
  searchBox.classList.remove('active');
};

// Search Filtering
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filteredCars = carsData.filter(car => car.name.toLowerCase().includes(query));
  displayCars(filteredCars);
  carsSection.scrollIntoView({ behavior: "smooth" });
});

const categoryButtons = document.querySelectorAll(".categories button");

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedValue = button.value;
  
    filterCarsByBrand(selectedValue);
  });
});


function filterCarsByBrand(brand) {
  if (brand === "All") {
    displayCars(carsData);
  } else {
    const filtered = carsData.filter(car => car.name.toLowerCase().includes(brand.toLowerCase()));
    displayCars(filtered);
  }
}