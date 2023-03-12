class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
    typeDriver
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
    this.typeDriver = typeDriver;
  }

  render() {
    return `
    <div class="container">
          <div class="row mt-4 g-4">
            <div class="col-md-6 col-lg-4">
              <div class="card">
                <div class="card-body">
                  <img class="img-fluid" src="${this.image}" alt="${this.manufacture}">
                  <h4><b>${this.manufacture}</b> (<b>${this.model}</b>)</h4>
                  <h3><b>Rp. ${this.rentPerDay} / Hari</b></h3>
                  <p>Plat Nomer: <b>${this.plate}</b></p>
                  <p>Tipe Driver: <b>${this.typeDriver}</b></p>
                  <p><b>${this.description}</b></p>
                  <p>Kapasitas : <b>${this.capacity}</b></p>
                  <p>Transmisi : <b>${this.transmission}</b></p>
                  <p>Tahun : <b>${this.year}</b></p>
                  
                  <button class="btn-fluid btn btn-success">
                  Pilih Mobil
                  </button>
                </div>
              </div>
            </div>
            
            <div class="col-md-6 col-lg-4">
              <div class="card">
                <div class="card-body">
                  <img class="img-fluid" src="${this.image}" alt="${this.manufacture}">
                  <h4><b>${this.manufacture}</b> (<b>${this.model}</b>)</h4>
                  <h3><b>Rp. ${this.rentPerDay} / Hari</b></h3>
                  <p>Plat Nomer: <b>${this.plate}</b></p>
                  <p>Tipe Driver: <b>${this.typeDriver}</b></p>
                  <p><b>${this.description}</b></p>
                  <p>Kapasitas : <b>${this.capacity}</b></p>
                  <p>Transmisi : <b>${this.transmission}</b></p>
                  <p>Tahun : <b>${this.year}</b></p>
                  
                  <button class="btn-fluid btn btn-success">
                  Pilih Mobil
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="card">
                <div class="card-body">
                  <img class="img-fluid" src="${this.image}" alt="${this.manufacture}">
                  <h4><b>${this.manufacture}</b> (<b>${this.model}</b>)</h4>
                  <h3><b>Rp. ${this.rentPerDay} / Hari</b></h3>
                  <p>Plat Nomer: <b>${this.plate}</b></p>
                  <p>Tipe Driver: <b>${this.typeDriver}</b></p>
                  <p><b>${this.description}</b></p>
                  <p>Kapasitas : <b>${this.capacity}</b></p>
                  <p>Transmisi : <b>${this.transmission}</b></p>
                  <p>Tahun : <b>${this.year}</b></p>
                  <button class="btn-fluid btn btn-success">
                  Pilih Mobil
                  </button>
                </div>
              </div>
            </div>
    </div>`;
  }
}