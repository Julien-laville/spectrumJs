import RGBColor from "./src/rgb_color"

let red = new RGBColor(100, 100, 0, 1)
red.link()
console.log(red.toString())
console.log(red.hcla.toString())

let newRed = RGBColor.fromHCL(red.hcla)
console.log(newRed.toString())
