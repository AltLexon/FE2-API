import { Players } from "@rbxts/services";

export interface ZiplineData {
    length: number,
    positions: Vector3[]
}

const LocalPlayer = Players.LocalPlayer;
const PlayerScripts = LocalPlayer.FindFirstChildOfClass("PlayerScripts");
const CL_MAIN_GameScript = PlayerScripts?.WaitForChild("CL_MAIN_GameScript") as LocalScript;

const Alert = CL_MAIN_GameScript.WaitForChild("Alert") as BindableEvent;
const Notify = CL_MAIN_GameScript.WaitForChild("Alert") as BindableEvent;

export function newAlert(text: string, color3?: Color3, seconds?: number) {
    Alert.Fire(text, color3, seconds);
}

export function newNotification(info: string, title?: string, actionFunc?: Callback, image?: number) {
    Notify.Fire(info, title, actionFunc, image);
}

export function updRopeData(data: ZiplineData[]) {
    // Fire the updRopeData function;
}