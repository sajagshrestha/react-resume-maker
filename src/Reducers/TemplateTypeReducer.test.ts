import * as TemplateTypeReducer from "./TemplateTypeReducer"
// @ponicode
describe("TemplateTypeReducer.TemplateTypeReducer", () => {
    test("0", () => {
        let callFunction: any = () => {
            TemplateTypeReducer.TemplateTypeReducer(undefined, { type: "CHANGE_TEMPLATE", templateName: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})
