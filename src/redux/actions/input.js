//Action Types
export const NEW_INPUT = 'NEW_INPUT'
export const NEW_WORD_BANK = 'NEW_WORD_BANK'

//Action Creators
export const changeInput = (input) => ({
    type: NEW_INPUT,
    input: input
}); 

export const changeWordBank = (input) => ({
    type: NEW_WORD_BANK,
    textarea: input
})
