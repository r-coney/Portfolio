type NonRequiredValue = string | undefined;

export class User {
  private readonly _id: string;
  private _firstName: string;
  private _lastName: string;
  private _role: string;
  private _profile: string;
  private _mailAddress: string;
  private _x: string;

  constructor(
    id: NonRequiredValue,
    firstName: NonRequiredValue,
    lastName: NonRequiredValue,
    role: NonRequiredValue,
    profile: NonRequiredValue,
    mailAddress: NonRequiredValue,
    x: NonRequiredValue
  ) {
    if (id === undefined) {
      throw new Error("ID is required.");
    }

    if (firstName === undefined || firstName.length < 1) {
      throw new Error("fistName is required.");
    }
    if (firstName.length > 100) {
      throw new Error(
        "firstNames can only be registered up to 100 characters."
      );
    }

    if (lastName === undefined || lastName.length < 1) {
      throw new Error("lastName is required.");
    }
    if (lastName.length > 100) {
      throw new Error("lastNames can only be registered up to 100 characters.");
    }

    if (role === undefined || role.length < 1) {
      throw new Error("role is required");
    }
    if (role.length > 100) {
      throw new Error("roles can only be registered up to 100 characters.");
    }

    if (profile === undefined || profile.length < 1) {
      throw new Error("profile is required");
    }
    if (profile.length > 1000) {
      throw new Error("profile can only be registered up to 1000 characters.");
    }

    if (mailAddress === undefined || mailAddress.length < 1) {
      throw new Error("mailAddress is required");
    }
    if (mailAddress.length > 1000) {
      throw new Error(
        "mailAddress can only be registered up to 1000 characters."
      );
    }

    if (x === undefined || x.length < 1) {
      throw new Error("x is required");
    }
    if (x.length > 1000) {
      throw new Error("x can only be registered up to 1000 characters.");
    }

    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._role = role;
    this._profile = profile;
    this._mailAddress = mailAddress;
    this._x = x;
  }

  static createId(): string {
    // u(userの頭文字) + UUID
    return `u${crypto.randomUUID()}`;
  }

  get id(): string {
    return this._id;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  get role(): string {
    return this._role;
  }

  get profile(): string {
    return this._profile;
  }

  get mailAddress(): string {
    return this._mailAddress;
  }

  get x(): string {
    return this._x;
  }
}
