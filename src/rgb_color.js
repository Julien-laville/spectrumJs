import HCLColor from './hcl_color'

import lambda from "./hcl_color"
import lambda100 from "./hcl_color"

export default class RGBColor {
  constructor(r,g,b,a) {
    this.r = r
    this.g = g
    this.b = b
    this.a = a

  }

  link() {
    this.setHCL(HCLColor.fromRGB(this))
  }

  setHCL(hclColor) {
    this.hcla = hclColor
  }

  static fromHCL(hclColor) {
    let Q = Math.exp(1 - (3*hclColor.c / 4*hclColor.l) * (lambda / lambda100))
    let max = (4*hclColor.l - 3*hclColor.c) / (4*Q - 2) + (3*hclColor.c / 2*Q)
    let min = (4*hclColor.l - 3*hclColor.c) / (4*Q - 2)

    if(hclColor.h >= 0 && hclColor.h <= 60) {
      let g = max * Math.tan(3/2*hclColor.h)+min / (1 + Math.tan(3/2*hclColor.h))
      return new RGBColor(max, g, min, hclColor.a)
    } else if(hclColor.h > 60 && hclColor.h <= 120) {
      let r = (max * (1 + Math.tan(3/4 * hclColor.h - 180)) - min) / Math.tan(3/4 * (hclColor.h - 180))
      return new RGBColor(r, max, min, hclColor.a)
    } else if(hclColor.h > 120 && hclColor.h < 180) {
      let b = max * (1 + Math.tan(3 / 4 * (hclColor.h- 180)) - min * Math.tan((3 / 4 * (hclColor.h - 180))))
      return new RGBColor(min, max, b, hclColor.a)
    } else if(hclColor.h >= -60 && hclColor.h < 0) {
      let b = min * (1 + Math.tan(3/4 * hclColor.h)) - max * Math.tan(3/4 * hclColor.h)
      return new RGBColor(max, min, b, hclColor.a)
    } else if(hclColor.h >= -120 && hclColor.h < -60) {
      let r = (min * (1 + Math.tan(3/4 * hclColor.h)) - max) / Math.tan(3 / 4 * hclColor.h)
      return new RGBColor(r, min, max, hclColor.a)
    } else {
      let g = (min * (Math.tan((3/2) * (hclColor.h + 180))) + max) / (1 + Math.tan((3/2) * (hclColor.h + 180)))
      return new RGBColor(min, g, max, hclColor.a)
    }
  }

  toString() {
    return `rgba(${this.r},${this.g},${this.b},${this.a})`
  }


}