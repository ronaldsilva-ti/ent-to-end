describe('TO DO LIST UI', () => {

    it('Verificar titulo na Navbar se esta correto', () => {
        cy.visit('/');

        cy.contains('END-TO-END')
    })

    it('Adicionar nova tarefa',() => {
        cy.visit('/');

        cy.get('[data-cy=input-task]').type('Nova Tarefa 1');
        cy.get('[data-cy=btn-add').click()

        cy.get('[data-cy=input-task]').type('Nova Tarefa 2');
        cy.get('[data-cy=btn-add').click()


        cy.get('[data-cy=input-task]').type('Nova Tarefa 3');
        cy.get('[data-cy=btn-add').click()

        cy.get('[data-cy=input-task]').type('Nova Tarefa 4');
        cy.get('[data-cy=btn-add').click()

        
    });

  

})