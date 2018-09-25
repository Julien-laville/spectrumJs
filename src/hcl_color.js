import RGBColor from "./rgb_color";

export const lambda = 10
export const lambda100 = 100

export default class HCLColor {
  constructor(h,c,l, a) {
    this.h = h
    this.c = c
    this.l = l
    this.a = a
  }

  link() {
    this.setRGB(RGBColor.fromHCL(this))
  }

  setRGB(rgbColor) {
    this.rgb = rgbColor
  }

  static fromRGB(rgbColor) {
    let H = Math.atan2(rgbColor.g - rgbColor.b, rgbColor.r - rgbColor.g)
    let minRGB = Math.min(rgbColor.r, rgbColor.g, rgbColor.b)
    let maxRGB = Math.max(rgbColor.r, rgbColor.g, rgbColor.b)

    let alpha = (1 / 100) * (minRGB / maxRGB)

    let Q = Math.exp(alpha * lambda)
    let C = (Q * Math.abs(rgbColor.r - rgbColor.g) + Math.abs(rgbColor.g - rgbColor.b) + Math.abs(rgbColor.b - rgbColor.r)) / lambda
    let L = (Q * maxRGB + (1 - Q) *minRGB) / 2

    return new HCLColor(H,C,L,rgbColor.a)
  }

  toString() {
    return `hcla(${this.h},${this.c},${this.l},${this.a})`
  }

}