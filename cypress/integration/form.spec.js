describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('localhost:3000/pizza');
    })

    const nameInput = () => cy.get('input[name=name]');
    const sizeInput = () => cy.get('select[name=size]');
    const sauceInput = () => cy.get('input[name=sauce]');
    const topping1Input = () => cy.get('input[name=topping1]');
    const topping2Input = () => cy.get('input[name=topping2]');
    const topping3Input = () => cy.get('input[name=topping3]');
    const topping4Input = () => cy.get('input[name=topping4]');
    const submitBtn = () => cy.get('button[id=order-button]');

    describe('Testing the Pizza Form', () => {
        it('Can add text to name', () => {
            nameInput()
                .should('have.value', '')
                .type('Jim')
                .should('have.value', 'Jim')
        })

        it('Can select multiple toppings', () => {
            topping1Input().check();
            topping2Input().check();
            topping3Input().check();
            topping4Input().check();
        })

        it('Can submit the form', () => {
            nameInput().type('Jim');
            sizeInput().select('small');
            topping1Input().check();
            submitBtn().click()
        })
    })
})
// do not type below here