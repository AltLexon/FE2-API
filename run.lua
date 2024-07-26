local rbxmSuite = loadstring(game:HttpGetAsync("https://github.com/richie0866/rbxm-suite/releases/latest/download/rbxm-suite.lua"))()
local path = rbxmSuite.download("AltLexon/FE2-API@latest", "api.rbxm")
local model = rbxmSuite.launch(path)
local API = rbxmSuite.require(model).default;

return API;