describe('CRUD API Testing with Cypress', () => {

    const apiUrl = 'https://petstore.swagger.io/v2/pet';
    let petId = 12345;
  
    // Create a new pet (POST)
    it('Create a new pet', () => {
      cy.request({
        method: 'POST',
        url: apiUrl,
        body: {
          "id": petId,
          "name": "TestPet",
          "status": "available"
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq("TestPet");
        expect(response.body.status).to.eq("available");
      });
    });
  
    // Read the pet (GET)
    it('Get the created pet', () => {
      cy.request({
        method: 'GET',
        url: `${apiUrl}/${petId}`
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(petId);
        expect(response.body.name).to.eq("TestPet");
      });
    });
  
    // Update the pet (PUT)
    it('Update the pet status', () => {
      cy.request({
        method: 'PUT',
        url: apiUrl,
        body: {
          "id": petId,
          "name": "TestPet",
          "status": "sold"
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.status).to.eq("sold");
      });
    });
  
    // Delete the pet (DELETE)
    it('Delete the pet', () => {
      cy.request({
        method: 'DELETE',
        url: `${apiUrl}/${petId}`
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    // Verify the pet is deleted (GET)
    it('Get deleted pet (should return 404)', () => {
      cy.request({
        method: 'GET',
        url: `${apiUrl}/${petId}`,
        failOnStatusCode: false  // Prevent Cypress from failing the test
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  
  });
  