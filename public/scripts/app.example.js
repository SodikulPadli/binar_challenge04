class App {
  constructor() {
    // this.clearButton = document.getElementById("clear-btn");
    // this.loadButton = document.getElementById("load-btn");
    this.filterButton = document.getElementById("filterMobil");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
    this.filterButton.onclick = this.filter;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async filter() {
    const tipeDriver = document.getElementById("tipeDriver").value
    console.log(tipeDriver)
    const tanggalSewa = document.getElementById("tanggal").value
    console.log(tanggalSewa)
    const waktuSewa = document.getElementById("waktu").value
    console.log(waktuSewa)
    const jmlPenumpang = document.getElementById("penumpang").value
    console.log(jmlPenumpang)
    const cars = await Binar.listCars((e) => {
      // tambahkan fungsi filter
      if (e.typeDriver === tipeDriver && e.capacity >= jmlPenumpang || e.availableAt===tanggalSewa || e.availableAt===waktuSewa)
      {
      return true; 
      }
      return false;
    });
    Car.init(cars);
    document.getElementById("cars-container").innerHTML = ''
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      document.getElementById("cars-container").appendChild(node);
    });
  }

  async load(filter) {
    const cars = await Binar.listCars(filter);
    Car.init(cars);
  }

  // clear = () => {
  //   let child = this.carContainerElement.firstElementChild;

  //   while (child) {
  //     child.remove();
  //     child = this.carContainerElement.firstElementChild;
  //   }
  // };
}
