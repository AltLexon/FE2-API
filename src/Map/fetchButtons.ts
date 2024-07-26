export default function(map: Model): Set<Model> {
    const Buttons: Set<Model> = new Set();

    for (const [k, v] of pairs(map.GetDescendants())) {
        if (v.IsA("ImageLabel") && v.Name === "ButtonIcon") {
            
            const BillboardGui = v.Parent;
            if (BillboardGui !== undefined) {

                const ButtonModel = BillboardGui.Parent;
                if (ButtonModel !== undefined && ButtonModel.IsA("Model")) {
                    Buttons.add(ButtonModel);
                }
                
            }

        }
    }

    return Buttons;
}