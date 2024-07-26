export default function(map: Model): Part | undefined {
    let Spawn: Part | undefined;

    for (const [k, v] of pairs(map.GetChildren())) {
        if (v.IsA("Part")) {
            const YSize: number = math.floor(v.Size.Y * 10) / 10;
            if (YSize !== 0.1) {
                continue;
            }

            if (v.Material !== Enum.Material.SmoothPlastic) {
                continue;
            }

            Spawn = v;
            break;
        }

    }

    return Spawn;
}