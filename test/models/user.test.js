const User = require('./../../app/models/user')

describe("Unit Tests for User class", () => {

  test('1) Create empty object', () => {
    const user = new User()
    expect(user.id).toBeUndefined()
    expect(user.username).toBeUndefined()
    expect(user.name).toBeUndefined()
    expect(user.bio).toBeUndefined()
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdated).not.toBeUndefined()
  })

	test('2) Create an User object', () => {
    const user = new User(4, "moiseshdz", "Moises", "Hernandez")
		expect(user.id).toBe(4)
		expect(user.username).toBe("moiseshdz")
		expect(user.name).toBe("Moises")
		expect(user.bio).toBe("Hernandez")
	});

	test('3) Add getters', () => {
    const user = new User(10, "moiseshdz", "Moises", "Hernandez")
		expect(user.getUsername).toBe("moiseshdz")
		expect(user.getBio).toBe("Hernandez")
    expect(user.getDateCreated).not.toBeUndefined()
    expect(user.getLastUpdated).not.toBeUndefined()
	});

	test('4) Add setters', () => {
    const user = new User(10, "moiseshdz", "Moises", "Hernandez")
    user.setUsername = "Del toro"
		expect(user.username).toBe("Del toro")

    user.setBio = "New bio"
		expect(user.bio).toBe("New bio")
	});

})
