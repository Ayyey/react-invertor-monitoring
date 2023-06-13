import React from 'react'
import './value-signature.css'

export default function ValueSignature({ valueName, unitName, valueKey, valueData }) {
  let isDataPresent = false;
  if (valueData) {
    if (valueData[valueKey] != null)
      isDataPresent = true
  }
  return (
    <div className='value-signature'>
      <div className="value-name">{valueName + ', ' + unitName}</div>
      <div className="value-signature-data">
        {isDataPresent ? valueData[valueKey] : "Н/Д"}
      </div>
    </div>
  )
}
