export default function(map: Model): Model | undefined {
    for (const [k, v] of pairs(map.GetDescendants())) {
        if (v.IsA("ImageLabel") && v.Name === "ButtonIcon") {

            const Green = new Color3(0, 1, 0);
            const Blue = new Color3(0, 1, 1);

            if (v.ImageColor3 === Green || v.ImageColor3 === Blue) {
                
                const BillboardGui = v.Parent;
                if (BillboardGui !== undefined) {

                    const ButtonModel = BillboardGui.Parent;
                    if (ButtonModel !== undefined && ButtonModel.IsA("Model")) {
                        return ButtonModel;
                    }
                    
                }
                
            }
        }
    }

    return undefined;
}