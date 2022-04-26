const MessageService = require('./../../app/services/MessageService')

describe("Tests for MessageService", () => {

  test("Create a new tweet", () => {
    const message = MessageService.create("Message", "Moises", "Hernandez")
    expect(message.message).toBe("Message")
    expect(message.receiver).toBe("Moises")
    expect(message.receptor).toBe("Hernandez")
  })

})
