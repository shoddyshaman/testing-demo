const { stateAge, addUser, addColor } = require('./functions')

test("should return i am {age}",() => {
    expect(stateAge(25)).toEqual("I am 25")
})

test("should return user created status",() => {
    expect(addUser('Spencer',21)).toEqual({name:'Spencer',age:21})
    expect(addUser('Bruno',15)).toEqual("User not old enough")
})

test("should add new color and return list of uniqoe colors",() => {
    expect(addColor('Red')).toContain('red')
})

// describe("user status",() => {

//     test("should return user created status for 21 and above",() => {
//         expect(addUser('Spencer',21)).toEqual({name:'Spencer',age:21})
        
//     })

//     test("user status for below 21", () => {
//         expect(addUser('Bruno',15)).toEqual("User not old enough")
//     })

// })