/**
 *
 * Class that represents a user
 *
 **/

class User {
  constructor(id, name, phone_number, birth_date, role) {
    this.id = id;
    this.name = name;
    this.phone_number = phone_number;
    this.birth_date = birth_date;
  }
  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getPhoneNumber() {
    return this.phone_number;
  }

  getBirthDate() {
    return this.birth_date;
  }
}
