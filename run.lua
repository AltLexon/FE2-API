local path = rbxmSuite.download("AltLexon/FE2-API@latest", "api.rbxm")
local model = rbxmSuite.launch(path)
local API = rbxmSuite.require(model).default;

return API;