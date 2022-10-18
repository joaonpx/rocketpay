import './css/index.css'

const ccBgColor01 = document.querySelector(
  '.cc-bg svg > g g:nth-child(1) ellipse'
)
const ccBgColor02 = document.querySelector('.cc-bg svg > g g:nth-child(2) path')
const ccBgColor03 = document.querySelector(
  '.cc-bg svg > g g:nth-child(3) ellipse'
)
const ccLogo = document.querySelector('.cc-logo span:nth-child(2) img')

function setCardType(type) {
  const colors = {
    visa: ['#4959EC', '#8000CE', '#5CCEFF'],
    mastercard: ['#F16529', '#FF3C21', '#FFA724'],
    default: ['none', 'none', 'none']
  }

  ccBgColor01.setAttribute('fill', colors[type][0])
  ccBgColor02.setAttribute('fill', colors[type][1])
  ccBgColor03.setAttribute('fill', colors[type][2])
  ccLogo.setAttribute('src', `cc-${type}.svg`)
}

globalThis.setCardType = setCardType
