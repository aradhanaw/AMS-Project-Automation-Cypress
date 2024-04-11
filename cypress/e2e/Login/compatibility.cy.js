describe("Compatibility",()=>{
    const view = ['iphone-3','macbook-16','samsung-s10','ipad-mini']
    view.forEach(Element=>{
        it('Different Screen:'+Element,()=>{
            cy.log("Starting testing..")
            cy.viewport(Element)
            cy.visit("/login")
        })
    })
})