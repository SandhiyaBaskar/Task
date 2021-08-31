export default class Storage {
  static AppendStoarage(key, value) {
    let existingStorage = this.ReadStorage(key);
    existingStorage.push(value);
    localStorage.setItem(key, JSON.stringify(existingStorage));
  }
  static ReadStorage(key) {
    let existingStorage = JSON.parse(localStorage.getItem(key)) || [];
    return existingStorage;
  }
  static CheckData(key, email, password) {
    let existingStorage = this.ReadStorage(key);
    var matches = existingStorage.filter(function (x) {
      return x.email === email && x.password === password;
    });
    return matches;
  }
  static ReadCustomerData(key, email) {
    let existingStorage = this.ReadStorage(key);
    var matches = existingStorage.filter(function (x) {
      return x.email === email;
    });
    return matches;
  }
}
