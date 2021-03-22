export const getPosition = e => {
  const event = e.targetTouches ? e.targetTouches[0] : e
  return {
    x: event.clientX,
    y: event.clientY
  }
}

export const validElement = (e, el, dragSelector) => {
  if (typeof dragSelector === 'string') {
    const list = Array.apply(null, el.querySelectorAll(dragSelector))
    return list.includes(e.target)
  } else {
    return true
  }
}

export const getNumberInRange = (num, min, max) => {
  return Math.min(Math.max(num, min), max)
}

export const trimPixel = distance => {
  return Number(distance.replace(/px$/, '')) || 0
}

export const getBounding = (el, elBounding) => {
  if (elBounding) {
    const elRect = el.getBoundingClientRect()
    const boundingRect = elBounding.getBoundingClientRect()
    const minTop = trimPixel(el.style.top) + boundingRect.y - elRect.y
    const minLeft = trimPixel(el.style.left) + boundingRect.x - elRect.x
    return {
      minTop,
      minLeft,
      maxTop: -minTop,
      maxLeft: -minLeft
    }
  }
}
