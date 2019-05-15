const API_URL = 'http://localhost:3001'

const getItemData = async (id) => {
  const response = await fetch(`${API_URL}/item-data`)
  const json = await response.json()
  const itemIndex = json.data.map(item => item.id).indexOf(id)
  return json.data[itemIndex]
}

const sendItemData = async (data) => {
  await fetch(`${API_URL}/item-data`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

module.exports = {
  getItemData,
  sendItemData
}
