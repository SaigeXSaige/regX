//Action Types
export const NEW_INPUT = 'NEW_INPUT'

//Action Creators
export const changeInput = (input) => ({
    type: NEW_INPUT,
    input: input
}); //to change home page input 
