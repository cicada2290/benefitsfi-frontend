// 別タブで表示
export const openNewTab = (url: string) => {
  window.open ? window.open(url, '_blank') : window.location.assign(url)
}

export const decodeCurrencyCode = (hex: string) => {
  let ascii = ''
  for (let i = 0; i < hex.length; i += 2) {
    const part = hex.substring(i, i + 2)
    if (part === '00') {
      break
    }
    ascii += String.fromCharCode(parseInt(part, 16))
  }
  return ascii
}

export const getCurrency = (
  amount:
    | { value: string; currency: string; issuer?: string | undefined }
    | string
) => {
  return typeof amount === 'string'
    ? 'XRP'
    : amount.currency.length === 3
      ? amount.currency
      : decodeCurrencyCode(amount.currency)
}

export const getAllocationPercentage = (percentage: number) => {
  return Number(percentage / 100).toFixed(2)
}
