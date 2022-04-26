const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {

  test("1. Create a new user using the UserService", () => {
    const user = UserService.create(1, "moiseshdz", "Moises")
    expect(user.username).toBe("moiseshdz")
    expect(user.name).toBe("Moises")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
  })

  test("2. Get all user data in a list", () => {
    const user = UserService.create(1, "moiseshdz", "Moises")
    const userInfoInList = UserService.getInfo(user)
    expect(userInfoInList[0]).toBe(1)
    expect(userInfoInList[1]).toBe("moiseshdz")
    expect(userInfoInList[2]).toBe("Moises")
    expect(userInfoInList[3]).toBe("Sin bio")
  })

  test("3. Update username", () => {
    const user = UserService.create(1, "moiseshdz", "Moises")
    UserService.updateUserUsername(user, "Moisesg")
    expect(user.username).toBe("Moisesg")
  })

  test("4. Given a list of users give me the list of usernames", () => {
    const user1 = UserService.create(1, "moiseshdz1", "Moises")
    const user2 = UserService.create(1, "moiseshdz2", "Moises")
    const user3 = UserService.create(1, "moiseshdz3", "Moises")
    const usernames = UserService.getAllUsernames([user1, user2, user3])
    expect(usernames).toContain("moiseshdz1")
    expect(usernames).toContain("moiseshdz2")
    expect(usernames).toContain("moiseshdz3")
  })

})
