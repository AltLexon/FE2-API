import { ReplicatedStorage } from "@rbxts/services";

const Remote = ReplicatedStorage.WaitForChild("Remote") as Folder;

function GetPassKey() {
  const ReqPasskey = Remote.WaitForChild("ReqPasskey") as RemoteFunction;

  return -(ReqPasskey.InvokeServer() as number);
}

export default {
    GetPassKey: GetPassKey
}